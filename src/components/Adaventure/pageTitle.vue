<template>
    <div v-if="cardDetails">
        <h4>ADVENTURE</h4>
        <h1>{{ cardDetails.description }}</h1>
        <h5>| {{ cardDetails.name }}, {{ cardDetails.price_range }}</h5>
    </div>
</template>

<script>
import { useTourStore } from '../../store/citiesStore'

export default {
    name: 'TurpalBooking',
    data() {
        return {
            cardDetails: {}
        };
    },
    async created() {
        const store = useTourStore();
        console.log(this.$route.params.name);
        this.cardDetails = await store.getCitiesbyId(this.$route.params.name);
        console.log(this.cardDetails);
    },
    methods: {
        async fetchCardDetails() {
            try {
                const store = useTourStore();
                const cardName = this.$route.params.name;
                this.cardDetails = await store.fetchCardDetails(cardName);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
div {
    margin-inline: 5%;
    margin-top: 40px;
}

h4 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    color: #283570;
}

h1 {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    color: #283570;
}

h5 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    color: #6C7393;
}
</style>