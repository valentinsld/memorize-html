<template>
  <div>
    <Quizz
      :data="dataEN"
      :level="4"
      :number-question="18"
    />
  </div>
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
