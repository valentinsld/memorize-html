<template>
  <Quizz
    :data="dataEN"
    :level="4"
    :number-question="18"
  />
</template>

<script>
import dataEN from '../_assets/datas/en.json'

export default {
  name: 'Level4',
  data () {
    return {
      dataEN: Object.values(dataEN)
    }
  }
}
</script>
