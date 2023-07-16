<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="v-modal"
      @click="emits('update:modelValue', false)"
    >
      <div
        v-show="modelValue"
        class="v-modal__inner"
        @click.stop
      >
        <div
          class="v-modal__close"
          @click="emits('update:modelValue', false)"
        >
          <IconClose />
        </div>
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script setup>
import IconClose from "@/components/Icons/IconClose.vue";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
console.log(props)
</script>

<style lang="scss" scoped>
.v-modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(75, 70, 92, 0.6);
  opacity: 1;
  z-index: 100;


  &__inner {
    position: relative;
    width: max-content;
    height: max-content;
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 100px);
    background: #FFFFFF;
    overflow-y: auto;

    @include respond-to(sm-mobile) {
      max-width: 100%;
      max-height: 100%;
    }

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: $yellow;
    }
    &::-webkit-scrollbar-track {
      background: $gray-600;
      border-radius: 8px;
    }
  }

  &__close {
    position: fixed;
    top: 70px;
    right: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0.68px solid rgba(222, 222, 222, 1);
    cursor: pointer;

    @include respond-to(sm-mobile) {
      top: 20px;
      right: 20px;
    }
  }
}


.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>