<template>
  <div>
    <QuizzEnd v-if="end" :data="questions" />
    <QuizzProgress :current="currentQuestion + 1" :max="questions.length" />

    <div v-if="questions[currentQuestion] && !end">
      <QuizzTitle
        :title="questions[currentQuestion].title"
      />
      <QuizzCards
        ref="cards"
        :data="questions[currentQuestion]"
        :state="state"
      />

      <button class="btn" @click="next">
        {{ !state ? 'validate' : 'next' }}
      </button>
    </div>
  </div>
</template>

<script>
import sampleSize from '../../helpers/sampleSize.js'
import shuffle from '../../helpers/shuffleArr.js'

export default {
  name: 'Quizz',
  props: {
    data: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default () {
        return 1
      }
    },
    numberQuestion: {
      type: Number,
      default () {
        return 999
      }
    }
  },
  data () {
    return {
      currentQuestion: 0,
      questions: [],
      leveledQuestions: [],
      state: 0,
      end: false,
      results: []
    }
  },
  beforeMount () {
    this.generateQuestions()
  },
  getComputed: {

  },
  methods: {
    generateQuestions () {
      // select balise with level
      const leveledData = [...this.data].filter(el => el.level === this.level)

      // get random from levelData
      let questions = sampleSize(leveledData, Math.min(leveledData.length, this.numberQuestion))

      // shuffle array
      questions = shuffle(questions)

      // format questions
      questions = questions.map((q) => {
        const dataWithoutQ = [...leveledData].filter(d => d.name !== q.name)

        // get answers
        let answers = sampleSize(dataWithoutQ, 3)
        answers = [...answers, q]
        answers = shuffle(answers)

        // title
        const title = 'What ' + q.info.charAt(0).toLowerCase() + q.info.substring(1) + ' ?'

        return {
          title,
          answers,
          response: q
        }
      })

      this.questions = questions
    },
    next () {
      const cards = this.$refs.cards
      if (typeof cards.response !== 'number' || isNaN(cards.response)) { return }

      // if next question
      if (this.state) {
        this.currentQuestion += 1
        cards.setResponse(null, true)
      } else {
        // if validate
        const currentQuestion = this.questions[this.currentQuestion]
        const responseUser = currentQuestion.answers[cards.response]
        currentQuestion.responseUser = {
          ...responseUser,
          result: responseUser.name === currentQuestion.response.name
        }

        // IF end
        if (this.currentQuestion + 1 === this.questions.length) {
          this.end = true
          return
        }
      }

      this.state = this.state ? 0 : 1
    }
  }
}
</script>
