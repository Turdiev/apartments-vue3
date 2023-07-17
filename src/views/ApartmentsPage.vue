<template>
  <div class="apartments container">
    <div class="apartments__line" />
    <h1 class="apartments__title">Вам подходит 375 вариантов</h1>
    <FiltersApartments
      :options="options"
      :rooms="rooms"
      :min-price="store.getMinPrice"
      :max-price="store.getMaxPrice"
      :min-area="store.getMinArea"
      :max-area="store.getMaxArea"
      @change="onFilterChange"
    />
    <SortingApartments
      :active-toggle="toggleView"
      class="apartments__sorting"
      @click:toggle="toggleView = $event"
    />
    <div
      v-if="toggleView === 'card'"
      class="apartments__wrapper"
    >
      <ApartmentCard
        v-for="apartment in selectedApartments"
        :key="apartment.id"
        :apartment="apartment"
        class="apartments__item"
      />
    </div>
    <div
      v-if="toggleView === 'list'"
      class="apartments__lists"
    >
      <ApartmentList
        v-for="apartment in selectedApartments"
        :key="apartment.id"
        :apartment="apartment"
      />
    </div>
    <div
      v-if="!selectedApartments.length"
      class="apartments__no-results"
    >
      <span>По вашему запросу ничего не найдено</span>
    </div>
    <ApartmentModal v-model="isOpenModal"/>
  </div>
</template>

<script setup>
import FiltersApartments from "@/components/FiltersApartments.vue";
import SortingApartments from "@/components/SortingApartments.vue";
import ApartmentList from "@/components/Apartments/ApartmentList.vue";
import ApartmentCard from "@/components/Apartments/ApartmentCard.vue";
import ApartmentModal from "@/components/Apartments/ApartmentModal.vue";
import {ref} from "vue";
import {useApartment} from "@/store";

const store = useApartment()

const isOpenModal = ref(true);
const toggleView = ref('card');
const selectedApartments = ref(store.getAllApartment);

const options = [
  {
    value: 'Любой',
    label: 'Любой',
  },
]

const rooms = [
  {
    name: 'Студия',
    value: 'Ст'
  },
  {
    name: '1-комнатная квартира',
    value: '1'
  },
  {
    name: '2-комнатная квартира',
    value: '2'
  },
  {
    name: '3-комнатная квартира',
    value: '3+'
  }
]

const onFilterChange = (params) => {
  console.log('PARA', params)
  selectedApartments.value = store.getAllApartment.filter(apartment => {
    const areaNumber = parseInt(apartment.area.replace(/\s/g, ''))
    const priceNumber = parseInt(apartment.price.replace(/\s/g, ''))
    let room = false;
    let area = params.area[0] <= areaNumber && params.area[1] >= areaNumber;
    let price = params.price[0] <= priceNumber && params.price[1] >= priceNumber;
    if (params.room) {
      room = params.room.name.includes(apartment.title.split(' ')[0])
      return room && area && price
    }
    return area && price
  })
}
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
    margin-bottom: 48px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__item {
    margin-bottom: 30px;
  }

  &__lists {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__no-results {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 200px;
  }
}
</style>