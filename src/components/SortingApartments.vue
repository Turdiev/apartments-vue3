<template>
  <div class="sorting-apartments">
    <div class="sorting-apartments__sort">
      <span>Сортировать:</span>
      <div class="sorting-apartments__sort-btn _price">
        <span>по цене</span>
      </div>
      <div class="sorting-apartments__sort-btn _area">
        <span>по площади</span>
      </div>
    </div>
    <div class="sorting-apartments__toggle">
      <div
        class="sorting-apartments__toggle-btn _card"
        :class="{'_active-toggle': activeToggle === 'card'}"
        @click="activeToggle = 'card'"
      >
        <IconToggleCard class="icon-card"/>
      </div>
      <div
        class="sorting-apartments__toggle-btn _list"
        :class="{'_active-toggle': activeToggle === 'list'}"
        @click="activeToggle = 'list'"
      >
        <IconToggleList class="icon-list"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconToggleCard from "@/components/icons/IconToggleCard.vue";
import IconToggleList from "@/components/icons/IconToggleList.vue";
import {ref} from "vue";

const activeToggle = ref('card')
</script>

<style lang="scss" >
.sorting-apartments {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @include respond-to(mobile) {
    gap: 24px;
    flex-wrap: wrap;
  }

  &__sort {
    display: flex;
    align-items: center;
    gap: 20px;

    & span {
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0;
      color: $gray-700;
    }

    &-btn {

      & span {
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
        letter-spacing: 0;
        color: $blue-900;
      }
    }
  }

  &__toggle {
    display: flex;
    align-items: center;
    gap: 6px;

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 30px;
      border: 1px solid #DEDEDE;
      transition: all .3s ease;
      cursor: pointer;

      &:hover {
        border: 1px solid #FFC700;
      }

      &._active-toggle {
        background: $yellow;
        border: 1px solid #FFC700;

        & svg {
          & rect {
            stroke: white;
          }
        }
      }
    }
  }
}
</style>