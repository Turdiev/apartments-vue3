<template>
  <VModal>
    <div class="success-modal">
      <h2>Заявка успешно отправлена</h2>
      <p>Наш менеджер свяжется с вами для уточнения деталей</p>
      <el-button
        type="primary"
        @click="emits('update:modelValue', false)"
      >
        Вернуться в каталог
      </el-button>
    </div>
  </VModal>
</template>

<script setup>

import VModal from "@/components/Modal/VModal.vue";

const emits = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.success-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px 95px 140px;
  @include respond-to(mobile) {
    padding: 120px 73px 100px;
  }
  @include respond-to(sm-mobile) {
    width: 100%;
    height: 100%;
    padding: 120px 16px 100px;
  }

  & h2 {
    font-size: 42px;
    font-weight: 600;
    color: $black;
    text-align: center;

    @include respond-to(mobile) {
      font-size: 32px;
    }
    @include respond-to(sm-mobile) {
      font-size: 28px;
    }
  }

  & p {
    font-size: 16px;
    font-weight: 300;
    color: $black;
    margin: 24px 0 40px;
    text-align: center;
  }

  & .el-button {
    max-width: 360px;
    width: 100%;
    height: 40px;
    padding: 13px 34px 13px 34px;
    border-radius: 30px;
    background: $yellow;
    border: $yellow;
    margin-top: 12px;
  }
}
</style>