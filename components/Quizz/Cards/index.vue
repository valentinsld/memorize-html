<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="cards"
    :class="{
      '-hasResponse': state
    }"
  >
    <button
      v-for="(answer, index) in data.answers"
      :key="index"
      :data-index="index"
      class="card cards__item"
      :class="{
        '-selected': response === index,
        '-good': answer.name === data.response.name && state,
        '-wrong': answer.name !== data.response.name && response === index && state
      }"
      @click="setResponse(index)"
    >
      <span>
        {{ answer.balise }}
      </span>
      <span
        v-if="answer.name === data.response.name && state"
        class="info"
        v-html="answer.description.replaceAll('<a', '<span').replaceAll('</a', '</span')"
      />
      <span
        v-if="answer.name !== data.response.name && response === index && state"
        class="info"
      >
        {{ answer.info }}
      </span>
    </button>
  </div>
</template>

<script>
import './style.less'

export default {
  name: 'QuizzCards',
  props: {
    data: {
      type: Object,
      required: true
    },
    state: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      response: null
    }
  },
  methods: {
    setResponse (index, forced = false) {
      if (!this.state || forced) {
        this.response = parseInt(index)
      }
    }
  }
}
</script>
