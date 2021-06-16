<template>
  <div class="hotels-wrapper">
    <div v-if="filteredHotels">
      <div v-for="(hotel, i) in filteredHotels" :key="i" class="filtered">
        <div class="right-section">
          <img v-if="images[i]" :src="images[i].icon" alt="hotel picture">
          <div><span class="address">{{ hotel.address }}</span>
            <p class="name">{{ hotel.name }}</p>
            <div class="rating">
              <v-rating
                  color="#FFD037"
                  hover
                  length="5"
                  size="15"
                  :value="Number(hotel.stars)"
              ></v-rating>
              <span class="stars">{{ hotel.stars }} звезды</span>
              <div class="type">{{ hotel.type }}</div></div>
            <p class="description">{{ hotel.description }}</p>
          </div>
        </div>
        <div class="left-section">
          <div v-if="+hotel.rating" >
            <div class="info-hotel">
              <div class="header">
                <img src="../../src/assets/images/star.svg" alt="star">
                <span class="rating-text">. Хорошо</span>
                <span class="reviews"> . {{ hotel.reviews_amount }} отзывов</span>
              </div>
              <div class="last-review">"{{ hotel.last_review }}"</div>
            </div>
          </div>
          <div v-else>
            <div class="header">
              <img src="../../src/assets/images/not_rating.svg" alt="not rating">
              <span class="not-rating-text">Нет оценок.</span>
            </div>
          </div>
          <div class="price">
            <span>от {{hotel.min_price}} q</span>
            <button class="price-btn">Забронировать</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Записей не найдено</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'hotels',

  data: () => ({
    city: null,
    images: [
      {  icon: require('@/assets/images/back1.png') },
      {  icon: require('@/assets/images/back2.png') },
      {  icon: require('@/assets/images/back3.png') },
      {  icon: require('@/assets/images/back4.png') },
      {  icon: require('@/assets/images/back4.png') },
    ],
  }),

  async mounted() {
    await this.getHotels()
  },

  computed: {
    ...mapGetters(['allHotels', 'cityFilter', 'priceFilter', 'typeFilter', 'starsFilter']),

    filteredHotels() {
      let all = this.allHotels
      let filtered = []

      if (this.starsFilter?.length > 0) {
        let filtereds = []
        this.starsFilter.forEach(star => {
          let singleStar = all.filter(data => +data.stars === star )
          filtereds.push(...singleStar)
        })

        filtered = filtered?.length ? filtered.filter(fill => filtereds.includes(fill)) : filtereds
        if(filtered.length === 0) return []
      }

      if(this.cityFilter) {
        let filter = all.filter(data => data.country === this.cityFilter)
        filtered = filtered.length ? filtered.filter(fill => filter.includes(fill)) : filter
        if(filtered.length === 0) return []
      }

      if(this.typeFilter) {
        let filtereds = []
        this.typeFilter.forEach(type => {
          let a = all.filter(data => data.type === type )
          filtereds.push(...a)
        })

        filtered = filtered?.length ? filtered.filter(fill => filtereds.includes(fill)) : filtereds
        if(filtered.length === 0) return []
      }

      if(this.priceFilter) {
        let fill = all.filter(data => data.price === this.priceFilter)
        filtered = filtered.length ? filtered.filter(fill => fill.includes(fill)) : fill
        if(filtered.length === 0) return []
      }
      return filtered.length ? filtered : all
    }
  },


  methods: {
    ...mapActions(['getHotels']),
    getImgUrl(pic) {
      return require(pic)
    }
  }
}
</script>


<style lang="scss">
.hotels-wrapper {
  margin: 56px 21px;

  .description {
    width: 100%;
    max-width: 384px;
    font-family: "KievitPro";
  }

  .name {
    font-family: "KievitPro";
    font-size: 21px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #000000;
  }

  .stars {
    margin-left: 8px;
    font-weight: 500;
    font-family: "KievitPro";
    font-size: 13px;
    line-height: 17px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #212121;
  }

  .address {
    font-family: "KievitPro";
    font-size: 13px;
    line-height: 17px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #515151;
  }

  .type {
    font-family: "KievitPro";
    margin-left: 8px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 0 8px 0 7px;
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .description {
    font-family: "KievitPro";
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
  }

  .last-review {
    margin-top: 18px;
    font-family: "KievitPro";
    font-size: 13px;
    line-height: 17px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #515151;
  }

  .filtered {
    display: flex;
    border-bottom: 1px solid #F3EFEA;
    margin-bottom: 33px;
    padding-bottom: 33px;

    .right-section {
      display: flex;
      margin-right: 13px;

      img {
        margin-right: 23px;
      }
    }

    .info-hotel {
      width: 248px;
      background: #F9F7F2;
      padding: 25px 34px;
    }

    .header {
      display: flex;
      align-items: center;
    }

    .rating-text, .not-rating-text {
      margin-left: 5px;
    }

    .not-rating-text {
      font-family: "KievitPro";
      font-size: 14px;
      line-height: 17px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #959595;
    }

    .rating-text, .reviews {
      font-family: "KievitPro";
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #000000;
    }

    .price-btn {
      font-family: "KievitPro";
      outline: none;
      border: none;
      margin-left: 11px;
      padding: 15px;
      background-color: #FF4641;
      border-radius: 2px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #FFFFFF;
    }

    .price {
      margin-top: 20px;
    }
  }
}
</style>
