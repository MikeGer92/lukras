<template>
  <div class="product">
    <div class="product__wrapper">
      <div class="product__top">
        <div class="product__top_title">
          <div class="product__top_title-span">ТВЕРЬ</div>
            <div class="product__top_title-license">&#174;</div>
            <div class="product__top_title-name">{{ product.name }}</div>
        </div>
        <div class="product__top_price">{{ product.price }}</div>
    </div>
    <div class="product__main">
      <div class="product__main_info">
        <div class="product__main_info-item">
          <div class="product__main_info-item--data">{{ product.effect }}</div>
          <div class="product__main_info-item--descr">Качество очистки</div>
        </div>
        <div class="product__main_info-item">
          <div class="product__main_info-item--data">{{ product.people }}</div>
          <div class="product__main_info-item--descr">Количество жильцов</div>
        </div>
        <button type="button" class="product__main_info-btn">Подробнее</button>
      </div>
      <div class="product__main_image"></div>
    </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      product: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .product {
    max-width: 424px;
    display: flex;
    padding: 24px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &__top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      &_title {
        display: flex;
        &-span {
          font-family: 'Roboto Condensed';
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 32px;
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 1px #000000;
        }
        &-license {
          margin: -4px 3px 0 -4px;
          font-family: 'Roboto Condensed';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          color: #000000;
        }
        &-name {
          font-family: 'Roboto Condensed';
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 32px;
          text-transform: uppercase;
          color: #000000;
        }
      }
      &_price {
        display: flex;
        padding: 8px 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        background: #FCFCFC;
        border: 1px solid #E3E3E3;
      }
    }
    &__main {
      width: 100%;
      display: flex;
      column-gap: 72px;
      &_info {
        display: flex;
        flex-direction: column;
        position: relative;

        gap: 24px;
        &-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          white-space: nowrap;
          &--data {
            display: flex;
            width: 100%;
            font-family: 'Roboto Condensed';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 18px;
            text-transform: uppercase;
            color: #000000;
          }
          &--descr {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #6B6B6B;
          }
        }
        &-btn {
          display: flex;
          align-items: flex-start;
          margin-top: 16px;
          padding: 12px 24px;
          gap: 10px;
          width: 121px;
          height: 40px;
          border: 1px solid #FF0000;
          border-radius: 4px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #FF0000;
          position: absolute;
          bottom: 0;
          cursor: pointer;
        }
      }
      &_image {
        width: 182.89px;
        height: 184px;
        background: url('../assets/images/barrel.png') 0px 0px/ contain no-repeat;
        &:hover {
          background: url('../assets/images/barrel-active.png') -40px 0px/ cover no-repeat;
        }

      }
    }

  }

</style>
