<template>
  <Quizz
    :data="dataEN"
    :level="2"
    :number-question="14"
  />
</template>

<script>
import dataEN from '../_assets/datas/en.json'

export default {
  name: 'Level2',
  data () {
    return {
      dataEN: Object.values(dataEN)
    }
  }
}
</script>
