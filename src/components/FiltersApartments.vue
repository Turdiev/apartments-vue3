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
            @click="selectRoom = room.value"
          >
            {{ room.value }}
          </div>
        </div>
      </div>
      <VRangeInput
        label="Площадь, м2"
        class="filters-apartments__area"
      />
      <VRangeInput
        label="Стоимость, млн ₽"
        class="filters-apartments__price"
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
import {computed, ref} from "vue";
import { useMq } from "vue3-mq";

import VSelect from "@/components/ui/VSelect.vue";
import VRangeInput from "@/components/ui/VRangeInput.vue";

const mq = useMq();

const selectRoom = ref(null);

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const rooms = [
  {
    value: 'Ст'
  },
  {
    value: '1'
  },
  {
    value: '2'
  },
  {
    value: '3+'
  }
]

const isMobile = computed(() => mq.current === 'mobile' || mq.current === 'smMobile');
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

}
</style>