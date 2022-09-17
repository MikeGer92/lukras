<template>
  <div class="product">
    <div class="product__wrapper">
      <div class="product__top">
        <div class="product__top_title">
          <div class="product__top_title-span">ТВЕРЬ</div>
            <div class="product__top_title-license">&#174;</div>
            <div class="product__top_title-name">{{ product.name }}</div>
        </div>
        <div class="product__top_image"></div>
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
    width: 100%;
    max-width: 424px;
    display: flex;
    padding: 24px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    &__wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 40px;
    }
    &__top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      &_title {
        display: flex;
        order: 0;
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
      &_image {
        display: none;
        order: 1;
        background: url('../assets/images/barrel.png') 0px 0px/ contain no-repeat;
        &:hover {
          background: url('../assets/images/barrel-active.png') -40px 0px/ cover no-repeat;
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
        order: 2
      }
    }
    &__main {
      width: 100%;
      display: flex;
      justify-content: space-between;
      &_info {
        display: flex;
        flex-direction: column;
        order: 0;
        &-item {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
          margin-bottom: 24px;
          &--data {
            display: flex;
            width: 100%;
            margin-top: 8px;
            font-family: 'Roboto Condensed';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 18px;
            text-transform: uppercase;
            color: #000000;
          }
          &--descr {
            margin-top: 8px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #6B6B6B;
          }
        }
        &-btn {
          margin-top: 16px;
          padding: 12px 24px;
          max-width: 121px;
          border: 1px solid #FF0000;
          border-radius: 4px;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #FF0000;
          &:hover {
            transition: all .2s;
            background: #FF0000;
            color: #fff;
          }
        }
      }
      &_image {
        order: 1;
        width: 182.89px;
        height: 184px;
        background: url('../assets/images/barrel-small.svg') center 0px/ cover no-repeat;
        &:hover {
          background: url('../assets/images/barrel-active.png') -60px 0px/ cover no-repeat;
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 1160px) {
    .product {
      display: flex;
      width: 100%;
      max-width: 724px;
      padding: 40px;
      &__main {
        grid-column-gap: 36px;
        max-width: 504px;
        &_image {
          margin-top: -35px;
          order: 1;
          width: 254px;
          height: 256px;
        }
      }
    }
  }
  @media (min-width: 700px) and (max-width: 768px) {
    .product {
      display: flex;
      width: 100%;
      max-width: 724px;
      padding: 40px;
      &__main {
        grid-column-gap: 36px;
        max-width: 78.7%;
        &_image {
          margin-top: -15%;
          order: 1;
          width: 254px;
          height: 256px;
        }
      }
    }
  }
  @media (min-width: 577px) and (max-width: 699px) {
    .product {
      display: flex;
      width: 100%;
      max-width: 724px;
      padding: 40px;
      &__main {
        grid-column-gap: 36px;
        max-width: 78.7%;
        &_image {
          margin-top: 0%;
          order: 1;
          width: 181px;
          height: 183px;
          background: url('../assets/images/barrel-small.svg') center 0px/ cover no-repeat;
          &:hover {
            background: url('../assets/images/barrel-active.png') -35px 0px/ cover no-repeat;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .product {
      max-width: 100%;
      padding: 24px;
      &__wrapper {
        width: 100%;
      }
      &__top {
        flex-direction: column;
        &_price {
          order: 0;
          max-width: 128px;
          margin: -24px 0 0 -24px;
          border-top: none;
          border-left: none;
        }
        &_image {
          margin: 14px 0 29px 0;
          display: flex;
          align-self: center;
          order: 1;
          width: 181px;
          height: 183px;
        }
        &_title {
          order:  2;
        }
      }
      &__main {
        column-gap: 130px;
        flex-direction: column;
        &_info {
          order: 1;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          &-item {
            width: 50%;
            &--descr {
              font-size: 12px;
              line-height: 14px;
            }
          }
        }
        &_image {
          display: none;
        }
      }
    }
  }
</style>
