<template>
  <div class="social">
    <a href="#" class="social__telegram"><img src="@/assets/images/telegram-icon.svg"></a>
    <a href="#" class="social__whatsup"><img src="@/assets/images/whats-icon.svg"></a>
    <a href="#" class="social__viber"><img src="@/assets/images/viber-icon.svg"></a>
  </div>
</template>

<script>
  export default {
    name: 'Social'
  }
</script>

<style lang="scss">
.social {
  text-decoration: none;
  display: flex;
  gap: 24px;
  &__telegram {
    height: 48px;
    display: flex;
    padding: 12px 14px;
    background: #2CA2DC;
    align-items: center;
    & img {
      width: 20px;
      height: 16px;
    }
  }
  &__whatsup {
    padding: 14px;
    height: 48px;
    background: #89E167;
    & img {
      width: 20px;
      height: 20px;
    }
  }
  &__viber {
    padding: 14px;
    height: 48px;
    background: #7360F2;
    & img {
      width: 20px;
      height: 19px;
    }
  }
}

</style>
