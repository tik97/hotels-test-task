<template>
  <div class="filter-city-wrapper">
    <div class="show-or-hide">
      <span class="search">Поиск по странам и городам</span>
      <button @click="show = !show"><img src="../../../src/assets/images/arrow_up.svg" alt=""></button>
    </div>
    <div class="select-wrapper" v-if="show">
      <v-select
          :items="cities"
          label="Введите страну, например, Россия"
          dense
          outlined
          v-model="selectedCity"
          @change="handleChange"
      ></v-select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'filter-city',

  data: () => ({
    show: false,
    selectedCity: null,
    cities: ['Греция', 'Нидерланды', 'Россия', 'Россия', 'Польша']
  }),

  methods: {
    handleChange () {
      this.$store.commit('setCity', this.selectedCity)
    }
  }
}
</script>

<style lang="scss">
.filter-city-wrapper {
  width: 100%;
  max-width: 300px;
  margin: 56px 0 0 6px;
  border: 1px solid #F3EFEA;
  box-sizing: border-box;
  border-radius: 2px;

  .show-or-hide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 0 24px 24px;
    border-bottom: 1px solid #F3EFEA;

    button {
      outline: none;
      padding-right: 22px;
    }
  }

  .select-wrapper {
    width: 90%;
    margin: 30px auto;
  }

  .v-text-field--outlined fieldset {
    box-shadow: unset!important;
    border: 1.6px solid #D5CDBE;
    border-radius: 2px;
  }

  .mdi-menu-down::before {
    content: unset;
  }
}
</style>
