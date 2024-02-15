<template>
    <div class="container">
        <div class="theCard">
            <div class="cover">
                <img src="" alt="">
            </div>
            <div class="txtHolder">
                <div class="aboutTour">
                    <p id="destination"> Dubai </p>
                    <p id="description"> Dubai Miracle Garden Skip-the-Line Entry Tickets</p>
                </div>
                <div id="inception">
                    from
                    <span>
                        895.00 AED
                    </span>
                </div>
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
.container {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.theCard {
    height: 448px;
    width: 262px;
    padding: 0px, 0px, 10px, 0px;
    border-radius: 10px;
    gap: 12px;
    border: 1px solid #ADB3CC;
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
#inception {
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
}</style>