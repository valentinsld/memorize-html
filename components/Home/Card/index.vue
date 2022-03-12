<!-- eslint-disable vue/no-v-html -->
<template>
  <nuxt-link
    :class="`homeCard card -${color}`"
    to="level-1"
  >
    <img class="homeCard__image" :src="image">
    <h4 class="homeCard__title" v-html="title" />
    <span v-if="tag" class="homeCard__tag">
      {{ tag }}
    </span>
  </nuxt-link>
</template>

<script>
import './style.less'

export default {
  name: 'HomeBLog',
  props: {
    linkTo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default () {
        return ''
      }
    },
    color: {
      type: String,
      default () {
        return 'green'
      },
      validator: (color) => {
        return [
          'green',
          'orange',
          'red',
          'blue'
        ].includes(color)
      }
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>
