<template>
  <Quizz
    :data="dataEN"
    :level="3"
    :number-question="15"
    link-next="/level-4"
  />
</template>

<script>
import dataEN from '../_assets/datas/en.json'

export default {
  name: 'Level3',
  data () {
    return {
      dataEN: Object.values(dataEN)
    }
  }
}
</script>
