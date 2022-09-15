<template>
  <div class="container">
    <section class="calc" id="calc">
      <div class="calc__main">
        <div class="calc__main_top">
          <h2 class="calc__main_top-title">Рассчитайте стоимость установки Септика для вашего участка</h2>
          <div class="calc__main_top-subtitle">Ответьте на 4 вопросов и получите расчёт стоимости и сроков установки септика на ваш участок</div>
        </div>
        <div class="calc__main_bottom">
          <div class="calc__main_bottom-top">
            <div class="calc__main_bottom-top--sqr">{{ questNum }}</div>
            <div class="calc__main_bottom-top--text">{{ actQuest.title }}</div>
          </div>
          </div>
          <div class="calc__main_bottom-main">
            <div class="calc__main_bottom-main--choise">
              <div class="calc__main_bottom-main--choise_item"
                v-for="item in actQuest.variants"
                :key="item"
                :class="{'calc__main_bottom-main--choise_item-active': activeTab === item}"
                @click="changeActive(item)"
              > {{ item }}
              </div>
            </div>
            <div class="calc__main_bottom-main--buttons">
              <button type="button" class="calc__main_bottom-main--buttons_btn" v-if="questNum>1" @click="prevQuest">Предыдущий вопрос</button>
              <button type="button" class="calc__main_bottom-main--buttons_btn" v-if="questNum<4"  @click="nextQuest">Следующий вопрос</button>
              <button type="submit" class="calc__main_bottom-main--buttons_btn" v-if="questNum===4" @click="nextQuest">Отправить форму</button>
          </div>
          </div>
        </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'CalcBlock',
    data() {
      return {
        questNum: 1,
        activeQuest: null,
        activeTab:'',
        answers: {
          people: '',
          square: '',
          coast: '',
          deadline: ''
        },
        questList: [
          {
            id: 1,
            name: 'people',
            title: 'На сколько человек нужна канализация?',
            variants: ['1 - 10', '10 - 50', '50 - 200' ]
          },
          {
            id: 2,
            name: 'square',
            title: 'Общая площадь Вашего дома?',
            variants: ['до 100 кв.м.', '100 - 300 кв.м.', 'более 300 кв.м.' ]
          },
          {
            id: 3,
            name: 'coast',
            title: 'В какую стоимость хотите уложиться?',
            variants: ['до 10 000 руб.', '10 000 - 30 000 руб.', 'более 30 000 руб.' ]
          },
          {
            id: 4,
            name: 'deadline',
            title: 'Как быстро нужно начать работы?',
            variants: ['завтра', 'в течении месяца', 'в течении полугода' ]
          }
        ]
      }
    },
    computed: {
      actQuest() {
        return this.activeQuest = this.questList.find(quest => quest.id === this.questNum)
      }
    },
    mounted() {
     this.activeTab =  this.actQuest.variants[0]
    },
    methods: {
      prevQuest() {
        this.questNum -= 1 ? this.questNum > 1: ''
        this.activeTab = this.actQuest.variants[0]
      },
      nextQuest() {
        const key = this.actQuest.name
        this.answers[key] = this.activeTab
        if (this.questNum < this.questList.length) {
          this.questNum += 1
        } else {
          alert(`Проверьте Ваши ответы:
          1. На сколько человек: ${this.answers.people}
          2. Площадь дома: ${this.answers.square}
          3. Желаемая стоимость: ${this.answers.coast}
          4. Когда начинаем: ${this.answers.deadline}`)
          this.answers = {people: '', square: '', coast: '', deadline: ''}
          this.questNum = 1
        }
        this.activeTab = this.actQuest.variants[0]

        console.log(this.answers)
      },
      changeActive(item) {
        this.activeTab = item
      }
    }
  }
</script>

<style lang="scss">
  .calc {
    margin-top: 160px;
    width: 100%;
    border: 1px solid #E3E3E3;
    padding: 8px;
    &__main {
      border: 1px solid #E3E3E3;
      &_top {
        padding: 40px;
        &-title {
          max-width: 695px;
          margin-bottom: 24px;
          font-family: 'Roboto Condensed';
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
          text-transform: uppercase;
          color: #000000;
        }
        &-subtitle {
          max-width: 409px;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #3F3F3F;
        }
      }
      &_bottom {
        border-top: 1px solid #E3E3E3;
        &-top {
          width: 100%;
          display: flex;
          border-bottom: 1px solid #E3E3E3;
          background: #FCFCFC;
          padding-left: 40px;
          column-gap: 22px;
          &--sqr {
            padding: 22px 24px;
            border-left: 1px solid #E3E3E3;
            border-right: 1px solid #E3E3E3;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            text-align: center;
            color: #000000;
          }
          &--text {
            display: flex;
            align-items: center;
          }
        }
        &-main {
          display: flex;
          flex-direction: column;
          padding: 40px;
          background: #FCFCFC;
          &--choise {
            display: flex;
            column-gap: 40px;
            margin-bottom: 40px;
            &_item {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 32px 24px;
              gap: 8px;
              width: 200px;
              height: 80px;
              border: 1px solid #E3E3E3;
              cursor: pointer;
              &-active {
                color: #000000;
                border: 1px solid #000000;
              }
            }
          }
          &--buttons {
            display: flex;
            gap: 40px;
            &_btn {
              max-width: 236px;
              display: flex;
              padding: 24px 36px;
              border: 2px solid #FF0000;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              line-height: 18px;
              color: #FF0000;
            }
          }
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    .calc {
      margin-top: 100px;
      &__main {
        &_top {
          &-title {
            font-size: 32px;
            line-height: 40px;
          }
        }
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    .calc {
      margin-top: 100px;
      &__main {
        &_top {
          &-title {
            font-size: 32px;
            line-height: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .calc {
      margin-top: 64px;
      &__main {
        &_top {
          padding: 32px 10px 40px 16px;
          &-title {
            font-size: 24px;
            line-height: 32px;
          }
        }
        &_bottom {
          border-top: none;
          &-top {
            flex-direction: column;
            border-bottom: none;
            padding-left: 15px;
            &--sqr {
              max-width: 40px;
              padding: 11px 15px;
              border-top: 1px solid #E3E3E3;
              border-bottom: 1px solid #E3E3E3;
              margin-bottom: 16px;
            }
          }
          &-main {
            padding: 15px;
            &--choise {
              max-width: 100%;
              flex-direction: column;
              margin-bottom: 24px;
              gap: 16px;
              &_item {
                width: 100%;
                height: auto;
                padding: 16px;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
              }
            }
            &--buttons {
              flex-direction: column;
              max-width: 100%;
              gap: 16px;
              &_btn {
                max-width: 100%;
                justify-content: center;
                padding: 24px;
              }
            }
          }
        }
      }
    }
  }
</style>
