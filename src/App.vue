<template>
  <div>
    <header>
      <header-app/>
    </header>
    <body>
      <div class="title">
        <title-app/>
      </div>
      <div class="saerch">
        <search-app/>
        <search-Background/>
      </div>
      <div class="tours">
        <tour-Title/>
        <top-Tours/>
      </div>
    </body>
  </div>
</template>

<script>
import header from "./components/headerApp.vue";
import title from "./components/titleApp.vue";
import search from "./components/searchApp.vue";
import searchBackground from "./components/searchBackground.vue";
import tourTitle from "./components/tourTitle.vue";
import topTours from "./components/topTours.vue";

export default {
  name: 'App',
  components: {
     'header-app': header,  
     'title-app': title,  
     'search-app': search,  
     'search-Background': searchBackground,  
     'tour-Title': tourTitle,  
     'top-Tours': topTours,  
  }
}
</script>

<style>

</style>
