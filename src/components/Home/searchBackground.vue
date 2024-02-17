<template>
    <div>
        <div class="container">
            <form class="searchContainer">
                <input class="icon-input" v-model="searchQuery" type="text" placeholder="&#xF002; Where are you going?">
                <button @click="filterCards">Search</button>
            </form>
        </div>
        <div>
            <tour-title/>
            <TourCards :cards="cards" />
        </div>
    </div>
</template>

<script>
import { useTourStore } from '../../store/citiesStore';
import title from './tourTitle.vue';
import TourCards from './tourCards.vue';


export default {
    name: 'TurpalSaerchBackground',

    data() {
        return {
            searchQuery: '',
            filterCard: [],
            cards: [],
        };
    },
    async created() {
        const store = useTourStore()
        await store.fetchCities();
        this.filteredCard = store.cities;
        this.cards = this.filteredCard.slice(0, 4);
        console.log(this.cards);
    },
    components: {
        'tour-title': title,
        'TourCards': TourCards,
    },
    methods: {
        filterCards() {
            const store = useTourStore();
            this.cards = store.searchCards(this.searchQuery);
        }
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 440px;
    background: url("https://s3-alpha-sig.figma.com/img/4766/5c78/439990f32f84fdc928a383f332530b8a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lsgf-BxVC9ejcvFKeftWh2vIOlRgPes1wI7UPeO9AciuZjy6SRzTAveXGKhawGEcTRAtinE4Z2npgruU1tIwb1Q3bXo2IYFSkS-uDkYikwfYDY7zLJukLprOYb3H2eV9sBLekqRPhjgSsNalyQWLruK2vMeJB1oLQLUGCKyZV6NeY7~IoKH9s2h5T4KI1SwUhJwJAmtn9jsiKx0jeFso5043yMBjUfxylfCAwSYuS~2iQjxg632o3CDTyxikKN7Ozt-x0xVQQMGAM9Qr7QsmZZgsJAZtTgL6x79WgY4H7RVGo-19Fe4~BoHIcC9A1txmtv~OQ~Xi8jvXFyrvKhX0DQ__");
    background-size: 100% 440px;
    text-align: center;
}

form {
    position: relative;
    left: 8%;
    top: 147px;
    width: 80%;
    height: 86px;
    margin: auto;
    border-radius: 40px;
    display: flex;
}

input {
    border: 1px;
    border: 1px solid #EDF2F4;
    box-shadow: 0px 1px 5px 0px #00000059;
    background: linear-gradient(0deg, #EDF2F4, #EDF2F4),
        inear-gradient(0deg, #FFFFFF, #FFFFFF);
    width: 100%;
    padding: 16px 20px 16px 20px;
    border-radius: 40px;
    border: 1px;
    outline: none;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #8590A4;
    transform: translateY(-2.45%);
}

button {
    background: #F0284D;
    width: 241.92px;
    height: 79.86px;
    border-radius: 30px;
    color: white;
    border: none;
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    cursor: pointer;
    transform: translateX(-102.5%);
}
</style>