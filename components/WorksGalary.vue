<template>
  <section class="works">
    <div class="container">
      <div class="works__title">За 7 лет работы мы установили более 1000 <br>cептиков. Посмотрите некоторые из них</div>
    </div>
    <div class="works__keyses">
      <div class="works__keyses_wrapper">
        <div class="works__keyses_items">
          <div class="works__keyses_items-item works__keyses_items-item--active">Кейс 1</div>
          <div class="works__keyses_items-item">Кейс 2</div>
          <div class="works__keyses_items-item">Кейс 3</div>
        </div>
      </div>
    </div>
    <Swiper :imageList="worksSlidesList"></Swiper>
  </section>
</template>

<script>
import Swiper from './Swiper.vue';
  export default {
    name: "OurGalary",
    data() {
        return {
            worksSlidesList: [
                { id: "0", url: require("@/assets/images/works-left.png") },
                { id: "1", url: require("@/assets/images/works-active.png") },
                { id: "2", url: require("@/assets/images/works-right.png") },
                { id: "3", url: require("@/assets/images/works-left.png") },
                { id: "4", url: require("@/assets/images/works-active.png") },
                { id: "5", url: require("@/assets/images/works-right.png") }
            ]
        };
    },
    components: { Swiper }
}
</script>

<style lang="scss">
  .works {
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    &__title {
      margin-bottom: 48px;
      font-family: 'Roboto Condensed';
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      text-transform: uppercase;
      color: #000000;
    }
    &__keyses {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      border-top: 1px solid #E3E3E3;
      &_wrapper {
        width: 100%;
        max-width: 1320px;
        margin: 0 auto;
      }
      &_items {
        display: flex;
        border-left: 1px solid #E3E3E3;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        color: #000000;
        &-item {
          padding: 24px 40px;
          border-right: 1px solid #E3E3E3;
          cursor: pointer;
          &--active {
            border: 1px solid #BF0000;
            color: #BF0000;
          }
        }
      }
    }
  }

</style>
