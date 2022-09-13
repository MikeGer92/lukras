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
}
@media (min-width: 390px) and (max-width: 768px) {
    .galary {
      margin-top: 100px;
      &__title {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 32px;
        font-size: 32px;
        line-height: 40px;
      }
    }
  }
</style>
