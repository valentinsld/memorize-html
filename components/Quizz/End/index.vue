<template>
  <div>
    {{ getScore }}
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
