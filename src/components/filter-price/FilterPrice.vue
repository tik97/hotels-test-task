<template>
  <div class="filter-price-wrapper">
    <div class="show-or-hide">
      <span class="search">Цена</span>
      <button @click="show = !show"><img src="../../../src/assets/images/arrow_up.svg" alt=""></button>
    </div>
    <div class="slider-wrapper" v-if="show">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-range-slider
              v-model="range"
              :max="scale.max"
              :min="scale.min"
              v-bind="attrs"
              v-on="on"
              @change="handleChange"
          ></v-range-slider>
        </template>
        <span>{{range[1]}}</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>

export default {
  name: 'filter-star',

  data: () => ({
    show: false,
    scale: {
      max: 5000,
      min: 1000
    },
    range: [0, 5000]
  }),


  methods: {
    handleChange () {
      this.$store.commit('setPrice', this.range[1])
    }
  }
}
</script>

<style lang="scss">
.filter-price-wrapper {
  width: 100%;
  max-width: 300px;
  margin: 30px 0 0 6px;
  border: 1px solid #F3EFEA;
  box-sizing: border-box;
  border-radius: 2px;

  .slider-wrapper {
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

  .v-application .primary {
    background-color: #FF4641!important;
  }

  .filter-price-wrapper .v-input__slot {
    border: unset!important;
  }
}
</style>
