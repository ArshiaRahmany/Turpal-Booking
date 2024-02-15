<template>
    <body class="bg-gray-100">
        <div class="relative h-screen">
            <div class="absolute inset-0 z-10 flex items-center justify-end mr-40">
                <button href="https://google.com"
                    class="text-white border border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black cursor-pointer transition duration-300 ease-in-out"
                    style="font-size: 1.5em;">GET STARTED</button>
            </div>

            <div class="absolute inset-0 header-bg"></div>
            <div class="relative mr-80 flex flex-col items-center justify-center h-full">
                <div class="text-left mr-20">
                    <h1 class="text-5xl font-bold text-white w-100 text-left mr-20">More Bookings,</h1>
                    <h1 class="text-5xl font-bold text-white w-100 text-left mr-20">Happier Customers.</h1>
                    <p class="mt-4 text-xl text-white text-left mr-20">The world’s most advanced reservation system for
                        tours,</p>
                    <p class="mt-4 text-xl text-white text-left mr-20">experiences and attractions</p>
                </div>
            </div>
        </div>
    </body>
</template>
  
  
<script>
export default {
    name: 'TurpalHelloWorld',
    data() {
        return {};
    },
    mounted() { },
    methods: {},
};
</script>
  
<style>
.header-bg {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
        url('../assets/images/6409fed7adddcbc5a327207e_Vertical LPs Final Dimensions Hero Images (16).png');
    background-size: cover;
    background-position: center;
}
</style>