<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="quizzEnd">
    <section class="quizzEnd__top">
      <img class="top__image" src="/imgs/Trophy.png">
      <h2 class="top__score">
        YOUR SCORE : {{ getScore }}/{{ data.length }}
      </h2>
      <p class="top__subScore">
        {{ getSubScore }}
      </p>
    </section>

    <section class="quizzEnd__socials">
      <h3 class="socials__title">
        Share your score on social networks :
      </h3>

      <div class="socials__links">
        <a :href="getLinkTwitter" target="_blank">
          <img src="/imgs/Twitter.png">
        </a>
        <a :href="getLinkLinkedin" target="_blank">
          <img src="/imgs/Linkedin.png">
        </a>
        <a :href="getLinkFacebook" target="_blank">
          <img src="/imgs/Facebook.png">
        </a>
      </div>
    </section>

    <h2 class="quizzEnd__tableTitle">
      See your answers :
    </h2>
    <section class="quizzEnd__table">
      <div
        v-for="q in data"
        :key="q.title"
        :class="{
          'table__row': true,
          '-wrongResponse': !q.responseUser.result
        }"
      >
        <a
          class="table__balise"
          :href="q.response.linkUrl"
          target="_blank"
        >
          <p>
            {{ q.response.balise }}
          </p>
        </a>
        <div class="table__description">
          <p v-html="q.response.description" />
          <a :href="q.response.linkUrl" target="_blank">
            Read more
          </a>
        </div>
      </div>
    </section>

    <section class="quizzEnd__bottom">
      <nuxt-link v-if="linkNext" :to="linkNext" class="btn -secondary">
        Go to next Level
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import JSConfetti from 'js-confetti'
import './style.less'

const TEXT_SHARE = 'Test your knowledge of HTML! Try to beat my score: {{score}}/{{scoreMax}} on '

export default {
  name: 'QuizzEnd',
  props: {
    data: {
      type: Array,
      required: true
    },
    linkNext: {
      type: String,
      default () {
        return ''
      }
    }
  },
  computed: {
    getScore () {
      const score = this.data.reduce((a, b) => a + (b.responseUser.result ? 1 : 0), 0)
      return score
    },
    getSubScore () {
      const score = this.data.reduce((a, b) => a + (b.responseUser.result ? 1 : 0), 0) / this.data.length

      let text = 'Oops 🙊 Try again to improve your score!'
      if (score > 0.8) {
        text = 'Just too loud! 😎 🥳'
      } else if (score > 0.6) {
        text = 'Not bad !! You can go to the next level 🤩'
      } else if (score > 0.4) {
        text = 'That\'s a good score! But you can still do better 😉'
      }

      return text
    },
    getLinkTwitter () {
      return `https://twitter.com/intent/tweet?text=${this.getTextShare()} ${window.location.href}`
    },
    getLinkLinkedin () {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
    },
    getLinkFacebook () {
      return `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${this.getTextShare()}`
    }
  },
  mounted () {
    this.initConfetti()
  },
  methods: {
    getTextShare () {
      const score = this.data.reduce((a, b) => a + (b.responseUser.result ? 1 : 0), 0)
      const scoreMax = this.data.length

      return TEXT_SHARE.replace('{{score}}', score).replace('{{scoreMax}}', scoreMax)
    },
    initConfetti () {
      const jsConfetti = new JSConfetti()

      const score = this.data.reduce((a, b) => a + (b.responseUser.result ? 1 : 0), 0)
      const scoreMax = this.data.length

      jsConfetti.addConfetti({
        confettiNumber: 500 * score / scoreMax
      })
    }
  }
}
</script>
