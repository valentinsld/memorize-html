<template>
  <div class="memory">
    <BackHome :end="false" name="memory" />

    <header class="memory__header">
      <h1 class="header__title">
        How many <span>HTML tags</span> can you remember ?
      </h1>
      <p v-if="remaining.length" class="header__subtitle">
        {{ remaining.length }} remaining
      </p>
      <p v-else>
        You find all tags !!!
      </p>
    </header>

    <content class="memory__form">
      <div class="form__content">
        <div class="content__container card">
          <input ref="input" class="content__input" placeholder="tag">
          <button class="content__button btn" @click="validate">
            Validate
          </button>
        </div>
      </div>
      <div ref="helpContent" class="form__help">
        <p v-if="errorInput" class="help__error">
          {{ errorInput }}
        </p>
        <button class="help__btn link" @click="seeHelp">
          Need hints ? ({{ Math.max(leftHint - 1, 0) }} left)
        </button>

        <div class="help__popup card">
          {{ leftHint ? help.help : 'No more hint' }}
        </div>
      </div>
    </content>

    <content class="memory__table card">
      <div class="table__rowEnd">
        {{ remaining.length }} remaining
      </div>
      <div v-for="(res, index) in responses" :key="res+index" class="table__row">
        <p class="row__index">
          {{ index }}.
        </p>
        <p class="row__tag">
          {{ res }}
        </p>
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
      help: { tagName: '', help: '', level: 0 },
      leftHint: 4,
      lastHint: null
    }
  },
  beforeMount () {
    this.createRemaining()
  },
  mounted () {
    this.initInput()
    this.initHelp()
    this.onCloseTab()
  },
  beforeDestroy () {
    window.onbeforeunload = null
  },
  methods: {
    onCloseTab () {
      window.onbeforeunload = () => {
        return true
      }
    },
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
        if (!helpContent.contains(e.target)) {
          helpContent.classList.remove('-see')
        }
      })
    },
    newHelp (value = '', remaining = this.remaining) {
      if (value !== this.help.tagName) { return }
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

      if (this.lastHint !== this.help.tagName) {
        this.leftHint -= 1
        this.lastHint = this.help.tagName
      }
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
