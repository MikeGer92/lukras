<template>
  <div>
    <input type="radio" id="quest"
     :name="raidioData.name" value="email">
    <label for="quest">Email</label>
  </div>
</template>

<script>
  export default {
    name: 'CustomRadio',
    props: {
      raidioData: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">

</style>
