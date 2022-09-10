<template>
  <div class="container">
    <section class="advant">
      <h3 class="advant__title">Преимущества<br>септиков
        <span class="advant__title_span">ТВЕРЬ
          <div class="advant__title_license">&#174;</div>
        </span>
      </h3>
      <div class="advant__swiper">
        <div class="advant__swiper_wrapp">
          <AdvantageItem
            v-for="item in advantList"
            :key="item.id"
            :advantage="item"
          ></AdvantageItem>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AdvantageItem from "./AdvantageItem.vue";
export default {
  name: "AdvantagesBlock",
  components: { AdvantageItem },
  data() {
    return {
      advantList: [
        {
          id: 1,
          title: 'Неубиваемость',
          descr: 'В прямом смысле слова, нет деталей, которые могут сломаться. Срок службы до 50 лет.'
        },
        {
          id: 2,
          title: 'Невозможно засорить',
          descr: 'Нет тонких трубок и шлагнов.'
        },
        {
          id: 3,
          title: 'Не пахнет. Вообще.',
          descr: 'Можно монтировать блико к дому.'
        },
        {
          id: 4,
          title: 'Энергонезависим',
          descr: 'При отключении электричества продолжает работать в течении нескольких суток'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  ::-webkit-scrollbar { 
    width: 0px;
    background: transparent;
  }
  .advant {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    &__title {
      text-align: left;
      font-family: 'Roboto Condensed';
      font-weight: 700;
      font-size: 72px;
      line-height: 80px;
      text-transform: uppercase;
      color: #000000;
      &_span {
        font-family: 'Roboto Condensed';
        display: inline-flex;
        color: transparent;
        -webkit-text-stroke: 1px #000000;
        position: relative;
      }
      &_license {
        font-family: 'Roboto Condensed';
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
        position: absolute;
        right: 0;
      }
    }
    &__swiper {
      display: flex;
      width: 1460px;
      overflow-x: scroll;
      &_wrapp {
        display: flex;
        gap: 24px;
        margin-top: 48px;
      }
    }
  }

</style>
