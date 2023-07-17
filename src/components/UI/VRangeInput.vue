<template>
  <div class="v-range-input">
    <label>{{ label }}</label>
    <div class="v-range-input__wrapper">
      <div class="v-range-input__item-list">
        <div class="v-range-input__item">
          <input
            id="min"
            v-model="minInputValue"
            type="number"
            class="v-range-input__input"
            @input="onInputChange($event, 0)"
          >
        </div>
        <div class="v-range-input__divider" />
        <div class="v-range-input__item">
          <input
            id="max"
            v-model="maxInputValue"
            type="number"
            class="v-range-input__input"
            @input="onInputChange($event, 1)"
          >
        </div>
      </div>
      <el-slider
        v-model="rangeValue"
        range
        :show-tooltip="false"
        :min="minValue"
        :max="maxValue"
        @change="onRangeChange($event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect} from 'vue'

const emits = defineEmits(['change'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  minValue: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 0,
  },
  minValueInput: {
    type: Number,
    default: 0,
  },
  maxValueInput: {
    type: Number,
    default: 0,
  },
});

const rangeValue = ref([props.minValueInput, props.maxValueInput])
const minInputValue = ref(props.minValueInput)
const maxInputValue = ref(props.maxValueInput)

watchEffect(() => {
  if (props.minValueInput) minInputValue.value = props.minValueInput
  if (props.maxValueInput) maxInputValue.value = props.maxValueInput
})
const onRangeChange = (value) => {
  emits('change', value)
}
const onInputChange = (event, index) => {
  let val = Number(event.target.value)
  if (index === 0) {
    if (val >= rangeValue.value[1]) val = rangeValue.value[1] - 1;
    if (val < props.minValue) val = props.minValue;
    rangeValue.value = [val, rangeValue.value[1]]
  } else {
    if (val <= rangeValue.value[0]) val = rangeValue.value[0] + 1;
    if (val > props.maxValue) val = props.maxValue;
    rangeValue.value = [rangeValue.value[0], val]
  }
  emits('change', rangeValue.value)
}
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
