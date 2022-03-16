<template>
  <Quizz
    :data="dataEN"
    :level="-1"
    :number-question="30"
  />
</template>

<script>
import dataEN from '../_assets/datas/en.json'

export default {
  name: 'Level5',
  data () {
    return {
      dataEN: Object.values(dataEN)
    }
  },
  head () {
    return {
      title: 'Level 5 - Memorize HTML'
    }
  }
}
</script>
