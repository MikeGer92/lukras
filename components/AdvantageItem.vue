<template>
  <div class="advantage">
    <div class="advantage__inter">
      <div class="advantage__inter_top">
        <div class="advantage__inter_top-left">
          <div class="advantage__inter_top-left--num">{{ advantage.id }}</div>
          <div class="advantage__inter_top-left--bot"></div>
        </div>
        <div class="advantage__inter_top-right"><img src="@/assets/images/advant-icon.png"></div>
      </div>
      <div class="advantage__inter_title">{{ advantage.title }}</div>
      <div class="advantage__inter_descr">{{ advantage.descr }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdvantageItem',
    props: {
      advantage: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
  .advantage {
    width: 424px;
    padding: 8px;
    background: #FCFCFC;
    border: 1px solid #E3E3E3;
    flex: 0 0 auto;
    &__inter {
      display: flex;
      height: 100%;
      flex-direction: column;
      border: 1px solid #E3E3E3;
      gap: 48px;
      &_top {
        display: flex;
        border-right: 1px solid #E3E3E3;
        background: #FCFCFC;
        &-left {
          width: 40px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #E3E3E3;
          &--num {
            display: flex;
            width: 100%;
            height: 40px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            justify-content: center;
            align-items: center;
            color: #3F3F3F;
            border-bottom: 1px solid #E3E3E3;
          }
          &--bot {
            width: 40px;
            height: 40px;
            border-bottom: 1px solid #E3E3E3;
          }
        }
        &-right {
          display: flex;
          align-items: center;
          padding: 0 27.18px;
          border-right: 1px solid #E3E3E3;
          border-bottom: 1px solid #E3E3E3;
          & img {
            width: 24.67px;
            height: 28px;
          }
        }
      }
      &_title {
        font-family: 'Roboto Condensed';
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        text-transform: uppercase;
        color: #000000;
        padding: 0 40px;
      }
      &_descr {
        display: flex;
        padding: 0 40px 40px 40px;
        font-size: 16px;
        line-height: 24px;
        color: #3F3F3F;
      }
    }
  }
  @media (min-width: 390px) and (max-width: 768px) {
    .advantage {
      width: 352px;
      &__inter {
        gap: 24px;
        &_top {
          margin-bottom: 16px;
        }
        &_title {
          padding: 0 32px;
        }
        &_descr {
          padding: 0 32px 32px 32px;
        }

      }
    }
  }
</style>
