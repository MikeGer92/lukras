<template>
  <div class="main">
    <MainBlock></MainBlock>
    <CalcBlock></CalcBlock>
    <CatalogBlock></CatalogBlock>

</div>
</template>

<script>
import MainBlock from '~/components/MainBlock.vue';
import CalcBlock from '~/components/CalcBlock.vue';
import CatalogBlock from '../components/CatalogBlock.vue';
export default {
    name: "IndexPage",
    components: { MainBlock, CalcBlock, CatalogBlock }
}
</script>
<style lang="scss">
@import '~/assets/_variables.scss';

</style>
