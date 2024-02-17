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
      </body>
    </div>
    <router-view />
  
  </template>
  
  <script>
  import header from "../components/headerApp.vue";
  import title from "../components/Home/titleApp.vue";
  import searchBackground from "../components/Home/searchBackground.vue";
  
  export default {
    name: 'App',
    components: {
       'header-app': header,  
       'title-app': title,  
       'search-Background': searchBackground,  

    }
  }
  </script>
  
  <style>
  
  </style>
  