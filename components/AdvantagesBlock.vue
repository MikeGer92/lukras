<template>
  <section class="advant" id="advant">
    <div class="container">
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
    </div>
  </section>
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
        },
        {
          id: 5,
          title: 'Неубиваемость',
          descr: 'В прямом смысле слова, нет деталей, которые могут сломаться. Срок службы до 50 лет.'
        },
        {
          id: 6,
          title: 'Невозможно засорить',
          descr: 'Нет тонких трубок и шлагнов.'
        },
        {
          id: 7,
          title: 'Не пахнет. Вообще.',
          descr: 'Можно монтировать блико к дому.'
        },
        {
          id: 8,
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
    // overflow: hidden;
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
  @media (min-width: 725px) and (max-width: 768px) {
    .advant {
      margin-top: 100px;
      & .container {
        padding: 0 12px;
        margin: 0 auto;
        overflow: hidden;
      }
      &__swiper {
        max-width: 724px;
        overflow-x: hidden;
        margin: 0 auto;
        &_wrapp {
          justify-content: center;
          gap: 0px;
          flex-wrap: wrap;
        }
      }
    }
  }
  @media (min-width: 577px) and (max-width: 724px) {
    .advant {
      margin-top: 100px;
      &__swiper {
        max-width: 100%;
        overflow-x: hidden;
        &_wrapp {
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }
@media (max-width: 576px) {
  .advant {
    margin-top: 64px;
    &__title {
      font-size: 38px;
      line-height: 42px;
      &_license {
        font-size: 12px;
        line-height: 12px;
      }
    }
    &__swiper {
      width: 100%;
      overflow-x: hidden;
      &_wrapp {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 0px;
        flex-wrap: wrap;
        margin-top: 24px;
      }
    }
  }
}
</style>
