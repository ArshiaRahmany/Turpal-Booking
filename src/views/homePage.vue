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
          <search-Background/>
        </div>
        <div class="tours">
          <tour-Title/>
          <!-- <top-Tours/> -->
          <cards/>
        </div>
      </body>
    </div>
    <router-view />
  
  </template>
  
  <script>
  import header from "../components/headerApp.vue";
  import title from "../components/Home/titleApp.vue";
  import searchBackground from "../components/Home/searchBackground.vue";
  import tourTitle from "../components/Home/tourTitle.vue";
//   import topTours from "../components/Home/topTours.vue";
  import cards from "../components/Home/tourCards.vue"
  
  export default {
    name: 'App',
    components: {
       'header-app': header,  
       'title-app': title,  
       'search-Background': searchBackground,  
       'tour-Title': tourTitle,  
    //    'top-Tours': topTours, 
       'cards' : cards,
    }
  }
  </script>
  
  <style>
  
  </style>
  