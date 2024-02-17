<template>
    <div class="holder">
        <div class="theCard" v-for="(card, index) in cards" :key="index">
            <router-link :to="'/TourPage/' + card.id">
                <div class="cover">
                    <img :src="`${card.image}`" alt="">
                </div>
                <div class="txtHolder">
                    <div class="aboutTour">
                        <p id="destination"> {{ card.name }} </p>
                        <p id="description"> {{ card.description }}</p>
                    </div>
                    <div id="amount">
                        from
                        <span>
                            {{ card.amount }} {{ card.currency }}
                        </span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TurpalTourCards',

    data() {
        return {

        };
    },
    async created() {

    },
    watch: {
    },
    props: {
        cards: Array
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}

.holder {
    margin-bottom: 40px;
    margin-inline: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.theCard {
    height: 458px;
    width: 22%;
    padding: 0px, 0px, 10px, 0px;
    border-radius: 10px;
    gap: 12px;
    border: 1px solid #ADB3CC;
    margin-bottom: 20px;
}

.cover img {
    width: 100%;
    height: 280px;
    border-radius: 10px 10px 0px 0px;
}

.txtHolder {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-inline: 4%;
}

#destination,
#amount {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    color: #8590A4;
    margin-bottom: 0px;
}

#description,
span {
    margin-top: 0px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    color: #2B2D42;
}

#inception {
    position: relative;
    top: 40px;
}
</style>