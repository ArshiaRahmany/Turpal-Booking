<template>
  <div class="overflow-hidden bg-white py-8 px-4">
    <div class="flex flex-wrap -mx-4">
      <div v-for="(service, index) in visibleServices" :key="index" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <div class="border rounded-lg overflow-hidden">
          <img :src="service.image" alt="Service Image" class="w-full h-32 object-cover">
          <div class="p-4">
            <h2 class="text-lg font-semibold">{{ service.title }}</h2>
            <p class="text-gray-500">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <router-link to="/services" class="inline-block  bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300 ease-in-out ">
        Show More
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelServices',
  data() {
    return {
      services: [
        { 
          id: 1,
          title: 'Service 1', 
          description: 'Description of service 1', 
          image: 'https://via.placeholder.com/300' 
        },
        { 
          id: 2,
          title: 'Service 2', 
          description: 'Description of service 2', 
          image: 'https://via.placeholder.com/300' 
        },
        { 
          id: 3,
          title: 'Service 3', 
          description: 'Description of service 3', 
          image: 'https://via.placeholder.com/300' 
        },
      ],
    };
  },
  computed: {
    visibleServices() {
      return this.services.slice(0, 3);
    },
  },
};
</script>

<style scoped>
</style>
