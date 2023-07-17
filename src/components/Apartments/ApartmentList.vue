<template>
  <div class="apartment-list">
    <div class="apartment-list__promotion">
      <PromotionElement />
    </div>
    <div
      v-if="isXsMobile"
      class="apartment-list__header"
    >
      <IconHeart />
      <IconScales />
    </div>
    <div class="apartment-list__content">
      <div class="apartment-list__plan">
        <img
          src="@/assets/images/plan.png"
          alt="plan"
        >
      </div>
      <div class="apartment-list__wrapper">
        <div class="apartment-list__wrap">
          <div class="apartment-list__info">
            <p class="apartment-list__resident-area">{{ apartment.objectName}}</p>
            <p class="apartment-list__title">{{ apartment.title }}</p>
          </div>
          <div class="apartment-list__complex">
            <span>Литер {{ apartment.literNum }}</span>
            <span>Этаж {{ apartment.floorNum }}</span>
            <span>Сдача {{ apartment.deadline }}</span>
          </div>
          <FeaturesElement
            v-if="isMobile || isXsMobile"
            :features="apartment.features"
          />
        </div>
        <FeaturesElement
          v-if="isTablet"
          :features="apartment.features"
          class="apartment-list__features"
        />
        <div class="apartment-list__prices">
          <p
            v-if="apartment.oldPrice"
            class="apartment-list__old-price"
          >
            {{ apartment.oldPrice }} ₽
          </p>
          <p
            class="apartment-list__price"
            :class="{'_new-price': apartment.oldPrice}"
          >
            {{ apartment.price }} ₽
          </p>
          <div
            v-if="apartment.salePercent"
            class="apartment-list__percent"
          >
            <span>{{ apartment.salePercent }}</span>
          </div>
        </div>
        <FeaturesElement
          v-if="isLaptop"
          :features="apartment.features"
        />
        <div
          v-if="!isXsMobile"
          class="apartment-list__action"
        >
          <IconHeart />
          <IconScales />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import PromotionElement from "@/components/Apartments/PromotionElement.vue";
import FeaturesElement from "@/components/Apartments/FeaturesElement.vue";
import IconHeart from "@/components/Icons/IconHeart.vue";
import IconScales from "@/components/Icons/IconScales.vue";
import {computed} from "vue";
import {useMq} from "vue3-mq";

const mq = useMq();
defineProps({
  apartment: {
    type: Object,
    default: () => {},
  },
});

const isXsMobile = computed(() => mq.current === 'xsMobile');
const isMobile = computed(() => mq.current === 'mobile' || mq.current === 'smMobile');
const isTablet = computed(() => mq.current === 'tablet');
const isLaptop = computed(() => mq.current === 'laptop');
</script>

<style lang="scss" scoped>
.apartment-list {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 140px;
  background: $white;
  border: 1px solid #EAEAEA;
  padding: 0 20px 0 35px;

  @include respond-to(mobile) {
    height: 147px;
  }

  @include respond-to(sm-mobile) {
    flex-direction: column;
    max-width: 343px;
    height: 292px;
    padding: 0 20px 0 0;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-top: 10px;
  }

  &__content {
    display: flex;
    align-items: center;
    width: 100%;

    @include respond-to(sm-mobile) {
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @include respond-to(sm-mobile) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 636px;
    width: 100%;

    @include respond-to(tablet) {
      flex-wrap: wrap;
    }
  }

  &__promotion {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: flex-start;
    height: 100%;
  }

  &__action {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 10px;
  }

  &__plan {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100px;
    max-height: 117px;
    width: 100%;
    height: 100%;
    margin-right: 35px;

    @include respond-to(sm-mobile) {
      min-width: 115px;
      min-height: 134px;
      margin-right: 0;
    }

    @include respond-to(xs-mobile) {
      min-width: 94px;
      min-height: 134px;
      margin-right: 0;
    }
  }

  &__info  {
    width: 215px;

    @include respond-to(tablet) {
      width: 100%;
    }
  }

  &__resident-area {
    font-size: 14px;
    font-weight: 400;
    color: $blue-700;
    margin-bottom: 8px;

    @include respond-to(tablet) {
      font-size: 12px;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: $black;

    @include respond-to(tablet) {
      font-size: 14px;
      margin-bottom: 15px;
    }

    @include respond-to(mobile) {
      margin-bottom: 12px;
    }
  }

  &__complex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    max-width: 322px;
    width: 100%;
    margin-right: 76px;

    @include respond-to(tablet) {
      margin-right: 10px;
      margin-bottom: 15px;
    }

    @include respond-to(mobile) {
      max-width: 266px;
    }

    @include respond-to(sm-mobile) {
      flex-wrap: wrap;
      max-width: 100px;
    }

    & span {
      font-size: 14px;
      font-weight: 400;
      color: $blue-300;

      @include respond-to(mobile) {
        font-size: 12px;
      }
      @include respond-to(sm-mobile) {
        font-size: 10px;
      }
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
    flex-direction: column;
    align-items: flex-start;
    min-width: 132px;

    @include respond-to(sm-mobile) {
      margin-top: 15px;
    }
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
    margin-right: 6px;

    &._new-price {
      color: $yellow;
    }
  }

  &__old-price {
    font-size: 14px;
    font-weight: 400;
    text-decoration: line-through;
    color: $gray-700;
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

  &__features {
    margin-right: 54px;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background: $gray-300;
    margin: 16px 0 14px;
  }
}
</style>