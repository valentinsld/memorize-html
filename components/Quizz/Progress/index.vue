<template>
  <div>
    {{ current }} / {{ max }}
  </div>
</template>

<script>
export default {
  name: 'QuizzProgress',
  props: {
    current: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  }
}
</script>
