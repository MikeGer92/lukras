<template>
  <section class="works">
    <div class="container">
      <div class="works__title">За 7 лет работы мы установили более 1000 <br>cептиков. Посмотрите некоторые из них</div>
    </div>
    <div class="works__cases">
      <div class="works__cases_wrapper">
        <div class="works__cases_items">
          <button type="button" class="works__cases_items-item"
            v-for="unit in casesList"
            :key="unit"
            :class="{'works__cases_items-item': true, 'works__cases_items-item--active': activeCase === unit}"
            @click="changeCase(unit)"
          > {{ unit }}
          </button>
        </div>
      </div>
    </div>
    <Swiper :imageList="actList"></Swiper>
  </section>
</template>

<script>
import Swiper from './Swiper.vue';
export default {
  name: "WorksGalary",
  components: { Swiper },
  data() {
    return {
      activeList: null,
      casesList: ['1 кейс', '2 кейс', '3 кейс'],
      activeCase: '1 кейс',
      worksSlidesList: [
        { id: "0", url: require("@/assets/images/works-left.png") },
        { id: "1", url: require("@/assets/images/works-active.png") },
        { id: "2", url: require("@/assets/images/works-right.png") },
        { id: "3", url: require("@/assets/images/works-left.png") },
        { id: "4", url: require("@/assets/images/works-active.png") },
        { id: "5", url: require("@/assets/images/works-right.png") }
      ],
      worksSlidesList_2: [
        { id: "0", url: require("@/assets/images/works-left.png"), name: 'КЕЙС_2' },
        { id: "1", url: require("@/assets/images/works-active.png"), name: 'КЕЙС_2' },
        { id: "2", url: require("@/assets/images/works-right.png"), name: 'КЕЙС_2' },
        { id: "3", url: require("@/assets/images/works-left.png"), name: 'КЕЙС_2' },
        { id: "4", url: require("@/assets/images/works-active.png"), name: 'КЕЙС_2' },
        { id: "5", url: require("@/assets/images/works-right.png"), name: 'КЕЙС_2' }
      ],
      worksSlidesList_3: [
        { id: "0", url: require("@/assets/images/works-left.png"), name: 'КЕЙС_3' },
        { id: "1", url: require("@/assets/images/works-active.png"), name: 'КЕЙС_3' },
        { id: "2", url: require("@/assets/images/works-right.png"), name: 'КЕЙС_3' },
        { id: "3", url: require("@/assets/images/works-left.png"), name: 'КЕЙС_3' },
        { id: "4", url: require("@/assets/images/works-active.png"), name: 'КЕЙС_3' },
        { id: "5", url: require("@/assets/images/works-right.png"), name: 'КЕЙС_3' }
      ]
    };
  },
  beforeMount() {
    this.activeList = this.worksSlidesList
  },
  computed: {
    actList() {
      if (this.activeCase === '1 кейс') {
        this.activeList = this.worksSlidesList
      } else if (this.activeCase === '2 кейс') {
        this.activeList = this.worksSlidesList_2
      } else {
        this.activeList = this.worksSlidesList_3
      }
      return this.activeList
    }
  },
  methods: {
    changeCase(unit) {
      this.activeCase = unit
      console.log(this.activeCase)
    }
  }

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
    &__cases {
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
        text-align: center;
        &-item {
          padding: 24px 40px;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          border-right: 1px solid #E3E3E3;
          &--active {
            border: 1px solid #BF0000;
            color: #BF0000;
          }
        }
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    .works {
      margin-top: 100px;
      &__title {
        font-size: 32px;
        line-height: 40px;
      }
    }
  }
  @media (max-width: 576px) {
    .works {
      margin-top: 64px;
      &__title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 24px;
      }
      &__cases {
        &_items {
          &-item {
            padding: 12px 24px;
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
    }
  }
</style>
