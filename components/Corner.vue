<template>
  <div class="corner">
    <div class="corner__sqr"></div>
  </div>
</template>

<script>
  export default {
    name: 'Corner'
}
</script>

<style lang="scss">
  .corner {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-left: 1px solid #E3E3E3;
    border-bottom: 1px solid #E3E3E3;
    &__sqr {
      width: 10px;
      height: 10px;
      border-top: 1px solid #E3E3E3;
      border-right: 1px solid #E3E3E3;
    }
  }


</style>

