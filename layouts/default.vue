<template>
  <main class="container">
    <Nuxt />
  </main>
</template>

<script>
import '../_assets/less/_main.less'

export default {
  name: 'LayoutDefault',
  mounted () {
    this.calculateVh()
    this.setGoatCounter()
  },
  methods: {
    setGoatCounter () {
      const script = document.createElement('script')
      script.setAttribute('src', '//gc.zgo.at/count.js')
      script.dataset.goatcounter = 'https://html-memoryze.goatcounter.com/count'
      document.head.appendChild(script)
    },
    calculateVh () {
      this.$el.style.setProperty('--vh', window.innerHeight / 100 + 'px')
      this.$el.style.setProperty('--vhRes', window.innerHeight / 100 + 'px')

      window.addEventListener('resize', () => this.$el.style.setProperty('--vhRes', window.innerHeight / 100 + 'px'))
    }
  }
}
</script>
