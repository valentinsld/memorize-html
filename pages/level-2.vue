<template>
  <div>
    <Quizz
      :data="dataEN"
      :level="2"
      :number-question="14"
    />
  </div>
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
