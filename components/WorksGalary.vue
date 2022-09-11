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
    <div class="works__images"></div>
    <div class="works__manage">
      <div class="works__manage_wrapper">
        <div class="works__manage_photo">
          <div class="works__manage_photo-title">Фото</div>
          <div class="works__manage_photo-num">1/6</div>
        </div>
        <div class="works__manage_btn">
          <div class="works__manage_btn-prev"><img src="@/assets/images/prev.png"></div>
          <div class="works__manage_btn-next"><img src="@/assets/images/next.png"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'OurGalary'
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
    &__images {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      height: 520px;
      background: url('@/assets/images/works.png') 0px 0px/cover no-repeat;
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
