<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
      
    </v-ons-toolbar>
    <v-ons-tabbar position="bottom" swipeable 
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
 
  </v-ons-page>
</template>
<script>
import Calendario from './components/Calendario.vue'
import Favoritos from './components/Favoritos.vue'

export default {
  key: 'App',
  name: 'App',
  created() { 

  },
  data: function() { 
    return { 
      title: 'Hacktown',
      activeIndex: 0,
      tabs: [
        {
          icon: 'md-calendar',
          label: 'Calendario',
          page: Calendario,
          key: "calendarioPage"
        },
        {
          icon: 'md-favorite',
          label: 'Favoritos',
          page: Favoritos,
          key: "favoritosPage"
        },
      ]
     }
  }
}
</script>

<style>
#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
