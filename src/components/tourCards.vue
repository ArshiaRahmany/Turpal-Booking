<template>
    <div>
        <div class="theCard">
            <div class="cover">
                <img src="" alt="">
            </div>
            <div class="aboutTour">
                <p> {{ location }} </p>
                <p class="description"> {{ descriptions }} </p>
            </div>
            <div class="date">
                {{ date }}
            </div>
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

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>