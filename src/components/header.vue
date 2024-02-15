<template>
<header>
  <div class="bg-black text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex space-x-6">
        <a href="#" class="text-white hover:text-gray-300">Home</a>
        <a href="#" class="text-white hover:text-gray-300">About</a>
        <a href="#" class="text-white hover:text-gray-300">Services</a>
        <a href="#" class="text-white hover:text-gray-300">Contact</a>
      </div>
      <!-- Search input -->
      <div class="flex items-center">
  <input type="text" placeholder="Search" class="rounded-full border border-white py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
  <button href="https://google.com"
    class="bg-black hover:text-gray-300 text-white border border-white rounded-full px-4 py-2 ml-2">Search</button>
</div>
    </div>
  </div>
</header>

</template>

<script>
export default {
  name: 'TurpalHeader',

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

<style lang="scss" scoped></style>
