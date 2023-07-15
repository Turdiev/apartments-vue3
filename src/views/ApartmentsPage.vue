<template>
  <div class="apartments container">
    <div class="apartments__line" />
    <h1 class="apartments__title">Вам подходит 375 вариантов</h1>
    <FiltersApartments />
    <SortingApartments
      class="apartments__sorting"
    />
  </div>
</template>

<script setup>
import FiltersApartments from "@/components/FiltersApartments.vue";
import SortingApartments from "@/components/SortingApartments.vue";
</script>

<style lang="scss" scoped>
.apartments {

  &__line {
    width: 100%;
    height: 1px;
    background: #DEDEDE;
    margin: 120px 0 40px 0;
  }

  &__title {
    font-size: 42px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 0;
    margin-bottom: 80px;
  }

  &__sorting {
    margin-top: 55px;
  }
}
</style>