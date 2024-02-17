<template>
    <center>
        <div v-if="cardDetails" class="container">
            <div class="firstLine">
                <div class="line"></div>
            </div>
            <div class="description">
                <h1>Overview</h1>
                <p>
                    {{ cardDetails.description }}
                </p>
            </div>
        </div>
        <div class="lines">
            <div class="line" id="secondLine"></div>
            <div class="line"></div>
        </div>
        <div class="container">
            <div class="firstLine">
                <div class="line"></div>
            </div>
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
center {
    margin-top: 40px;
}

.container {
    width: 90%;
}

.firstLine {
    text-align: left;
    margin-bottom: 40px;
}

#secondLine {
    margin-block: 40px;
}

.line {
    width: 46%;
    border: 1px solid #EAECF7;
    margin-top: 4px;
}

h1 {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #283570;
}

p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #283570;
}

.lines {
    text-align: left;
    margin-bottom: 5px;
}

.lastLine {
    margin-left: 5%;
    margin-bottom: 100px;
    text-align: left;
}</style>