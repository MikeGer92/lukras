<template>
  <div class="main">
    <MainBlock></MainBlock>
    <CalcBlock></CalcBlock>
    <CatalogBlock></CatalogBlock>
    <AdvantagesBlock></AdvantagesBlock>
    <CertificateBlock></CertificateBlock>
</div>
</template>

<script>
import MainBlock from '~/components/MainBlock.vue';
import CalcBlock from '~/components/CalcBlock.vue';
import CatalogBlock from '../components/CatalogBlock.vue';
import AdvantagesBlock from '~/components/AdvantagesBlock.vue';
import CertificateBlock from '~/components/CertificateBlock.vue';
export default {
    name: "IndexPage",
    components: { MainBlock, CalcBlock, CatalogBlock, AdvantagesBlock, CertificateBlock }
}
</script>
<style lang="scss">
@import '~/assets/_variables.scss';

</style>
