<template>
  <el-tooltip
    :visible="visibleTooltip"
    effect="customized"
    popper-class="promotion__tooltip"
  >
    <template #content>
      <span>Акция: Подарок</span>
    </template>
    <div
      class="promotion"
      @mouseenter="visibleTooltip = true"
      @mouseleave="visibleTooltip = false"
    >
      <IconFire />
    </div>
  </el-tooltip>
</template>

<script setup>
import { ref } from 'vue'
import IconFire from "@/components/Icons/IconFire.vue";

const visibleTooltip = ref(false)
</script>

<style lang="scss">
.promotion {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #FFC700;
  border-radius: 50%;

  &__tooltip {
    &.el-popper {
      border-radius: 8px;

      &.is-customized {
        background: $yellow;
        border: 1px solid $yellow;

        & .el-popper__arrow::before {
          border: 1px solid $yellow;
          background: $yellow;
        }
      }

      & span {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: $white;
      }
    }
  }
}
</style>