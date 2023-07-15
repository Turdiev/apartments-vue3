<template>
  <div class="v-range-input">
    <label>{{ props.label }}</label>
    <div class="v-range-input__wrapper">
      <div class="v-range-input__item-list">
        <div class="v-range-input__item">
          <input
            id="from-area"
            type="number"
            class="v-range-input__input"
          >
        </div>
        <div class="v-range-input__divider" />
        <div class="v-range-input__item">
          <input
            id="price"
            type="number"
            class="v-range-input__input"
          >
        </div>
      </div>
      <el-slider
        v-model="value"
        range
        :show-tooltip="false"
        :max="10000"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
});

const value = ref([0, 10000])
</script>
<style lang="scss" >
.v-range-input {
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    font-size: 11px;
    font-weight: 400;
    line-height: 11px;
    color: $gray-700;
  }

  &__wrapper {
    position: relative;
  }

  &__item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border: 1px solid $gray-300;
    border-radius: 4px;
    width: 100%;
    min-width: 155px;
    height: 46px;
  }

  &__item {

  }

  &__input {
    display: flex;
    flex-grow: 1;
    //min-width: 115px;
    width: 100%;
    height: 100%;
    padding: 0 3px;
    border: none;
    background: transparent;
    outline: none;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    color: $black;
  }

  &__divider {
    width: 1px;
    height: 70%;
    background: $gray-300;
  }
}

//slider
.v-range-input {

  & .el-slider {
    position: absolute;
    left: 6%;
    bottom: 0;
    width: 88%;
    height: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .el-slider__runway {
    height: 1px;
  }

  & .el-slider__bar {
    height: 1px;
    background: $yellow;
  }

  & .el-slider__button-wrapper {
    top: -13px;
    width: 12px;
    height: 12px;
  }

  & .el-slider__button {
    width: 100%;
    height: 100%;
    border: solid 1px $yellow;
  }
}

</style>
