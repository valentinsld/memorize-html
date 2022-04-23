<template>
  <div class="quizz">
    <BackHome :end="end" />

    <QuizzProgress :current="currentQuestion + 1" :data="questions" />
    <QuizzEnd v-if="end" :data="questions" :link-next="linkNext" />

    <div
      v-if="questions[currentQuestion] && !end"
      class="quizz__content"
    >
      <QuizzTitle
        :title="questions[currentQuestion].title"
      />
      <QuizzCards
        ref="cards"
        :data="questions[currentQuestion]"
        :state="state"
      />

      <div class="quizz__buttons">
        <a
          v-if="state"
          class="btn -secondary"
          :href="questions[currentQuestion].response.linkUrl"
          target="_blank"
        >
          Learn more about {{ questions[currentQuestion].response.name }}
        </a>
        <button class="btn" @click="next">
          {{ !state ? 'validate' : 'next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import sampleSize from '~/helpers/sample.js'
import shuffle from '~/helpers/shuffle.js'

import './style.less'

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
    },
    linkNext: {
      type: String,
      default () {
        return ''
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
  mounted () {
    this.onCloseTab()
  },
  beforeDestroy () {
    window.onbeforeunload = null
  },
  methods: {
    onCloseTab () {
      window.onbeforeunload = () => {
        if (!this.end) {
          return 'Are you sure you want to leave? This will delete your progress'
        }
      }
    },
    generateQuestions () {
      // select balise with level
      let leveledData = []
      let questions = []
      if (this.level !== -1) {
        leveledData = [...this.data].filter(el => el.level === this.level)

        // get random from levelData
        questions = sampleSize(leveledData, Math.min(leveledData.length, this.numberQuestion))
      } else {
        const dataLevel2 = [...this.data].filter(el => el.level === 2)
        const dataLevel3 = [...this.data].filter(el => el.level === 3)
        const dataLevel4 = [...this.data].filter(el => el.level === 4)
        // level 1 :  0
        // level 2 :  4 (0.1)
        // level 3 : 10 (0.3)
        // level 4 : 16 (0.6)
        const questionsLevel2 = sampleSize(dataLevel2, Math.min(dataLevel2.length, Math.round(this.numberQuestion * 0.1)))
        const questionsLevel3 = sampleSize(dataLevel3, Math.min(dataLevel2.length, Math.round(this.numberQuestion * 0.3)))
        const questionsLevel4 = sampleSize(dataLevel4, Math.min(dataLevel2.length, Math.round(this.numberQuestion * 0.6)))

        // get random from levelData
        questions = [...questionsLevel2, ...questionsLevel3, ...questionsLevel4]
        leveledData = questions
      }

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
          this.currentQuestion = this.questions.length
          this.end = true
          return
        }
      }

      this.state = this.state ? 0 : 1
    }
  }
}
</script>
