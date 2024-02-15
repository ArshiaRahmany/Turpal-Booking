<template>
  <div>
    <header>
      <header-app/>
    </header>
    <div class="home">
      <home/>
      <services/>
      <about/>
    </div>
    <footer>
      <footer-app/>
    </footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import home from "./components/home.vue";
import services from "./components/services.vue";
import about from "./components/about.vue";
import footer from "./components/footer.vue";

export default {
  name: 'App',
  components: {
     'header-app': header,  
     'home' : home,
     'services' : services,
     'about' : about,
     'footer-app' : footer,
  }
}
</script>

<style>

</style>
