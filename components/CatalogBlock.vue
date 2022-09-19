<template>
  <section class="catalog" id="catalog" data-aos="new-animation" data-aos-duration="3000">
    <div class="container">
      <h2 class="catalog__title">Каталог систем очистки для загородных домов</h2>
      <div class="catalog__products"
        >
          <Product
            :product="item"
            v-for="item in prodList"
            :key="item.name"
          >
        </Product>
      </div>
    </div>
  </section>
</template>

<script>
import Product from './Product.vue';
  export default {
    name: "CatalogBlock",
    components: { Product },
    data() {
      return {
        prodList: [
          {
            name: 'CLASSIC',
            effect: '98%',
            price: 'От 32 485 RUB',
            people: 'до 2000',
          },
          {
            name: 'Aero',
            effect: '97%',
            price: 'От 12 348 RUB',
            people: 'до 23',
          },
          {
            name: 'Lite',
            effect: '60% + дочистка',
            price: 'От 8 348 RUB',
            people: 'до 30',
          }
        ],
      item: {
        name: 'CLASSIC',
        effect: '98%',
        price: 'От 32 485 RUB',
        people: 'до 2000',
      }
    }
  }
}
</script>

<style lang="scss">
[data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;

  }
}
.catalog {
  margin-top: 201px;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  background: #FCFCFC;
  &__title {
    max-width: 536px;
    margin-bottom: 64px;
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;
    color: #000000;
  }
  &__products {
    width: 100%;
    display: flex;
    column-gap: 24px;
  }
}
@media (min-width: 993px) and (max-width: 1160px) {
  .catalog {
    &__products {
      display: flex;
      flex-wrap: wrap;
      row-gap: 24px;
      justify-content: center;
    }
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .catalog {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding: 64px 0;
    &__title {
      max-width: 424px;
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 32px;
    }
    &__products {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .catalog {
    margin-top: 100px;
    padding: 64px 0;
    &__title {
      max-width: 424px;
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 32px;
    }
    &__products {
      flex-direction: column;
      gap: 24px;
      // & .product {
      //   grid-column: span 12;
      // }
    }
  }
}
@media (max-width: 576px) {
  .catalog {
    margin-top: 32px;
    padding: 0;
    &__title {
      max-width: 100%;
      font-size: 32px;
      line-height: 40px;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 32px;
    }
    &__products {
      flex-direction: column;
      gap: 20px;
      & .product {
        grid-column: span 12;
      }
    }
  }
}
</style>
