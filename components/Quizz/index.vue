<template>
  <div>
    Hello
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
      this.questions = sampleSize(leveledData, Math.min(leveledData.length, this.numberQuestion))

      // shuffle array
      this.questions = shuffle(this.questions)
    }
  }
}
</script>
