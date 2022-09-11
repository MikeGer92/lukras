<template>
  <section class="galary">
    <div class="container">
      <div class="galary__title">Собственный склад<br>оборудования в Ростове на Дону</div>
    </div>
    <div class="galary__images"></div>
    <div class="galary__manage">
      <div class="galary__manage_wrapper">
        <div class="galary__manage_photo">
          <div class="galary__manage_photo-title">Фото</div>
          <div class="galary__manage_photo-num">1/6</div>
        </div>
        <div class="galary__manage_btn">
          <div class="galary__manage_btn-prev"><img src="@/assets/images/prev.png"></div>
          <div class="galary__manage_btn-next"><img src="@/assets/images/next.png"></div>
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
