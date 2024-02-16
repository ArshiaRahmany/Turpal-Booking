<!-- <template>
    <div>
        <card-component v-for="(card , index) in cards" :key="index" :index="index"/>
    </div>
</template>

<script>
import cards from './tourCards.vue'
import { useTourStore } from '../../store/citiesStore'

export default {
    name: 'TurpalTopTours',

    components: {
        'card-component': cards
    },
    data() {
        return {
            cards: [],
        };
    },

    async created() {
        const store = useTourStore()
        this.cards = await store.fetchCities()
        console.log(this.cards);
    },

    mounted() {

    },

    methods: {

    },
}
</script>

<style lang="scss" scoped></style> -->