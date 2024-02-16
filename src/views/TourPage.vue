<template>
    <div>
        <header>
            <header-app />
        </header>
        <body>
            <div class="title">
                <page-title/>
            </div>
            <div class="booking">
                <booking/>
            </div>
            <div class="overview">
                <overview/>
            </div>
        </body>
    </div>
</template>

<script>
import headerApp from '../components/headerApp.vue'
import pageTitle from '../components/Adaventure/pageTitle.vue'
import booking from '../components/Adaventure/booking.vue'
import overview from '../components/Adaventure/overview.vue'

export default {
    name: 'TurpalTourPage',

    components: {
        'header-app': headerApp,
        'page-title' : pageTitle,
        'booking' : booking,
        'overview' : overview,
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped></style>