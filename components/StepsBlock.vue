<template>
  <section class="steps">
    <div class="container">
      <div class="steps__wrapper">
        <div class="steps__title" id="steps" data-aos="new-animation" data-aos-duration="800">Этапы<br>монтажных<br>работ</div>
        <div class="steps__main">
          <ul class="steps__main_list">
            <li class="steps__main_list-item">
              <div class="steps__main_list-item--wrapp" data-aos="new-animation" data-aos-duration="1200">
                <div class="steps__main_list-item--sqr" data-aos="new-animation">1</div>
                <div class="steps__main_list-item--text">ДОСТАВКА СЕПТИКА НА ОБЪЕКТ</div>
              </div>
              <div class="steps__main_list-item--img"><img src="@/assets/images/steps-small.png"></div>
            </li>
            <li class="steps__main_list-item">
              <div class="steps__main_list-item--wrapp" data-aos="new-animation" data-aos-duration="1400">
                <div class="steps__main_list-item--sqr">2</div>
                <div class="steps__main_list-item--text">ПОДГОТОВКА КОТЛОВАНА И МАГИСТРАЛЕЙ</div>
              </div>
              <div class="steps__main_list-item--img"><img src="@/assets/images/steps-small.png"></div>
            </li>
            <li class="steps__main_list-item">
              <div class="steps__main_list-item--wrapp" data-aos="new-animation" data-aos-duration="1600">
                <div class="steps__main_list-item--sqr">3</div>
                <div class="steps__main_list-item--text">УСТАНОВКА СЕПТИКА В КОТЛОВАН</div>
              </div>
              <div class="steps__main_list-item--divider"></div>
              <div class="steps__main_list-item--img"><img src="@/assets/images/steps-small.png"></div>
            </li>
            <li class="steps__main_list-item">
              <div class="steps__main_list-item--wrapp" data-aos="new-animation" data-aos-duration="1800">
                <div class="steps__main_list-item--sqr steps__main_list-item--sqr_deactive">4</div>
                <div class="steps__main_list-item--text steps__main_list-item--text_deactive">ПРОКЛАДКА ТРУБ И ЭЛЕКТОКАБЕЛЯ</div>
              </div>
              <div class="steps__main_list-item--img"><img src="@/assets/images/steps-small.png"></div>
            </li>
            <li class="steps__main_list-item">
              <div class="steps__main_list-item--wrapp" data-aos="new-animation" data-aos-duration="2000">
                <div class="steps__main_list-item--sqr steps__main_list-item--sqr_deactive">5</div>
                <div class="steps__main_list-item--text steps__main_list-item--text_deactive">НАСТРОЙКИ И ПРОВЕРКА РАБОТОСПОСОБНОСТИ</div>
              </div>
              <div class="steps__main_list-item--img"><img src="@/assets/images/steps-small.png"></div>
            </li>
            <li class="steps__main_list-item">
              <div class="steps__main_list-item--wrapp" data-aos="new-animation" data-aos-duration="2200">
                <div class="steps__main_list-item--sqr steps__main_list-item--sqr_deactive">6</div>
                <div class="steps__main_list-item--text steps__main_list-item--text_deactive">ОБУЧЕНИЕ</div>
              </div>
              <div class="steps__main_list-item--img"><img src="@/assets/images/steps-small.png"></div>
            </li>
          </ul>
          <div class="steps__main_image">
            <div class="steps__main_image-inter"><img src="@/assets/images/steps-img.png"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

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
.steps {
  padding-bottom: 120px;
  &__wrapper {
    border-left: 1px solid #E3E3E3;
    display: flex;
    flex-direction: column;
  }
  &__title {
    padding: 160px 0 64px 112px;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    font-size: 72px;
    line-height: 80px;
    text-transform: uppercase;
    color: #000000;
  }
  &__main {
    display: flex;
    // justify-content: space-between;
    &_list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 64px;
      &-item {
        display: flex;
        align-items: center;
        &--wrapp {
          display: flex;
          align-items: center;
          gap: 48px;
        }
        &--sqr {
          padding: 22px 27px;
          border: 1px solid #E3E3E3;
          background: #FCFCFC;
          border-left: none;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          color: #000000;
          &_deactive {
            color: #949494;
          }
        }
        &--text {
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          text-transform: uppercase;
          color: #000000;
          &_deactive {
            color: #949494;
          }
        }
        &--img {
          display: none;
        }
        &--divider {
          width: 370px;
          height: 1px;
          margin-left: 24px;
          background: #E3E3E3;
        }
      }
    }
    &_image {
      padding: 8px;
      background: #FCFCFC;
      border: 1px solid #E3E3E3;
      &-inter {
        border: 1px solid #E3E3E3;
        object-fit: cover;
      }
    }
  }
}
@media (min-width: 993px) and (max-width: 1160px) {
  .steps {
    padding-bottom: 0;
    &__title {
      padding: 100px 0 48px 40px;
      font-size: 48px;
      line-height: 56px;
    }
    &__main {
      &_list {
        gap: 48px;
        &-item {
          &--wrapp {
            gap: 24px;
          }
          &--sqr {
            padding: 0;
            display: flex;
            width: 64px;
            height: 64px;
            justify-content: center;
            align-items: center;
            border: 1px solid #E3E3E3;
            font-size: 16px;
            line-height: 18px;
          }
          &--text {
            font-size: 14px;
            line-height: 16px;
            padding-right: 16px;
          }
          &--divider {
            width: 114px;
          }
        }
      }
      &_image {
        width: 100%;
        max-width: 402px;
        &-inter {
          width: 100%;
          height: 512px;
          object-fit: cover;
          display: flex;
          & img {
            display: flex;
            width: 100%;
            align-self: center;
          }
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .steps {
    padding-bottom: 0;
    &__title {
      padding: 100px 0 48px 40px;
      font-size: 48px;
      line-height: 56px;
    }
    &__main {
      &_list {
        gap: 48px;
        &-item {
          &--wrapp {
            gap: 20px;
          }
          &--sqr {
            padding: 0;
            display: flex;
            width: 48px;
            height: 48px;
            justify-content: center;
            align-items: center;
            border: 1px solid #E3E3E3;
            font-size: 16px;
            line-height: 18px;
          }
          &--text {
            font-size: 14px;
            line-height: 16px;
            padding-right: 16px;
          }
          &--divider {
            margin-left: 16px;
            width: 74px;
          }
        }
      }
      &_image {
        width: 100%;
        max-width: 402px;
        &-inter {
          width: 100%;
          height: 512px;
          object-fit: cover;
          display: flex;
          & img {
            display: flex;
            width: 100%;
            align-self: center;
          }
        }
      }
    }
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .steps {
    padding-bottom: 0;
    &__wrapper {
      border-left: none;
    }
    &__title {
      padding: 100px 0 48px 40px;
      font-size: 48px;
      line-height: 56px;
    }
    &__main {
      &_list {
        gap: 48px;
        &-item {
          &--wrapp {
            gap: 16px;
          }
          &--sqr {
            padding: 0;
            display: flex;
            width: 48px;
            height: 48px;
            flex: 0 0 auto;
            justify-content: center;
            align-items: center;
            border: 1px solid #E3E3E3;
            font-size: 16px;
            line-height: 18px;
          }
          &--text {
            font-size: 14px;
            line-height: 16px;
            padding-right: 16px;
          }
          &--divider {
            width: 74px;
            margin-left: 16px;
          }
        }
      }
      &_image {
        width: 100%;
        max-width: 402px;
        &-inter {
          width: 100%;
          height: 512px;
          object-fit: cover;
          display: flex;
          & img {
            display: flex;
            width: 100%;
            align-self: center;
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .steps {
    margin-top: 64px;
    padding-bottom: 0;
    &__title {
      padding: 0px;
      font-size: 38px;
      line-height: 42px;
    }
    &__wrapper {
      border-left: none;
    }
    &__main {
      margin-top: 32px;
      &_list {
        gap: 24px;
        &-item {
          gap: 24px;
          flex-wrap: wrap;
          &--wrapp {
            gap: 16px;
          }
          &--sqr {
            padding: 0;
            display: flex;
            width: 48px;
            height: 48px;
            justify-content: center;
            align-items: center;
            border: 1px solid #E3E3E3;
            font-size: 16px;
            line-height: 18px;

          }
          &--sqr {
            &_deactive {
              color: #000000;
            }
          }
          &--text {
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            line-height: 16px;
            padding-right: 16px;

            &_deactive {
              color: #000000;
            }
          }
          &--divider {
            display: none;
          }
          &--img {
            padding: 8px;
            display: flex;
            width: 100%;
            background: #FCFCFC;
            border: 1px solid #E3E3E3;
            & img {
              width: 100%;
              height: auto;
              border: 1px solid #E3E3E3;
            }
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
