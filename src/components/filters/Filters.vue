<template>
  <div class="filters-wrapper">
    <div class="city-and-stars">
      <filter-city/>
      <filter-stars class="stars"/>
    </div>
    <div class="price-and-type">
      <filter-type/>
      <filter-price/>
      <div class="reset-filters">
        <v-icon
            medium
            color="black"
        >
          mdi-refresh
        </v-icon>
        <span @click="resetFilters">Сбросить все фильтры</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'filters',
  components: {
    FilterPrice: () => import("../filter-price/FilterPrice"),
    FilterType: () => import("../filter-type/FilterType"),
    FilterStars: () => import("../filter-stars/FilterStars"),
    FilterCity: () => import("../filter-city/FilterCity")
  },

  methods: {
    ...mapMutations(['resetFilters']),
  }

}
</script>

<style scoped lang="scss">
.filters-wrapper {
  width: 33%;

  .city-and-stars {
    display: flex;
    align-items: flex-start;

    .stars {
      margin-left: 21px;
    }
  }

  .price-and-type {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .reset-filters {
    margin: 30px 50px;
    cursor: pointer;
  }

  .mdi-refresh::before {
    transform: rotate(-95deg);
  }
}
</style>
