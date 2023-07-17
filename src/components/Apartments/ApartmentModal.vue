<template>
  <VModal>
    <div class="apartment-information">
      <div class="apartment-information__plan">
        <img
          src="@/assets/images/plan-apartment.png"
          alt="plan"
        >
      </div>
      <div class="apartment-information__content">
        <div class="apartment-information__description">
          <p class="apartment-information__title">{{ apartment.title }}</p>
          <p class="apartment-information__articul">ID{{ apartment.id }}</p>
          <p class="apartment-information__resident-area">{{ apartment.objectName }}</p>
          <p class="apartment-information__deadline">Срок сдачи: {{ apartment.deadline }}</p>
        </div>
        <div class="apartment-information__parameters">
          <p class="_name">Корпус</p>
          <p>{{ apartment.literNum }}</p>
        </div>
        <div class="apartment-information__parameters">
          <p class="_name">Этаж</p>
          <p>{{ apartment.floorNum }}</p>
        </div>
        <div class="apartment-information__parameters">
          <p class="_name">Общая площадь</p>
          <p>{{ apartment.area }}</p>
        </div>
        <div class="apartment-information__parameters">
          <p class="_name">Жилая площадь</p>
          <p>{{ apartment.area - apartment.areaKitchen }}</p>
        </div>
        <div class="apartment-information__price">
          <p>Стоимость</p>
          <p class="_price">от {{ apartment.price }} ₽</p>
        </div>
      </div>
    </div>
    <ApartmentForm />
  </VModal>
</template>

<script setup>

import VModal from "@/components/Modal/VModal.vue";
import ApartmentForm from "@/components/Apartments/ApartmentForm.vue";

defineProps({
  apartment: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.apartment-information {
  display: flex;
  justify-content: space-between;
  padding: 0 120px 80px;

  @include respond-to(tablet) {
    padding: 0 60px 80px;
  }
  @include respond-to(mobile) {
    flex-direction: column;
  }
  @include respond-to(sm-mobile) {
    padding: 0 16px 60px;
  }

  &__plan {
    width: 100%;
    height: 100%;
    max-width: 546px;
    max-height: 584px;
    padding-top: 60px;

    @include respond-to(tablet) {
      max-width: 410px;
      max-height: 440px;
      padding-top: 70px;
    }

    & img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    width: 660px;
    padding-top: 117px;

    @include respond-to(mobile) {
      width: 100%;
      padding-top: 40px;
    }
  }

  &__description {
    margin-bottom: 60px;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: $black;
    margin-bottom: 32px;
  }

  &__articul {
    font-size: 12px;
    font-weight: 400;
    color: $gray-600;
    margin-bottom: 32px;
  }

  &__resident-area {
    font-size: 16px;
    font-weight: 400;
    color: $blue-700;
    margin-bottom: 14px;
  }

  &__deadline {
    font-size: 12px;
    font-weight: 400;
    color: $gray-700;
  }

  &__parameters {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 41px;
    border-bottom: 1px solid $gray-400;
    margin-bottom: 24px;

    & p {
      font-size: 16px;
      font-weight: 600;
      color: $black;
    }

    & ._name {
      font-weight: 400;
      color: $gray-700;
    }
  }

  &__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 60px;

    & p {
      font-size: 20px;
      font-weight: 600;
      color: $gray-700;
    }

    & ._price {
      font-weight: 700;
      color: $blue-900;
    }
  }
}
</style>