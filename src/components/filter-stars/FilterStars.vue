<template>
  <div class="filter-stars-wrapper">
    <div class="show-or-hide">
      <span class="search">Звезды</span>
      <button @click="show = !show"><img src="../../../src/assets/images/arrow_up.svg" alt=""></button>
    </div>
    <div class="checkboxes-wrapper" v-if="show">
      <v-checkbox
                  v-for="(star) in stars"
                  v-model="checked.star"
                  :key="star.rate"
                  :label="star.label"
                  color="red"
                  :value="star.rate"
                  hide-details
                  @change="handleChange"
              ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter-star',

  data: () => ({
    show: false,
    empty: null,
    stars: [
      {rate: 0, label: 'Без звезд', value: false},
      {rate: 1, label: '1 звезда', value: false},
      {rate: 2, label: '2 звезды', value: false},
      {rate: 3, label: '3 звезды', value: false},
      {rate: 4, label: '4 звезды', value: false},
      {rate: 5, label: '5 звезд', value: false},
    ],
    checked: {
      star: []
    }
  }),

  methods: {
    handleChange () {
      this.$store.commit('setStars', this.checked.star)
    }
  }
}
</script>

<style scoped lang="scss">
.filter-stars-wrapper {
  width: 100%;
  max-width: 300px;
  margin: 56px 0 0 6px;
  border: 1px solid #F3EFEA;
  box-sizing: border-box;
  border-radius: 2px;

  .checkboxes-wrapper {
    width: 90%;
    margin: 30px auto;
  }

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

  .v-input__slot {
    box-shadow: unset!important;
    border: 1.6px solid #D5CDBE;
    border-radius: 2px;
  }

  .mdi-menu-down::before {
    content: unset;
  }
}
</style>
