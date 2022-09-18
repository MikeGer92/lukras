<template>
  <div class="main">
    <!-- <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div> -->
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
      // xChild: 0,
      // yChild: 0,
      // xParent: 0,
      // yParent: 0,
      // hover: false,
      // hideCursor: true

    }
  },
  computed: {
    // cursorCircle() {
    //   return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    // },
    // cursorPoint() {
    //   return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    // },
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
  mounted() {
    // window.addEventListener('mousemove',this.mouseIsMoving)
  //   document.addEventListener("mousemove", this.moveCursor);
  //   document.addEventListener('mouseleave', e => {
  //     this.hideCursor = true;
  //   });
  //   document.addEventListener('mouseenter', e => {
  //     this.hideCursor = false;
  //   });

  // },
  // destroyed() {
  //   window.removeEventListener('mousemove', this.mouseIsMoving);
  },
  methods: {
    // moveCursor(e) {
    //   this.xChild = e.clientX;
    //   this.yChild = e.clientY;
    //   setTimeout(() => {
    //     this.xParent = e.clientX - 5;
    //     this.yParent = e.clientY - 5;
    //   }, 100);
    // },
    // mouseIsMoving(e){
    //   // let x = e.pageX;
    //   // let y = e.pageY;
    //   // let xMouse = -300,
    //   // yMouse = -300,
    //   // lastScrolledLeft = 0,
    //   // lastScrolledTop = 0;
    //   // console.log(x, y, xMouse, yMouse);
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
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/_variables.scss';
// body, html {
//   width: 100%;
//   height: 100%;
//   // background: #000;
//   margin: 0;
//   cursor: none;
//   // display: flex;
//   // justify-content: center;
//   // align-items:  center;
// }
// .g-cursor {
//   &_hide {
//     opacity: 0;
//     width: 60px;
//     height: 60px;
//     transition: width .6s ease,
//       height .6s ease,
//       opacity .6s ease;
//   }

//   &__circle {
//     pointer-events: none;
//     user-select: none;
//     top: 0;
//     left: 0;
//     position: fixed;
//     width: 50px;
//     height: 50px;
//     border: 2px solid gray;
//     border-radius: 100%;
//     z-index: 5555;
//     backface-visibility: hidden;
//     transition: opacity .6s ease;
//   }

//   &__point {
//     top: 0;
//     left: 0;
//     position: fixed;
//     width: 10px;
//     height: 10px;
//     pointer-events: none;
//     user-select: none;
//     border-radius: 100%;
//     background: transparent;
//     z-index: 55555555;
//     backface-visibility: hidden;
//     will-change: transform;
//   }

//   &_hover {
//     .g-cursor__circle {
//       opacity: 0;
//       width: 60px;
//       height: 60px;
//       transition: width .6s ease,
//         height .6s ease,
//         opacity .6s ease;
//     }
//   }
// }
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
