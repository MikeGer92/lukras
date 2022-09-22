<template>
  <div>
    <div class="swiper"
    >
      <div class="swiper-wrapper">
        <div
          v-for="item in imageList"
          :key="item.id" class="swiper-slide"
          :style="{'background': `url(${item.url}) 0px 0px/cover no-repeat`}"
          data-aos="new-animation" data-aos-duration="1000"
        >
        <div v-if="`${item.name}`" class="swiper-data">{{item.name}}</div>
        </div>
      </div>
      <div class="swiper__manage">
        <div class="container">
          <div class="swiper__manage_wrapper">
            <div class="swiper__manage_photo">
              <div class="swiper__manage_photo-title">Фото</div>
              <div class="swiper__manage_photo-num">
              </div>
            </div>
            <div class="swiper__manage_btn">
              <div class="swiper__manage_btn-prev"><img src="@/assets/images/prev.png"></div>
              <div class="swiper__manage_btn-next"><img src="@/assets/images/next.png"></div>
            </div>
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
      offset: -500,
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
      slidesPerView: 'auto',
      centeredSlides: true,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper__manage_photo-num',
        type: 'fraction',
        clickable: true
      },
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: '.swiper__manage_btn-next',
        prevEl: '.swiper__manage_btn-prev'
      }
    })
  }
}
</script>

<style lang="scss">
  [data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;

  }
}
.swiper {
  display: flex;
  flex-direction: column;
  height: 520px;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1600px;
  &__manage {
    display: flex;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    border-bottom: 1px solid #E3E3E3;
    &_wrapper {
      width: 100%;
      max-width: 1320px;
      margin: 0 auto;
      border-left: 1px solid #E3E3E3;
      border-right: 1px solid #E3E3E3;
      display: flex;
      justify-content: space-between;
    }
    &_photo {
      display: flex;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      color: #000000;
      &-title, &-num {
        display: flex;
        padding: 22px 40px;
        border: 1px solid transparent;
        border-right: 1px solid #E3E3E3;
        align-items: center;
      }
    }
    &_btn {
      display: flex;
      &-prev, &-next {
        width: 66px;
          height: 66px;
          display: flex;
          justify-content: center;
          align-items: center;
        border-left: 1px solid #E3E3E3;
        cursor: pointer;
      }
    }
  }
}
.swiper-data {
  font-size: 48px;
  color: #fff;
  text-align: center;
}
.swiper-wrapper {
  width: 100%;
  display: flex;
}
.swiper-slide {
  width: 55%;
  font-size: 18px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(60%);
}
.swiper-slide-active {
  filter: brightness(100%);
}
.slider-content {
  color: #000;
}
@media (min-width: 691px) and (max-width: 768px) {
  .swiper {
    width: 100%;
    height: 400px;
    &__manage {
      &_wrapper {
        max-width: 724px;
      }
      &_photo {
        font-size: 14px;
        line-height: 16px;
        &-title, &-num {
          padding: 12px 24px;
        }
      }
      &_btn {
        &-prev, &-next {
          width: 66px;
          height: 66px;
          justify-content: center;
          align-items: center;
          & img {
            width: 11px;
            height: 11px;
          }
        }
      }
    }
  }
  .swiper-slide {
    width: 87%;
  }
  .swiper-slide-active {
    filter: brightness(100%);
  }
}
@media (min-width: 577px) and (max-width: 690px) {
  .swiper {
    width: 100%;
    height: 400px;
    &__manage {
      &_wrapper {
        max-width: 724px;
      }
      &_photo {
        font-size: 14px;
        line-height: 16px;
        &-title, &-num {
          padding: 12px 24px;
        }
      }
      &_btn {
        &-prev, &-next {
          width: 40px;
          height: 40px;
          justify-content: center;
          align-items: center;
          & img {
            width: 11px;
            height: 11px;
          }
        }
      }
    }
  }
  .swiper-slide {
    width: 87%;
  }
  .swiper-slide-active {
    filter: brightness(100%);
  }
}
@media (max-width: 576px) {
  .swiper {
    width: 100%;
    height: 328px;
    &__manage {
      &_wrapper {
        max-width: 100%;
      }
      &_photo {
        font-size: 14px;
        line-height: 16px;
        &-title, &-num {
          padding: 12px 24px;
        }
      }
      &_btn {
        &-prev, &-next {
          width: 40px;
          height: 40px;
          justify-content: center;
          align-items: center;
          & img {
            width: 11px;
            height: 11px;
          }
        }
      }
    }
  }
  .swiper-slide {
    width: 92%;
  }
  .swiper-slide-active {
    filter: brightness(100%);
  }
}
</style>
