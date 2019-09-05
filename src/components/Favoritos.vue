<template id="favoritosPage">
  <v-ons-page @show="reloadFavoritos">
    <section style=" text-align:center; margin: 10px">
        <v-ons-button @click="changeDia(0,favoritos[0], 'Quinta - 05/09')">Qui - 05/09</v-ons-button>
        <v-ons-button @click="changeDia(1,favoritos[1], 'Sexta - 06/09 ')">Sex - 06/09</v-ons-button>
        <v-ons-button @click="changeDia(2,favoritos[2], 'Sábado - 07/09')">Sab - 07/09</v-ons-button>
    </section>
    <v-ons-list>
        <v-ons-list-header>{{ dia }} </v-ons-list-header>
        <v-ons-list-item v-for="(item, k) in favoritos[indexDia]" v-bind:key="k">
          <div class="center">
            <span class="list-item__title">{{palestras[Object.keys(palestras)[indexDia]][item].name}} </span>
            <span class="list-item__subtitle">{{palestras[Object.keys(palestras)[indexDia]][item].local}} - {{palestras[Object.keys(palestras)[indexDia]][item].horario}}</span>
          </div>
          <div class="right">
            <v-ons-icon class="fillRed" @click="unfavorite(k)" icon="md-favorite"> </v-ons-icon>         
          </div>
        </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import jsonPalestras from '../assets/palestras.json'
export default {
    name: 'Favoritos',
    data() { 
        return { 
            favoritos: {},
            dia:"Quinta - 05/09",
            indexDia: 0,
            palestras: jsonPalestras
        }
    },
    methods: {
        changeDia(indexDia, listItem, strDia) {
            this.dia = strDia;
            this.indexDia = indexDia;
        },
        unfavorite(index) {
            this.favoritos[this.indexDia].splice(index,1)
            localStorage.setItem("favoritos",JSON.stringify(this.favoritos));
        },
        reloadFavoritos() { 
            var  fav = localStorage.getItem("favoritos");
            this.favoritos = JSON.parse(fav);
        }
    },
    created() {
      var  fav = localStorage.getItem("favoritos");
      this.favoritos = JSON.parse(fav);
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fillRed { 
    filter: invert(10%) sepia(75%) saturate(7238%) hue-rotate(354deg) brightness(123%) contrast(87%); 
}
ons-button { 
  margin:5px;
  background-color:gray;

}
</style>
