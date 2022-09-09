<template>
  <div class="main">
    <MainBlock></MainBlock>
    <CalcBlock></CalcBlock>

</div>
</template>

<script>
import MainBlock from '~/components/MainBlock.vue';
import CalcBlock from '~/components/CalcBlock.vue';
export default {
    name: "IndexPage",
    components: { MainBlock, CalcBlock }
}
</script>
<style lang="scss">
@import '~/assets/_variables.scss';

</style>
