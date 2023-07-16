<template>
  <div class="features">
    <div class="features__item">
      <span>Отделка</span>
    </div>
    <div class="features__item">
      <span>Вид на горы</span>
    </div>
    <el-tooltip
      :visible="visibleTooltip"
      popper-class="features__tooltip"
      effect="customized"
    >
      <template #content>
        <span>Лоджия </span>
        <span>Рассрочка</span>
      </template>
      <div
        class="features__item"
        @mouseenter="visibleTooltip = true"
        @mouseleave="visibleTooltip = false"
      >
        <span>+2</span>
      </div>
    </el-tooltip>
  </div>
</template>

<script setup>
import {ref} from "vue";

const visibleTooltip = ref(false)
</script>

<style lang="scss">
.features {
  display: flex;
  align-items: center;
  gap: 4px;

  &__item {
    display: flex;
    align-items: center;
    width: max-content;
    height: 29px;
    background: $blue-100;
    border-radius: 8px;
    padding: 6px 10px 6px 10px;

    & span {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: $blue-800;

      @include respond-to(sm-mobile) {
        font-size: 10px;
      }
    }
  }

  &__tooltip {
    &.el-popper {
      display: flex;
      flex-direction: column;
      border-radius: 8px;

      &.is-customized  {
        background: $blue-100;
        border: 1px solid $blue-100;

        & .el-popper__arrow::before {
          border: 1px solid $blue-100;
          background: $blue-100;
        }
      }

      & span {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: $blue-800;
      }
    }
  }

}


</style>