<template>
    <div>
        <card-component />
    </div>
</template>

<script>
import cards from './tourCards.vue'

export default {
    name: 'TurpalTopTours',

    components: {
        'card-component': cards
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
}
</script>

<style lang="scss" scoped></style>