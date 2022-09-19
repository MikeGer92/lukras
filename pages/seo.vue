<template>
  <div class="seo">

  </div>
</template>

<script>
  export default {
    name: 'Seo',
    data() {
      return {

      }
    },
    mounted() {
      console.log(this.$route.path)
    }

  }
</script>

<style lang="scss">
  .seo {
    margin-top: 36px;
    width: 100%;
    min-height: 540px;
    background: url('@/assets/images/seo-banner.svg') 0px 0px/cover no-repeat;
  }

</style>
