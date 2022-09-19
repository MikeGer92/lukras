<template>
  <div class="main">

    <MainBlock></MainBlock>

    <CalcBlock></CalcBlock>

    <CatalogBlock></CatalogBlock>

    <AdvantagesBlock></AdvantagesBlock>

    <CertificateBlock></CertificateBlock>

    <WarningBlock></WarningBlock>

    <WorksGalary></WorksGalary>

    <StepsBlock></StepsBlock>

    <OurGalary></OurGalary>

    <ConsultBlock ></ConsultBlock>

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
import ConsultBlock from '~/components/ConsultBlock.vue';
import OurGalary from '~/components/OurGalary.vue';
import WorksGalary from '../components/WorksGalary.vue';
export default {
  name: "IndexPage",
  components: { MainBlock, CalcBlock, CatalogBlock, AdvantagesBlock, CertificateBlock, WarningBlock, StepsBlock, MapBlock,ConsultBlock, OurGalary, WorksGalary },
  data() {
    return {

    }
  },
  mounted() {

  },

  methods: {

  },
}
</script>
<style lang="scss">
@import '~/assets/_variables.scss';

.main-block {
  & transition {
    transition: opacity 2s;
  }
}
</style>
