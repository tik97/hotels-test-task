<template>
  <div class="filter-type-wrapper">
    <div class="show-or-hide">
      <span class="search">Тип</span>
      <button @click="show = !show"><img src="../../../src/assets/images/arrow_up.svg" alt=""></button>
    </div>
    <div class="buttons-wrapper" v-if="show">
      <v-btn
          elevation="2"
          @click="handleChange('Отель')"
      >Отели</v-btn>
      <v-btn
          elevation="2"
          @click="handleChange('Апартаменты')"
      >Апартаменты</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter-city',

  data: () => ({
    show: false,
    types: []
  }),

  methods: {
    handleChange (type) {
      if (!this.types.includes(type)) {
        this.types.push(type);
      } else {
        const index = this.types.indexOf(type)
        this.types.splice(index, 1)
      }

      this.$store.commit('setTypes', this.types)
    }
  }
}
</script>

<style lang="scss">
.filter-type-wrapper {
  width: 100%;
  max-width: 300px;
  margin: 30px 0 0 6px;
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

  .buttons-wrapper {
    width: 90%;
    margin: 30px auto;
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
