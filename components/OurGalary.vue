<template>
  <section class="galary">
    <div class="container">
      <div class="galary__title">Собственный склад<br>оборудования в Ростове на Дону</div>
    </div>
    <Swiper :imageList="slideList"></Swiper>
  </section>
</template>

<script>
import Swiper from './Swiper.vue';
  export default {
    name: "OurGalary",
    components: { Swiper },
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
    }
}
</script>

<style lang="scss">
.galary {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  &__title {
    margin-bottom: 48px;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;
    color: #000000;
  }
  &__images {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    height: 520px;
    background: url('@/assets/images/galary.png') 0px 0px/cover no-repeat;
  }
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
        padding: 22px 40px 23px 40px;
        border-right: 1px solid #E3E3E3;
      }
    }
    &_btn {
      display: flex;
      &-prev, &-next {
        padding: 24px;
        border-left: 1px solid #E3E3E3;
        cursor: pointer;
      }
    }
  }
}

</style>
