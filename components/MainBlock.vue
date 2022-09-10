<template>
  <div class="container">
    <section class="main-block" id="main">
      <div class="main-block__info">
        <div class="main-block__info_descr">— За счет официального диллерского договора</div>
        <h1 class="main-block__info_title">
          <div class="main-block__info_title-black">СЕПТИК</div>
          <div class="main-block__info_title-span">ТВЕРЬ</div>
          <div class="main-block__info_title-license">&#174;</div>
          <div class="main-block__info_title-black">ПОД КЛЮЧ</div>
          <div class="main-block__info_title-black">C ВЫГОДОЙ ДО 15%</div>
        </h1>
        <div class="main-block__info_add">
          <div class="main-block__info_add-how">
            <div class="main-block__info_add-int">
              <div class="main-block__info_add-int--item"><img src="@/assets/images/marker.png">Сохраним ландшафт участка</div>
              <div class="main-block__info_add-int--item"><img src="@/assets/images/marker.png">Под ключ за 1 день</div>
              <div class="main-block__info_add-int--item"><img src="@/assets/images/marker.png">Сохраним официальную гарантию</div>
            </div>
          </div>
          <div class="main-block__info_add-choise">
            <Corner></Corner>
            <div class="main-block__info_add-choise--btn">Подобрать нужную модель</div>
          </div>
        </div>
      </div>
      <div class="main-block__benefit">
        <div class="main-block__benefit_add-top">
          <div class="main-block__benefit_add-top--text">Особые условия для
            строителей и прорабов</div>
            <a class="main-block__benefit_add-top--link" href="#">Получить<img src="@/assets/images/marker-link.png"></a>
        </div>
        <div class="main-block__benefit_main">
          <div class="main-block__benefit_int">
            <div class="main-block__benefit_int-barrel"></div>
            <div class="main-block__benefit_int-block">
              <div class="main-block__benefit_int-block--item"></div>
              <div class="main-block__benefit_int-block--item"></div>
              <div class="main-block__benefit_int-block--bottom">
                <div class="main-block__benefit_int-block--bottom_left"></div>
                <div class="main-block__benefit_int-block--bottom_right">
                  <div class="main-block__benefit_int-block--bottom_right-item"></div>
                  <div class="main-block__benefit_int-block--bottom_right-item"></div>
                  <div class="main-block__benefit_int-block--bottom_right-big">
                    <div class="main-block__benefit_int-block--bottom_right-big">
                      <div class="main-block__benefit_int-block--bottom_right-big--left"></div>
                      <div class="main-block__benefit_int-block--bottom_right-big--right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-block__benefit_add-bot">
          <div class="main-block__benefit_add-bot--text">Подарок каждому на выбор
            при покупке до 31 августа</div>
            <a class="main-block__benefit_add-bot--link" href="#">Подробнее<img src="@/assets/images/marker-link.png"></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Corner from './Corner.vue';
  export default {
    name: "MainBlock",
    components: { Corner }
}
</script>

<style lang="scss">
  .main-block {
    width: 100%;
    max-width: 1320px;
    display: flex;
    margin: 128px auto 0 auto;
    column-gap: 44px;
    &__info {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      &_descr {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #636363;
        margin-bottom: 24px;
      }
      &_title {
        display: flex;
        text-align: left;
        width: 828px;
        flex-wrap: wrap;
        &-black {
          font-family: 'Roboto Condensed';
          font-weight: 700;
          font-size: 72px;
          line-height: 80px;
          text-transform: uppercase;
          color: #000000;
          margin-right: 16px;
        }
        &-span {
          font-family: 'Roboto Condensed';
          font-weight: 700;
          font-size: 72px;
          line-height: 80px;
          color: transparent;
          -webkit-text-stroke: 1px #000000;
        }
        &-license {
          width: 32px;
          margin-left: -16px;
          font-family: 'Roboto Condensed';
          font-weight: 400;
          font-size: 20px;
          line-height: 20px;
          color: #000000;
        }
      }
      &_add {
        display: flex;
        column-gap: 41px;
        margin-top: 100px;
        &-how {
          border: 1px solid #E3E3E3;
          width: 318px;
          height: 162px;
          border: 1px solid #E3E3E3;
        }
        &-int {
          display: flex;
          flex-direction: column;
          width: 300px;
          height: 144px;
          margin: 8px;
          border: 1px solid #E3E3E3;
          &--item {
            display: flex;
            max-width: 300px;
            height: 48px;
            padding-left: 26.42px;
            border-bottom: 1px solid #E3E3E3;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
            align-items: center;
            &:last-child {
              border-bottom: none;
            }
            & img {
              width: 11.31px;
              height: 8.01px;
              margin-right: 10.26px;
            }
          }
        }
        &-choise {
          display: flex;
          flex-direction: column;
          &--btn {
            width: 279px;
            height: 66px;
            margin-top: 37px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 24px 33px;
            gap: 10px;
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            color: #FF0000;
            border: 2px solid #FF0000;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
    }
    &__benefit {
      display: block;
      position: relative;
      width: 538px;
      height: 652px;
      background: #FCFCFC;
      &_main {
        width: 424px;
        height: 547px;
        border: 1px solid #E3E3E3;
        padding: 8px;
      }
      &_add {
        &-top, &-bot {
          width: 240px;
          height: 124px;
          position: absolute;
          border: 1px solid #E3E3E3;
          align-self: flex-end;
          background: #FCFCFC;
          z-index: 2;
        }
        &-top {
          top: -56px;
          right: 0px;
          padding: 24px;
          &--text {
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: #000000;
            margin-bottom: 22px;
          }
          &--link {
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #BF0000;
            & img {
              width: 10.67px;
              height: 10.67px;
              object-fit: contain;
              margin-left: 6.67px;
            }
          }
        }
        &-bot {
          bottom: 47px;
          left: -88px;
          padding: 24px;
          &--text {
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: #000000;
            margin-bottom: 24px;
          }
          &--link {
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #BF0000;
            & img {
              width: 10.67px;
              height: 10.67px;
              object-fit: contain;
              margin-left: 6.67px;
            }
          }
        }
      }
      &_int {
        width: 408px;
        height: 531px;
        border: 1px solid #E3E3E3;
        display: flex;
        flex-direction: column;
        background: #FCFCFC;
        &-barrel {
          display: flex;
          margin: 95px auto 19px auto;
          width: 447px;
          height: 335px;
          background: url('../assets/images/barrel.png') 35px 0px/contain no-repeat;
          &:hover {
            background: url('../assets/images/barrel-active.png') -40px 0px/contain no-repeat;
          }
        }
        &-block {
          width: 204px;
          height: 82px;
          border-top: 1px solid #E3E3E3;
          border-left: 1px solid #E3E3E3;
          align-self: flex-end;
          &--item {
            width: 100%;
            height: 12px;
            border-bottom: 1px solid #E3E3E3;
          }
          &--bottom {
            display: flex;
            &_left {
              width: 97px;
              height: 57px;
              border-right: 1px solid #E3E3E3;
            }
            &_right {
              display: flex;
              width: 107px;
              flex-direction: column;
              &-item {
                width: 100%;
                height: 12px;
                border-bottom: 1px solid #E3E3E3;
              }
              &-big {
                width: 100%;
                display: flex;
                &--left {
                  width: 51px;
                  height: 33px;
                  border-right:  1px solid #E3E3E3;

                }

              }
            }
          }
        }
      }
    }
  }

</style>
