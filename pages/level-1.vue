<template>
  <Quizz
    :data="dataEN"
    :level="1"
    :number-question="10"
  />
</template>

<script>
import dataEN from '../_assets/datas/en.json'

export default {
  name: 'Level1',
  data () {
    return {
      dataEN: Object.values(dataEN)
    }
  }
}
</script>
