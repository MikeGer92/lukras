<template>
  <div>
    <div class="swiper"
    >
      <div class="swiper-wrapper">
        <div v-for="item in imageList" :key="item.id" class="swiper-slide" :style="{'background': `url(${item.url}) 0px 0px/cover no-repeat`}"></div>
      </div>
      <div class="galary__manage">
        <div class="galary__manage_wrapper">
          <div class="galary__manage_photo">
            <div class="galary__manage_photo-title">Фото</div>
            <div class="galary__manage_photo-num">
            </div>
          </div>
          <div class="galary__manage_btn">
            <div class="galary__manage_btn-prev"><img src="@/assets/images/prev.png"></div>
            <div class="galary__manage_btn-next"><img src="@/assets/images/next.png"></div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'Swiper',
  props: {
    imageList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      slideList: [
        {id: '0', url: require('@/assets/images/galary-left.png')},
        {id: '1', url: require('@/assets/images/galary-active.png')},
        {id: '2', url: require('@/assets/images/galary-right.png')},
        {id: '3', url: require('@/assets/images/galary-left.png')},
        {id: '4', url: require('@/assets/images/galary-active.png')},
        {id: '5', url: require('@/assets/images/galary-right.png')}
      ]
    }
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      slidesOffsetBefore: -168,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.galary__manage_photo-num',
        type: 'fraction',
        clickable: true
      },
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: '.galary__manage_btn-next',
        prevEl: '.galary__manage_btn-prev'
      }
    })
  }
}
</script>

<style lang="scss">
.swiper {
  display: flex;
  flex-direction: column;
  height: 520px;
  overflow: hidden;
  position: relative;
  width: 1600px;
}
.swiper-wrapper {
  width: 100%;
  display: flex;
}
.swiper-slide {
  font-size: 18px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(60%);
}
.swiper-slide-active {
  width: 872px  !important;
  filter: brightness(100%);
}
.slider-content {
  color: #000;
}
</style>
