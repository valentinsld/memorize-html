<template>
  <div>
    <div
      class="progress"
      :class="{
        '-hasLot': max > 20
      }"
    >
      <span
        v-for="index in max"
        :key="index"
        class="progress__item"
        :class="{
          '-passed': index <= current
        }"
      />
    </div>
    <p class="progressMobile">
      {{ current }} / {{ max }}
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
    max: {
      type: Number,
      required: true
    }
  }
}
</script>
