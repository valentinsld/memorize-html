<template>
  <div>
    <div
      class="progress"
      :class="{
        '-hasLot': max > 20
      }"
    >
      <span
        v-for="(d, index) in data"
        :key="index"
        class="progress__item"
        :class="{
          '-wrong': d.responseUser ? !d.responseUser.result : false,
          '-right': d.responseUser ? d.responseUser.result : false
        }"
      />
    </div>
    <p class="progressMobile">
      Question {{ current }} / {{ max }}
    </p>
  </div>
</template>

<script>
import './style.less'

export default {
  name: 'QuizzProgress',
  props: {
    current: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    max () {
      return this.data.length
    }
  }
}
</script>
