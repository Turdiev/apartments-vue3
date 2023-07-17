<template>
  <div class="apartment-card">
    <div class="apartment-card__header">
      <PromotionElement />
      <div class="apartment-card__action">
        <IconHeart />
        <IconScales />
      </div>
    </div>
    <div class="apartment-card__plan">
      <img
        src="@/assets/images/plan.png"
        alt="plan"
      >
    </div>
    <div class="apartment-card__info">
      <p class="apartment-card__resident-area">{{ apartment.objectName }}</p>
      <p class="apartment-card__title">{{ apartment.title }}</p>
      <div class="apartment-card__complex">
        <span>Литер {{ apartment.literNum }}</span>
        <span class="bullet">Этаж {{ apartment.floorNum }}</span>
        <span class="bullet">Сдача {{ apartment.deadline }}</span>
      </div>
      <div class="apartment-card__divider" />
      <div class="apartment-card__prices">
        <p
          class="apartment-card__price"
          :class="{'_new-price': apartment.oldPrice}"
        >
          {{ apartment.price }} ₽
        </p>
        <p
          v-if="apartment.oldPrice"
          class="apartment-card__old-price"
        >{{ apartment.oldPrice }} ₽</p>
        <div
          v-if="apartment.salePercent"
          class="apartment-card__percent"
        >
          <span>{{ apartment.salePercent }}</span>
        </div>
      </div>
      <FeaturesElement
        :features="apartment.features"
      />
    </div>
  </div>
</template>

<script setup>

import PromotionElement from "@/components/Apartments/PromotionElement.vue";
import IconHeart from "@/components/Icons/IconHeart.vue";
import IconScales from "@/components/Icons/IconScales.vue";
import FeaturesElement from "@/components/Apartments/FeaturesElement.vue";

defineProps({
  apartment: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.apartment-card {
  width: 295px;
  height: 522px;
  background: $white;
  border: 1px solid $gray-300;

  @include respond-to(tablet) {
    width: 308px;
  }
  @include respond-to(mobile) {
    width: 351px;
  }
  @include respond-to(sm-mobile) {
    width: 343px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 0;
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__plan {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }

  &__info  {
    padding: 0 20px;
  }

  &__resident-area {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    color: $blue-700;
    margin-bottom: 6px;
  }

  &__title {
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: $black;
    margin-bottom: 12px;
  }

  &__complex {
    display: flex;
    align-items: center;

    & span {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0;
      color: $blue-300;
    }

    & .bullet {
      position: relative;
      margin-left: 13px;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: -8px;
        width: 4px;
        height: 4px;
        display: block;
        border-radius: 6px;
        background-color: $blue-800;
        transform: translateY(-50%);
      }
    }
  }

  &__prices {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__price {
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    margin-right: 6px;

    &._new-price {
      color: $yellow;
    }
  }

  &__old-price {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-decoration: line-through;
    color: $black;
    margin-right: 16px;
  }

  &__percent {
    display: flex;
    align-items: center;
    width: max-content;
    height: 25px;
    background: $yellow;
    border-radius: 31px;
    padding: 7px 4px;

    & span {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: $white;
    }
  }

  &__divider {
    width: 100%;
    height: 1px;
    background: $gray-300;
    margin: 16px 0 14px;
  }
}
</style>