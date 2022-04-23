<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'QuizzTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
