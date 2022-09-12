<template>
  <div>
    <div class="swiper"
    >
      <div class="swiper-wrapper">
        <div v-for="item in slideList" :key="item.id" class="swiper-slide" :class="`slide--${item.id}`">
        </div>
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
  data() {
    return {
      slideList: [
        {id: '0', name: 'Slide_1'},
        {id: '1', name: 'Slide_2'},
        {id: '2', name: 'Slide_3'},
        {id: '3', name: 'Slide_4'},
        {id: '4', name: 'Slide_5'},
        {id: '5', name: 'Slide_6'}
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
.slide--0 {
  width: 872px;
  background: url('@/assets/images/galary-left.png') 0px 0px/cover no-repeat;
}
.slide--1 {
  width: 872px;
  background: url('@/assets/images/galary-active.png') 0px 0px/cover no-repeat;
}
.slide--2 {
  width: 872px;
  background: url('@/assets/images/galary-right.png') 0px 0px/cover no-repeat;
}
.slide--3 {
  width: 872px;
  background: url('@/assets/images/galary-left.png') 0px 0px/cover no-repeat;
}
.slide--4 {
  width: 872px;
  background: url('@/assets/images/galary-active.png') 0px 0px/cover no-repeat;
}
.slide--5 {
  width: 872px;
  background: url('@/assets/images/galary-right.png') 0px 0px/cover no-repeat;
}
</style>
