<template>
  <section class="catalog">
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

</style>
