<template>
  <div class="apartment-form">
    <div class="apartment-form__title">
      <p class="_title">Забронировать квартиру в 2 клика</p>
      <p>Наш менеджер перезвонит вам в течение 15 минут</p>
    </div>
    <div class="apartment-form__form">
      <Form />
      <p class="apartment-form__privacy">Отправляя форму, вы соглашаетесь на обработку персональных данных</p>
    </div>
  </div>
</template>

<script setup>

import Form from "@/components/Form/Form.vue";
</script>

<style lang="scss" scoped>
.apartment-form {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 426px;
  background: $blue-100;
  padding: 75px 120px 0;

  @include respond-to(tablet) {
    padding: 60px 60px 0;
  }
  @include respond-to(mobile) {
    flex-direction: column;
    height: max-content;
    padding: 80px 60px 80px;
  }
  @include respond-to(sm-mobile) {
    flex-direction: column;
    height: max-content;
    padding: 60px 16px 60px;
  }

  &__title {
    width: 390px;

    @include respond-to(tablet) {
      width: 290px;
    }
    @include respond-to(mobile) {
      width: 100%;
    }

    & p {
      font-size: 16px;
      font-weight: 300;
      color: $black;
    }

    & ._title {
      font-size: 42px;
      font-weight: 600;
      margin-bottom: 16px;

      @include respond-to(tablet) {
        font-size: 32px;
      }
    }

  }

  &__form {
    width: 100%;
    max-width: 660px;

    @include respond-to(tablet) {
      max-width: 444px;
    }
    @include respond-to(mobile) {
      max-width: 100%;
      padding-top: 40px;
    }
  }

  &__privacy {
    font-size: 12px;
    font-weight: 300;
    color: $gray-700;
  }
}
</style>