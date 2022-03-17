<!-- eslint-disable vue/no-parsing-error -->
<template>
  <nav class="backHome">
    <nuxt-link v-if="end" to="/">
      < Back to home Link
    </nuxt-link>
    <button v-else class="backHome__link" @click="openPopup">
      < Back to home Popup
    </button>

    <div class="backHome__popup" :class="{'-open': popup}">
      <div class="popup card">
        <h3 class="popup__title">
          Are you sure to leave the quiz ?
        </h3>
        <p class="popup__subtitle">
          This will delete your progress
        </p>

        <div class="popup__buttons">
          <button class="popup__link" @click="closePopup">
            Continue the quiz
          </button>
          <nuxt-link class="popup__button btn" to="/">
            Leave the quiz
          </nuxt-link>
        </div>
      </div>
    </div>
    </button>
  </nav>
</template>

<script>
import './style.less'

export default {
  name: 'BackHome',
  props: {
    end: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      popup: false
    }
  },
  methods: {
    openPopup () {
      this.popup = true
    },
    closePopup () {
      this.popup = false
    }
  }
}
</script>
