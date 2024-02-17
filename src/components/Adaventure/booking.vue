<template>
    <center>
        <div v-if="cardDetails" class="container" :style="{ backgroundImage: `url('${cardDetails.image}')` }">
            <div class="bookingContainer">
                <div class="description">

                    <h3>From</h3>
                    <h2>
                        {{ cardDetails.amount }} {{ cardDetails.currency }}
                        <span>
                            / Per Adult
                        </span>
                    </h2>
                </div>
                <div class="bookingBtn">
                    <button>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            this tour is not avalible
        </div>
    </center>
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

<style scoped>
.container {
    padding-top: 10px;
    width: 90%;
    height: 489px;
    border-radius: 10px;
    background-size: 100% 499px;
}

.bookingContainer {
    width: 80%;
    height: 96px;
    margin-top: 20px;
    border-radius: 0px 0px 15px 15px;
    background: #F0F0F0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.bookingBtn,
.description {
    margin-block: auto;
    margin-inline: 20px;
}

h3 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #283570;
}

h2 {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #283570;
}

span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #6C7393;
}

.bookingBtn button {
    width: 257px;
    height: 56px;
    border-radius: 8px;
    background: #ADB3CC;
    color: white;
    border: none;
    cursor: pointer;
}
</style>