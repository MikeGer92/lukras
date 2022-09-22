<template>
  <div>
    <div id="app">
      <SeoHeader></SeoHeader>
      <nuxt />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '~/components/Footer.vue';
import SeoHeader from '~/components/SeoHeader.vue';
export default {
  components: { Header, Footer, SeoHeader },
}
</script>

<style lang="scss">

</style>
