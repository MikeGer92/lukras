<template>
  <div class="container">
    <section
      class="main-block"
      id="main"
      data-aos="new-animation"
      >
      <div class="main-block__small">
        <div class="main-block__small_inter">
          <div class="main-block__small_inter-img"></div>
        </div>
      </div>
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
            <button class="main-block__info_add-choise--btn">Подобрать нужную модель</button>
          </div>
          <div class="main-block__info_add-benefsmall">
            <div class="main-block__info_add-benefsmall_add-top">
              <div class="main-block__info_add-benefsmall_add-top--text">Особые условия для
                строителей и прорабов</div>
                <a class="main-block__info_add-benefsmall_add-top--link" href="#">Получить<img src="@/assets/images/marker-link.png"></a>
            </div>
            <div class="main-block__info_add-benefsmall_main">
              <div class="main-block__info_add-benefsmall_int">
                <div class="main-block__info_add-benefsmall_int-barrel"></div>
                <div class="main-block__info_add-benefsmall_int-block">
                  <div class="main-block__info_add-benefsmall_int-block--item"></div>
                  <div class="main-block__info_add-benefsmall_int-block--item"></div>
                  <div class="main-block__info_add-benefsmall_int-block--bottom">
                    <div class="main-block__info_add-benefsmall_int-block--bottom_left"></div>
                    <div class="main-block__info_add-benefsmall_int-block--bottom_right">
                      <div class="main-block__info_add-benefsmall_int-block--bottom_right-item"></div>
                      <div class="main-block__info_add-benefsmall_int-block--bottom_right-item"></div>
                      <div class="main-block__info_add-benefsmall_int-block--bottom_right-big">
                        <div class="main-block__info_add-benefsmall_int-block--bottom_right-big">
                          <div class="main-block__info_add-benefsmall_int-block--bottom_right-big--left"></div>
                          <div class="main-block__info_add-benefsmall_int-block--bottom_right-big--right"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-block__info_add-benefsmall_add-bot">
              <div class="main-block__info_add-benefsmall_add-bot--text">Подарок каждому на выбор
                при покупке до 31 августа</div>
                <a class="main-block__info_add-benefsmall_add-bot--link" href="#">Подробнее<img src="@/assets/images/marker-link.png"></a>
            </div>
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
  components: { Corner },
  data() {
    return {
      comp: '#',
      styles: {}
    }
  },
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
.main-block {
  width: 100%;
  display: flex;
  margin: 128px auto 0 auto;
  column-gap: 44px;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  &__small {
    display: none;
    padding: 8px;
    border: 1px solid #E3E3E3;
    &_inter {
      display: flex;
      justify-content: center;
      border: 1px solid #E3E3E3;
      padding: 24px 55px 19px 68px;
      &-img {
        width: 181px;
        height: 183px;
        background: url('@/assets/images/barrel-small.svg') center 0px/cover no-repeat;
        &:hover {
          background: url('@/assets/images/barrel-small-active.png') center 0px/cover no-repeat;
        }
      }
    }
  }
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
      order: 0;
    }
    &_title {
      display: flex;
      text-align: left;
      width: 828px;
      flex-wrap: wrap;
      order: 1;
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
      width: 100%;
      column-gap: 41px;
      margin-top: 100px;
      order: 2;
      &-how {
        padding: 8px;
        border: 1px solid #E3E3E3;
        order: 0;
      }
      &-int {
        display: flex;
        flex-direction: column;
        border: 1px solid #E3E3E3;
        &--item {
          display: flex;
          width: 100%;
          max-width: 300px;
          padding: 16px 21px 16px 26.42px;
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
        order: 1;
        .corner {
          order: 0;
        }
        &--btn {
          margin-top: 37px;
          display: flex;
          padding: 24px 33px;
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          color: #FF0000;
          border: 2px solid #FF0000;
          border-radius: 4px;
          order: 1;
          &:hover {
            transition: all .2s;
            background: #FF0000;
            color: #fff;
          }
        }
      }
      &-benefsmall {
        display: none;
        margin-right: 24px;
        order: 2;
        position: relative;
        &_main {
          width: 328px;
          height: 423px;
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
            width: 212px;
            top: -92px;
            right: -24px;
            padding: 24px 16px;
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
            bottom: -87px;
            left: -100px;
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
          width: 310px;
          height: 406px;
          border: 1px solid #E3E3E3;
          display: flex;
          flex-direction: column;
          background: #FCFCFC;
          &-barrel {
            display: flex;
            margin: 95px auto 19px auto;
            width: 100%;
            height: 259px;
            background: url('../assets/images/barrel.png') center 0px/contain no-repeat;
            &:hover {
              background: url('../assets/images/barrel-active.png') -10px -10px/contain no-repeat;
            }
          }
          &-block {
            width: 158px;
            height: 63px;
            border-top: 1px solid #E3E3E3;
            border-left: 1px solid #E3E3E3;
            align-self: flex-end;
            &--item {
              width: 100%;
              height: 10px;
              border-bottom: 1px solid #E3E3E3;
            }
            &--bottom {
              display: flex;
              width: 100%;
              height: 43px;
              &_left {
                width: 75px;
                height: 100%;
                border-right: 1px solid #E3E3E3;
              }
              &_right {
                display: flex;
                width: 82px;
                flex-direction: column;
                &-item {
                  width: 100%;
                  height: 10px;
                  border-bottom: 1px solid #E3E3E3;
                }
                &-big {
                  width: 100%;
                  display: flex;
                  &--left {
                    width: 40px;
                    height: 25.53px;
                    border-right:  1px solid #E3E3E3;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  &__benefit {
    display: block;
    position: relative;
    width: 538px;
    height: 652px;
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
          &:hover {
            transition: all .2s;
            font-size: 16px;
          }
          & img {
            width: 10.67px;
            height: 10.67px;
            object-fit: contain;
            margin-left: 6.67px;
          }
        }
      }
      &-bot {
        bottom: 46px;
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
          &:hover {
            transition: all .2s;
            font-size: 16px;
          }
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
@media (min-width: 1144px) and (max-width: 1460px) {
  .main-block {
    margin: 100px auto 0 auto;
    gap: 0;
    &__info {
      margin-top: 0px;
      &_descr {
        margin-bottom: 20px;
      }
      &_title {
        width: 100%;
        &-black, &-span {
          font-size: 56px;
          line-height: 64px;
        }
        &-license {
          font-size: 16px;
          line-height: 16px;
          margin-left: -12px;
        }
      }
      &_add {
        margin-top: 56px;
        width: 100%;
        flex-wrap: wrap;
        &-benefsmall {
          display: none;
          order: 2;
        }
        &-how {
          margin-top: 0px;
          width: 301px;
          max-height: 165px;
        }
        &-int {
          &--item {
            padding: 16px 16px 16px 14px;
          }
        }
        &-choise {
          order: 3;
          display: flex;
          margin-top: 0px;
          & .corner {
            margin-top: 0;
            margin-bottom: 44px;
            display: flex;
            order: 0;
            width: 56px;
            height: 56px;
          }
          &--btn {
            max-width: 250px;
            margin-top: 0;
            padding: 24px 12px;
            order: 1;
            align-self: flex-end;
          }
        }
      }
    }
    &__benefit {
      display: flex;
      margin-right: 24px;
      &_add {
        &-top {
          right: -24px;
        }

      }
    }
  }
}
@media (min-width: 993px) and (max-width: 1143px) {
  .main-block {
    margin: 100px auto 0 auto;
    column-gap: 0;
    &__info {
      margin-top: 0px;
      &_descr {
        margin-bottom: 20px;
      }
      &_title {
        width: 100%;
        &-black, &-span {
          font-size: 56px;
          line-height: 64px;
        }
        &-license {
          font-size: 16px;
          line-height: 16px;
          margin-left: -12px;
        }
      }
      &_add {
        margin-top: 56px;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        &-choise {
          order: 3;
          display: flex;
        }
        .corner {
         order: 1;
         margin-top: 170px;
         width: 56px;
         height: 56px;
        }
        &-benefsmall {
          display: none;
          order: 2;
        }
        &-how {
          margin-top: 0px;
          width: 301px;
          max-height: 165px;
        }
        &-int {
          &--item {
            padding: 16px 16px 16px 14px;
          }
        }
        &-choise {
          margin-top: 48px;
          &--btn {
            margin-top: 0;
            padding: 24px 48px;
            order: 0;
          }
          & .corner {
            margin-top: 0;
            display: none;
          }
        }
      }
    }
    &__benefit {
      display: flex;
      margin-right: 24px;
      &_add {
        &-top {
          right: -24px;
        }

      }
    }
  }
}
@media (min-width: 841px) and (max-width: 992px) {
  .main-block {
    margin: 100px auto 0 auto;
    &__info {
      margin-top: 0px;
      &_descr {
        margin-bottom: 20px;
      }
      &_title {
        width: 100%;
        &-black, &-span {
          font-size: 56px;
          line-height: 64px;
        }
        &-license {
          font-size: 16px;
          line-height: 16px;
          margin-left: -12px;
        }
      }
      &_add {
        margin-top: 56px;
        width: 90%;
        justify-content: space-between;
        flex-wrap: wrap;
        &-choise {
          order: 3;
          display: flex;
        }
        .corner {
         order: 1;
         margin-top: 170px;
         width: 56px;
         height: 56px;
        }
        &-benefsmall {
          order: 2;
          display: block;
          &_int {
            &-barrel {
              width: 100%;
            }
          }
          &_add {
            &-top {
              width: 212px;
              top: -92px;
              right: -80px;
              padding: 24px 16px;
            }
          }
        }
        &-how {
          margin-top: 0px;
          width: 301px;
          max-height: 165px;
        }
        &-int {
          &--item {
            padding: 16px 16px 16px 14px;
          }
        }
        &-choise {
          margin-top: -211px;
          &--btn {
            margin-top: 0;
            padding: 24px 48px;
            order: 0;
          }
        }
      }
    }
    &__benefit {
      display: none;
    }
  }
}

@media (min-width: 769px) and (max-width: 840px) {
  .main-block {
    margin: 100px auto 0 auto;
    &__info {
      margin-top: 0px;
      &_descr {
        margin-bottom: 20px;
      }
      &_title {
        width: 100%;
        &-black, &-span {
          font-size: 56px;
          line-height: 64px;
        }
        &-license {
          font-size: 16px;
          line-height: 16px;
          margin-left: -12px;
        }
      }
      &_add {
        margin-top: 56px;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        &-choise {
          order: 3;
          display: flex;
        }
        .corner {
         order: 1;
         margin-top: 170px;
         width: 56px;
         height: 56px;
        }
        &-benefsmall {

          order: 2;
          display: block;
        }
        &-how {
          margin-top: 0px;
          width: 301px;
          max-height: 165px;
        }
        &-int {
          &--item {
            padding: 16px 16px 16px 14px;
          }
        }
        &-choise {
          margin-top: -211px;
          &--btn {
            margin-top: 0;
            padding: 24px 48px;
            order: 0;
          }
        }
      }
    }
    &__benefit {
      display: none;
    }
  }
}

@media (min-width: 740px) and (max-width: 768px) {
  .main-block {
    margin: 100px auto 0 auto;
    &__info {
      margin-top: 0px;
      &_descr {
        margin-bottom: 20px;
      }
      &_title {
        width: 100%;
        &-black, &-span {
          font-size: 56px;
          line-height: 64px;
        }
        &-license {
          font-size: 16px;
          line-height: 16px;
          margin-left: -12px;
        }
      }
      &_add {
        margin-top: 56px;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        &-choise {
          order: 3;
          display: flex;
        }
        .corner {
         order: 1;
         margin-top: 170px;
         width: 56px;
         height: 56px;
        }
        &-benefsmall {

          order: 2;
          display: block;
        }
        &-how {
          margin-top: 0px;
          width: 301px;
          max-height: 165px;
        }
        &-int {
          &--item {
            padding: 16px 16px 16px 14px;
          }
        }
        &-choise {
          margin-top: -211px;
          &--btn {
            margin-top: 0;
            padding: 24px 48px;
            order: 0;
          }
        }
      }
    }
    &__benefit {
      display: none;
    }
  }
}
@media (min-width: 577px) and (max-width: 739px) {
  .main-block {
    margin: 100px auto 0 auto;
    &__info {
      margin-top: 0px;
      &_descr {
        margin-bottom: 20px;
      }
      &_title {
        width: 100%;
        &-black, &-span {
          font-size: 56px;
          line-height: 64px;
        }
        &-license {
          font-size: 16px;
          line-height: 16px;
          margin-left: -12px;
        }
      }
      &_add {
        margin-top: 56px;
        width: 100%;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;
        &-choise {
          order: 3;
          display: flex;
        }
        .corner {
         order: 1;
         margin-top: 170px;
         width: 56px;
         height: 56px;
        }
        &-benefsmall {
          margin-top: 64px;
          order: 0;
          display: block;
          align-self: center;

          &_add {
            &-top {
              width: 212px;
              top: -92px;
              right: -80px;
              padding: 24px 16px;
            }
          }
        }
        &-how {
          margin-top: 134px;
          width: 401px;
          max-height: 165px;
          order: 1;
          align-self: center;
        }
        &-int {
          &--item {
            width: 100%;
            max-width: 100%;
            padding: 16px 16px 16px 14px;
          }
        }
        &-choise {
          order: 2;
          align-self: center;
          &--btn {
            margin-top: 44px;
            padding: 24px 94px;
            order: 0;
          }
          & .corner {
            margin-top: 0;
            margin-left: -80px;
            align-self: flex-start;
          }
        }
      }
    }
    &__benefit {
      display: none;
    }
  }
}
@media (max-width: 576px) {
  .main-block {
    margin: 0 auto 0;
    flex-direction: column;
    &__small {
      display: block;
      margin-bottom: 24px;
      &_inter {
        height: 232px;
      }
    }
    &__info {
      margin-top: 0px;
      &_descr {
        margin-bottom: 16px;
      }
      &_title {
        width: 100%;
        &-black, &-span {
          font-size: 38px;
          line-height: 42px;
        }
        &-black {
          margin-right: 0;
        }
        &-span {
          margin-left: 16px;
        }
        &-license {
          font-size: 16px;
          line-height: 16px;
          margin-left: -12px;
        }
      }
      &_add {
        margin-top: 24px;
        column-gap: unset;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        .corner {
          display: none;
        }
        &-benefsmall {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-right: 0;
          margin-top: 40px;
          order: 2;
          gap: 16px;
          &_main {
            display: none;
          }
          &_add {
            width: 100%;
            display: flex;
            flex-direction: column;
            &-top, &-bot {
              position: unset;
              width: 100%;
              height: auto;
              margin: 0 auto;
              padding: 16px 15px 16px 16px;
              &--text {
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                color: #000000;
                margin-bottom: 16px;
              }
            }
          }
        }
        &-how {
          margin-top: 0px;
          width: 100%;
        }
        &-int {
          &--item {
            max-width: 100%;
            padding: 16px 16px 16px 18.21px;
          }
        }
        &-choise {
          margin-top: 0px;
          order: 1;
          &--btn {
            margin-top: 24px;
            padding: 24px 58px;
            order: 0;
          }
        }
      }
    }
    &__benefit {
      display: none;
    }
  }
}
</style>
