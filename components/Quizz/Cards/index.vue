<template>
  <div>
    <button
      v-for="(answer, index) in data.answers"
      :key="index"
      :data-index="index"
      :class="{
        'card': true,
        '-selected': response === index,
        '-good': answer.name === data.response.name && state,
        '-wrong': answer.name !== data.response.name && response === index && state
      }"
      @click="setResponse(index)"
    >
      {{ answer.balise }}
      <span v-if="response === index && !state">selected</span>
      <span v-if="answer.name === data.response.name && state">GOOD RESPONSE</span>
      <span v-if="answer.name !== data.response.name && response === index && state">WRONG RESPONSE</span>
    </button>
  </div>
</template>

<script>
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
