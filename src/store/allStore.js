import axios from "axios";

export default {
    state: {
        hotels: null,
        filteredHotels: [],
        stars: null,
        price: null,
        city: null,
        types: null,
        filters: [],
    },
    mutations: {
        setHotels (state, hotels) {
            state.hotels = hotels
            state.filteredHotels = hotels
        },

        setStars (state, stars) {
            state.stars = stars
        },

        setTypes (state, type) {
            state.types = type
        },

        setCity (state, city) {
            state.city = city
        },

        setPrice (state, price) {
            state.price = price
        },

        resetFilters (state) {
            state.stars = null
            state.price = null
            state.city = null
            state.types = null
        }
    },
    actions: {
        async getHotels ({ commit }) {
            const request = new Request('hotels.json')
            await axios(request)
                .then(res => commit('setHotels', res.data.hotels))
        }
    },
    getters: {
        starsFilter: state => state.stars,
        cityFilter: state => state.city,
        priceFilter: state => state.price,
        typeFilter: state => state.types,
        allHotels: state => state.hotels,
        filteredHotels: state => state.filteredHotels,
    }
}
