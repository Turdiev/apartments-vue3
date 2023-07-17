<template>
  <div class="filters-apartments">
    <div class="filters-apartments__choose-lcd">
      <VSelect
        label="Выбрать ЖК"
        :options="options"
      />
      <VSelect
        v-if="isMobile"
        label="Выбрать корпус"
        :options="options"
        class="filters-apartments__choose-case"
      />
    </div>
    <div class="filters-apartments__wrapper">
      <div class="filters-apartments__rooms">
        <label>Комнатность</label>
        <div class="filters-apartments__rooms-wrapper">
          <div
            v-for="room in rooms"
            :key="room.value"
            class="filters-apartments__room"
            :class="{'active-room': selectRoom === room.value}"
            @click="selectedRoom(room)"
          >
            {{ room.value }}
          </div>
        </div>
      </div>
      <VRangeInput
        label="Площадь, м2"
        :min-value="minArea"
        :max-value="maxArea"
        :min-value-input="areaFilterValue[0]"
        :max-value-input="areaFilterValue[1]"
        class="filters-apartments__area"
        @change="onChangeArea"
      />
      <VRangeInput
        label="Стоимость, млн ₽"
        :min-value="minPrice"
        :max-value="maxPrice"
        :min-value-input="priceFilterValue[0]"
        :max-value-input="priceFilterValue[1]"
        class="filters-apartments__price"
        @change="onChangePrice"
      />
    </div>
    <VSelect
      v-if="!isMobile"
      label="Выбрать корпус"
      :options="options"
      class="filters-apartments__choose-case"
    />
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import { useMq } from "vue3-mq";

import VSelect from "@/components/UI/VSelect.vue";
import VRangeInput from "@/components/UI/VRangeInput.vue";

const mq = useMq();
const emits = defineEmits(['change'])
const props = defineProps({
  options: {
    type: Array,
  },
  rooms: {
    type: Array
  },
  minPrice: {
    type: Number,
    default: 0,
  },
  maxPrice: {
    type: Number,
    default: 0,
  },
  minArea: {
    type: Number,
    default: 0,
  },
  maxArea: {
    type: Number,
    default: 0,
  },
});


const selectRoom = ref(null);
const priceFilterValue = ref([props.minPrice, props.maxPrice]);
const areaFilterValue = ref([props.minArea, props.maxArea]);
const filterParams = reactive({
  room: '',
  price: [props.minPrice, props.maxPrice],
  area: [props.minArea, props.maxArea]
})

const isMobile = computed(() => mq.current === 'mobile' || mq.current === 'smMobile');

const onChangePrice = (value) => {
  priceFilterValue.value = value
  filterParams.price = value
  emits('change', filterParams)
}
const onChangeArea = (value) => {
  areaFilterValue.value = value
  filterParams.area = value
  emits('change', filterParams)
}
const selectedRoom = (room) => {
  selectRoom.value = room.value
  filterParams.room = room
  emits('change', filterParams)
}
</script>

<style lang="scss" scoped>
.filters-apartments {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @include respond-to(mobile) {
    flex-wrap: wrap;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;

    @include respond-to(mobile) {
      flex-wrap: wrap;
    }

    @include respond-to(sm-mobile) {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  &__rooms {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & label {
      font-size: 11px;
      font-weight: 400;
      line-height: 11px;
      color: $gray-700;
    }

    &-wrapper {
      display: flex;
      gap: 10px;
    }
  }

  &__room {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border-radius: 30px;
    border: 1px solid #DEDEDE;
    color: $black;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      background: $yellow;
      border: 1px solid $yellow;
      color: $white;
    }

    &.active-room {
      border: 1px solid $yellow;
      color: $yellow;
    }
  }

  &__choose-lcd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 230px;

    @include respond-to(mobile) {
      gap: 20px;
      max-width: 100%;
      margin-bottom: 24px;
    }

    @include respond-to(sm-mobile) {
      margin-bottom: 0;
    }
  }

  &__choose-case {
    max-width: 230px;

    @include respond-to(mobile) {
      max-width: 100%;
    }
  }

  &__area, &__price {
    @include respond-to(mobile) {
      max-width: 32.7%;
      min-width: 155px;
    }

    @include respond-to(sm-mobile) {
      max-width: 100%;
    }
  }
}
</style>