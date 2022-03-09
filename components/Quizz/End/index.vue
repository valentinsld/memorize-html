<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <p>
      {{ getScore }}
    </p>

    <div v-for="q in data" :key="q.title">
      <p>{{ q.response.balise }}</p>
      <p v-html="q.response.description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizzEnd',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    getScore () {
      const score = this.data.reduce((a, b) => a + (b.responseUser.result ? 1 : 0), 0)
      return score
    }
  }
}
</script>
