<template>
  <div class="main">
    <MainBlock></MainBlock>
    <transition name="calc"><CalcBlock v-if="getCalc"></CalcBlock></transition>
    <div class="calc" v-intersect="onCalcIntersect"></div>

    <transition name="catalog"></transition><CatalogBlock v-if="getCatalog"></CatalogBlock>
    <div class="catalog" v-intersect="onCatalogIntersect"></div>

    <transition name="advant"><AdvantagesBlock v-if="getAdvant"></AdvantagesBlock></transition>
    <div class="advant" v-intersect="onAdvantIntersect"></div>

    <transition name="cert"><CertificateBlock v-if="getCert"></CertificateBlock></transition>
    <div class="cert" v-intersect="onCertIntersect"></div>

    <transition name="warn"><WarningBlock v-if="getWarn"></WarningBlock></transition>
    <div class="warn" v-intersect="onWarnIntersect"></div>

    <transition name="works"><WorksGalary v-if="getWorks"></WorksGalary></transition>
    <div class="works" v-intersect="onWorksIntersect"></div>

    <transition name="steps"><StepsBlock v-if="getSteps"></StepsBlock></transition>
    <div class="steps" v-intersect="onStepsIntersect"></div>

    <transition name="galary"><OurGalary v-if="getGalary"></OurGalary></transition>
    <div class="galary" v-intersect="onGalaryIntersect"></div>

    <transition name="consult"><ConsultBlock v-if="getConsult"></ConsultBlock></transition>
    <div class="consult" v-intersect="onConsultIntersect"></div>

    <transition name="map"><MapBlock v-if="getMap"></MapBlock></transition>
    <div class="map" v-intersect="onMapIntersect"></div>
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
      calcShow: false,
      catalogShow: false,
      advantShow: false,
      certShow: false,
      warnShow: false,
      worksShow: false,
      stepsShow: false,
      galaryShow: false,
      consultShow: false,
      mapShow: false,

    }
  },
  computed: {
    getCalc() {
      return this.calcShow
    },
    getCatalog() {
      return this.catalogShow
    },
    getAdvant() {
      return this.advantShow
    },
    getCert() {
      return this.certShow
    },
    getWarn() {
      return this.warnShow
    },
    getWorks() {
      return this.worksShow
    },
    getSteps() {
      return this.stepsShow
    },
    getGalary() {
      return this.galaryShow
    },
    getConsult() {
      return this.consultShow
    },
    getMap() {
      return this.calcShow
    },

  },
  methods: {
    onCalcIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.calcShow = observer.isIntersecting
        }, 1000);
      }
    },
    onCatalogIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.catalogShow = observer.isIntersecting
        }, 1000);
      }
    },
    onAdvantIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.AdvantShow = observer.isIntersecting
        }, 1000);
      }
    },
    onCertIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.certShow = observer.isIntersecting
        }, 1000);
      }
    },
    onWarnIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.warnShow = observer.isIntersecting
        }, 1000);
      }
    },
    onWorksIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.worksShow = observer.isIntersecting
        }, 1000);
      }
    },
    onStepsIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.stepsShow = observer.isIntersecting
        }, 1000);
      }
    },
    onGalaryIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.galaryShow = observer.isIntersecting
        }, 1000);
      }
    },
    onConsultIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.consultShow = observer.isIntersecting
        }, 1000);
      }
    },
    onMapIntersect(observer){
      if (observer.isIntersecting) {
        setTimeout(() => {
          this.mapShow = observer.isIntersecting
        }, 1000);
      }
    },
  }
}
</script>
<style lang="scss">
@import '~/assets/_variables.scss';
.main-block {
  & transition {
    transition: opacity 2s;
  }
}
.content {
  width: 100%;
  height: 1px;
}
</style>
