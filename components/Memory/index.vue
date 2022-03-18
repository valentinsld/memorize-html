<template>
  <div class="memory">
    <header class="memory__header">
      <h1 class="memory__title">
        How many HTML tags can you remember ?
      </h1>
      <p class="memory__subtitle">
        {{ remaining.length }} remaining
      </p>
    </header>

    <content class="memory__form">
      <div>
        <input ref="input" placeholder="tag">
        <button @click="validate">
          Validate
        </button>
        <p v-if="errorInput">
          {{ errorInput }}
        </p>
      </div>
      <div ref="helpContent">
        <button @click="seeHelp">
          You need helps ?
        </button>

        <div>
          <span>{{ help.tagName }}</span>
          {{ ' ' +help.help }}
        </div>
      </div>
    </content>

    <content class="memory__table">
      <div v-for="(res, index) in responses" :key="res+index" class="table__row">
        <p>{{ index }}</p>
        <p>{{ res }}</p>
      </div>
      <div class="table__rowEnd">
        {{ remaining.length }} remaining
      </div>
    </content>
  </div>
</template>

<script>
import JSConfetti from 'js-confetti'
import './style.less'

export default {
  name: 'Memory',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      responses: [],
      remaining: [],
      errorInput: '',
      help: { tagName: '', help: '', level: 0 }
    }
  },
  beforeMount () {
    this.createRemaining()
  },
  mounted () {
    this.initInput()
    this.initHelp()
  },
  methods: {
    createRemaining () {
      const remaining = []

      for (const tagName in this.data) {
        if (tagName === 'h1 to h6') {
          for (let i = 1; i <= 6; i++) {
            remaining.push({
              tagName: `h${i}`,
              level: this.data[tagName].level,
              help: 'What ' + this.data[tagName].info.charAt(0).toLowerCase() + this.data[tagName].info.substring(1) + ' ' + i + ' ?'
            })
          }
        } else {
          remaining.push({
            tagName,
            level: this.data[tagName].level,
            help: 'What ' + this.data[tagName].info.charAt(0).toLowerCase() + this.data[tagName].info.substring(1) + ' ?'
          })
        }
      }

      this.remaining = remaining

      this.newHelp('', remaining)
    },
    initInput () {
      const { input } = this.$refs

      input.addEventListener('keydown', (ev) => {
        if (ev.code === 'Enter') {
          this.validate()
        }
      })
    },
    validate () {
      const { input } = this.$refs
      const value = input.value.toLowerCase()
      if (!value) { return }

      this.errorInput = ''

      const isTagRemaingin = this.remaining.find(el => el.tagName === value)
      const isTagResponse = this.responses.find(el => el === value)
      if (isTagRemaingin) {
        this.remaining = this.remaining.filter(el => el.tagName !== value)
        this.responses.push(value)
        input.value = ''
        this.newHelp(value)

        if (this.remaining.length === 0) {
          this.endAnimation()
        }
      } else if (isTagResponse) {
        this.errorInput = input.value + ' is already entered'
        input.value = ''
      } else {
        this.errorInput = input.value + ' does\'nt exist'
      }
    },
    initHelp () {
      const { helpContent } = this.$refs

      window.addEventListener('click', function (e) {
        if (helpContent.contains(e.target)) {
          helpContent.classList.remove('-see')
        }
      })
    },
    newHelp (value = '', remaining = this.remaining) {
      if (value !== this.help.tagName) { return }
      // TODO
      // select in first level 1 puis level 2 puis autre
      let dataLevel = 1
      let data = [...this.remaining].filter(el => el.level === dataLevel)

      while (!data.length && dataLevel <= 5) {
        dataLevel += 1
        data = [...this.remaining].filter(el => el.level === dataLevel)
      }

      if (data.length === 0) {
        this.help = { tagName: '', help: '', level: 0 }
        return
      }

      const aleaNumer = Math.floor((data.length - 1) * Math.random())
      this.help = data[aleaNumer]
    },
    seeHelp () {
      const { helpContent } = this.$refs

      helpContent.classList.add('-see')
    },

    // END
    endAnimation () {
      const jsConfetti = new JSConfetti()

      jsConfetti.addConfetti({
        confettiNumber: 500
      })
    }
  }
}
</script>
