<template>
  <Memory :data="dataEN" />
</template>

<script>
import dataEN from '../_assets/datas/en.json'

export default {
  name: 'MemoryPage',
  data () {
    return {
      dataEN
    }
  },
  head () {
    return {
      title: 'Tags memory - Memorize HTML'
    }
  }
}
</script>
