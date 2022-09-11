<template>
  <div>
    <div>
      <Header @scrollTo="moveTo"></Header>
      <nuxt />
      <Footer @goTo="moveTo"></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '~/components/Footer.vue';
export default {
  components: { Header, Footer },
  methods: {
    moveTo(id) {
      console.log(id)
      this.$router.replace({ name: this.$route.name, hash: `#${id}` });
    }
  }
}
</script>

<style lang="scss">

</style>
