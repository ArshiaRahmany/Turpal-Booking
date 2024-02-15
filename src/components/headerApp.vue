<template>
    <header>
        <nav>
            <button id="logo">
                <img src="../assets/icons/Vector (8).png" alt="Logo" class="logo">
            </button>
            <button class="btn">Experience Category</button>
            <button class="btn">CDiscover UAE</button>
            <button class="btn">About us</button>
        </nav>
        <div class="auth">
            <img src="../assets/icons/person_outline_black_24dp 3.png" alt="" v-if="!isLoggedIn" />
        </div>
    </header>
</template>

<script>
export default {
    name: 'TurpalHeaderApp',

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
header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 10px;
    box-shadow: 0px 1px 4px 0px #0000000D;
}
nav{
    display: flex;
    flex-direction: row;
    text-align: center;
    height: 50px;
}
button{
    background: none;
    border: none;
    cursor: pointer;
    padding-inline: 20px;
}
.auth{
    margin-top: 10px;
}
</style>