<template>
  <div class="ui-select">
    <label class="ui-select__label">{{ props.label }}</label>
    <el-select
      v-model="value"
      class="m-2 v-select"
      placeholder="Select"
      size="large"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    required: true
  }
});

const value = ref(props.options[0])

</script>

<style lang="scss">
.ui-select {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  &__label {
    font-size: 11px;
    font-weight: 400;
    line-height: 11px;
    color: $gray-700;
  }
}

.el-select.v-select {
  & .el-input__inner {
    height: 44px;
  }

  & .el-input.is-focus {
    & .el-input__wrapper {
      box-shadow: 0 0 0 1px $yellow inset!important;
    }
  }

  & .el-input__wrapper {
    &.is-focus {
      box-shadow: 0 0 0 1px $yellow inset!important;
    }
  }
}

.el-select-dropdown__item.selected {
  color: $gray-700 !important;
}
</style>
