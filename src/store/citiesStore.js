import { defineStore } from "pinia";
import { getCities } from "../API/getCities";

export const useTourStore = defineStore("cities", {
  state: () => ({
    cities: [],
    filteredCities: "",
  }),
  actions: {
    async fetchCities() {
      try {
        const res = await getCities();
        this.cities = res.map((element) => ({
          id: element.id,
          name: element.name,
          image: element.image,
          description: element.description,
          duration: element.duration,
          amount: element.price.amount,
          currency: element.price.currency,
          price_range: element.price.price_range,
          highlights: element.highlights,
        }));
        return this.cities;
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
    searchCards(query) {
      try {
        if (!query) {
          this.filteredCities = this.cities;
        } else {
          this.filteredCities = this.cities.filter((city) =>
            city.name.toLowerCase().includes(query.toLowerCase())
          );
        }
        console.log( 'hi' , this.filteredCities);
        return this.filteredCities;
      } catch (error) {
        console.log(error);
      }
    },
    async getCitiesbyId(id) {
      console.log(`id: ${id}`);
      if (this.cities.length === 0) {
        await this.fetchCities();
      }
      return this.cities.filter((f) => {
        return f.id == id
      })[0];
    }
  },
});
