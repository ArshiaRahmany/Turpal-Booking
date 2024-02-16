<template>
    <center>
        <div class="container">
            <div class="firstLine">
                <div class="line"></div>
            </div>
            <div class="description">
                <h1>Overview</h1>
                <p>
                    Prior booking is required to ensure availability. Experience is subject to availability. A two-way
                    transfer is included in this package and can not be separated. Please contact our customer service for
                    further details at 800-2080. Rates are not applicable on a public holiday, including blackout days such
                    as but not limited to Easter, Valentine's Day, Iftar, EID, Christmas Day, Christmas Eve, New Year's Eve,
                    Diwali and Chinese New Year. For online redemptions, our team will contact you to confirm your chosen
                    date and time. You may also call our customer hotline 800 2080 for booking and availability.
                    Approximately 3 to 4 hours total duration including pick up and drop off.
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
export default {
    name: 'TurpalOverview',

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

<style scoped>
center{
    margin-top: 40px;
}
.container {
    width: 90%;
}
.firstLine{
    text-align: left;
    margin-bottom: 40px;
}
#secondLine{
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
.lines{
    text-align: left;
    margin-bottom: 5px;
}
.lastLine{
    margin-left: 5%;
    margin-bottom: 100px;
    text-align: left;
}
</style>