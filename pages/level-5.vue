<template>
  <div>
    <Quizz
      :data="dataEN"
      :level="-1"
      :number-question="30"
    />
  </div>
</template>

<script>
import dataEN from '../_assets/datas/en.json'

export default {
  name: 'Level5',
  data () {
    return {
      dataEN: Object.values(dataEN)
    }
  }
}
</script>
