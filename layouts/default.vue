<template>
  <div>
    <div>
      <Header></Header>
      <nuxt />
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '~/components/Footer.vue';
export default {
  components: { Header, Footer },
}
</script>

<style lang="scss">

</style>
