import { defineStore } from 'pinia';
import { getCities } from '../API/getCities';

export const useTourStore = defineStore('cities', {
  state: () => ({
    cities: [],
  }),
  actions: {
    async fetchCities() {
      try {
        const res = await getCities();
        this.cities = res.map((element) => ({
            id : element.id,
            name : element.name,
            image : element.image,
            description : element.description,
            duration : element.duration,
            amount : element.price.amount,
            currency : element.price.currency,
            price_range : element.price.price_range,
            highlights : element.highlights,
        }));
        return this.cities;
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },
  },
});
