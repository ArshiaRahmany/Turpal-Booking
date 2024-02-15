<template>
    <footer class="bg-black text-white py-8">
        <div class="container mx-auto flex justify-between items-center">

            <div class="flex flex-col space-y-4">
                <p class="text-gray-300">Connect with us:</p>
                <div class="flex space-x-4">
                    <a href="#" class="text-white hover:text-gray-300">Facebook</a>
                    <a href="#" class="text-white hover:text-gray-300">Twitter</a>
                    <a href="#" class="text-white hover:text-gray-300">Instagram</a>
                </div>
            </div>

            <div>
                <p class="text-gray-300">Explore our diverse range of tours and experiences.</p>
                <p class="text-gray-300">Find your next adventure with us!</p>

            </div>

            <div class="hidden md:flex flex-col space-y-4">
                <p class="text-gray-300">Join our newsletter for exclusive offers!</p>
                <input v-model="email" type="email" placeholder="Enter your email"
                    class="rounded-full border border-white py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            </div>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: 'TurpalFooter',
    data() {
        return {

        }
    }
};
</script>
  
  