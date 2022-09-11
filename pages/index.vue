<template>
  <div class="main">
    <MainBlock></MainBlock>
    <CalcBlock></CalcBlock>
    <CatalogBlock></CatalogBlock>
    <AdvantagesBlock></AdvantagesBlock>
    <CertificateBlock></CertificateBlock>
    <WarningBlock></WarningBlock>
    <StepsBlock></StepsBlock>
    <MapBlock></MapBlock>
</div>
</template>

<script>
import MainBlock from '~/components/MainBlock.vue';
import CalcBlock from '~/components/CalcBlock.vue';
import CatalogBlock from '../components/CatalogBlock.vue';
import AdvantagesBlock from '~/components/AdvantagesBlock.vue';
import CertificateBlock from '~/components/CertificateBlock.vue';
import WarningBlock from '../components/WarningBlock.vue';
import StepsBlock from '~/components/StepsBlock.vue';
import MapBlock from '../components/MapBlock.vue';
export default {
    name: "IndexPage",
    components: { MainBlock, CalcBlock, CatalogBlock, AdvantagesBlock, CertificateBlock, WarningBlock, StepsBlock, MapBlock }
}
</script>
<style lang="scss">
@import '~/assets/_variables.scss';

</style>
