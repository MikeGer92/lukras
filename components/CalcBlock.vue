<template>
  <div class="container">
    <section class="calc" id="calc" data-aos="new-animation" data-aos-duration="3000">
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
            <div class="calc__main_bottom-main--choise" v-if="!showForm">
              <div class="calc__main_bottom-main--choise_item"
                v-for="item in actQuest.variants"
                :key="item"
                :class="{'calc__main_bottom-main--choise_item-active': activeTab === item}"
                @click="changeActive(item)"
              > {{ item }}
              </div>
            </div>
            <div class="consult__inter_consl-form" v-if="questNum===5">
              <div class="consult__inter_consl-form--inputs">
                <input v-model="answers.name" type="text" class="consult__inter_consl-form--inputs_inp" placeholder="Имя" name="name">
                <input v-model="answers.phone" type="text" class="consult__inter_consl-form--inputs_inp" placeholder="Телефон" name="phone">
              </div>
              <div class="consult__inter_consl-form--add">
                <button type="submit"
                :class="{'calc__main_bottom-main--buttons_btn': true, 'calc__main_bottom-main--buttons_btn-active': this.answers.name !== '' && this.answers.phone !== ''}"
                  @click="nextQuest"
                  >
                    Отправить ответы
                </button>
                <div type="submit" class="consult__inter_consl-form--add_text">Нажимая кнопку “отправить”, вы соглашаетесь
                  с условиями обработки персональных данных
                </div>
              </div>
            </div>
            <div class="calc__main_bottom-main--buttons">
              <button
                type="button"
                :class="{'calc__main_bottom-main--buttons_btn-active': true }"
                v-if="questNum>1 && questNum<5"
                @click="prevQuest"
              >
                Предыдущий вопрос
              </button>
              <button
                type="button"
                :class="{'calc__main_bottom-main--buttons_btn': true, 'calc__main_bottom-main--buttons_btn-active': this.activeTab !== ''}"
                v-if="questNum<5"
                @click="nextQuest"
              >
                Следующий вопрос
              </button>
              <!-- <button type="submit" class="calc__main_bottom-main--buttons_btn" v-if="questNum===4" @click="nextQuest">Отправить форму</button> -->
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
        showForm: false,
        questNum: 1,
        activeQuest: null,
        activeTab:'',
        answers: {
          people: '',
          square: '',
          coast: '',
          deadline: '',
          name: '',
          phone: ''
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
          },
          {
            id: 5,
            name: 'contacts',
            title: 'Заполните, пожалуйста котактные данные и мы с Вами свяжемся в ближайшее время',
            variants: [ ]
          }
        ]
      }
    },
    computed: {
      actQuest() {
        return this.activeQuest = this.questList.find(quest => quest.id === this.questNum)
      },
      isActiveTab() {
        return this.activeTab !== ''
      }
    },
    mounted() {
    //  this.activeTab =  this.actQuest.variants[0]
    },
    methods: {
      prevQuest() {
        console.log (this.answers)
        this.questNum -= 1 ? this.questNum > 1: ''
        const key = this.actQuest.name
        this.activeTab = this.answers[key]
      },
      nextQuest() {
        console.log (this.showForm)
        const key = this.actQuest.name
        if (this.answers[key] !== '') {
          this.activeTab = this.answers[key]
        } else {
          this.answers[key] = this.activeTab
        }
        console.log (this.answers)
        if (this.activeTab !== '') {
          if (this.questNum < this.questList.length) {
            this.questNum += 1
          } else {
            this.sendAnswers(this.answers)
        }
      } else {
        alert('Сделайте выбор!')
      }
      this.activeTab = ''
      },
      changeActive(item) {
        this.activeTab = item
      },
      sendAnswers(form) {
        if (form.name !== '' && form.phone !== '') {
          alert(`Проверьте Ваши ответы:
            1. На сколько человек: ${this.answers.people}
            2. Площадь дома: ${this.answers.square}
            3. Желаемая стоимость: ${this.answers.coast}
            4. Когда начинаем: ${this.answers.deadline}
            5. Ваше Имя ${this.answers.name}
            6. Ваш Телефон ${this.answers.phone}`)
            this.answers = {people: '', square: '', coast: '', deadline: '', name: '', phone: ''}
            this.questNum = 1
        } else {
          alert('Заполните поля формы')
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
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
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
              border: 1px solid #E3E3E3;
              color: #E3E3E3;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              line-height: 18px;
              &-active {
                max-width: 236px;
                display: flex;
                padding: 24px 36px;
                border: 2px solid #FF0000;
                border-radius: 4px;
                font-weight: 500;
                font-size: 16px;
                line-height: 18px;
                color: #FF0000;
                &:hover {
                  transition: all .2s;
                  background: #FF0000;
                  color: #fff;
                }
              }
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
      width:100vw;
      margin: 0 -16px;
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
            padding: 24px 0 0 15px;
            &--sqr {
              width: 40px;
              height: 40px;
             justify-content: center;
             align-items: center;
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
