<template>
  <Quizz
    :data="dataEN"
    :level="1"
    :number-question="10"
    link-next="/level-2"
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
  },
  head () {
    return {
      title: 'Level 1 - Memorize HTML'
    }
  }
}
</script>
