<template id="calendarioPage">
  <v-ons-page @show="reloadFavoritos">  
    <section style=" text-align:center; margin: 10px">
        <v-ons-button @click="changeDia(0,palestra.dia05, 'Quinta - 05/09')">Qui - 05/09</v-ons-button>
        <v-ons-button @click="changeDia(1,palestra.dia06, 'Sexta - 06/09 ')">Sex - 06/09</v-ons-button>
        <v-ons-button @click="changeDia(2,palestra.dia07, 'Sábado - 07/09')">Sab - 07/09</v-ons-button>
    </section>
    <v-ons-list>
      
        <v-ons-list-header>{{ dia }} </v-ons-list-header>
        <v-ons-list-item v-for="(item, k) in itens" v-bind:key="k">
          <div class="center">
            <span class="list-item__title" @click="$ons.notification.alert(item.descricao)">{{item.name}} </span>
            <span class="list-item__subtitle">{{item.local}} - {{item.horario}}</span>
          </div>
          <div class="right">
            <v-ons-icon @click="makeFavorite(k)" v-bind:class="[favoritos[indexDia].indexOf(k) >= 0 ? 'fillRed': '']" icon="md-favorite" style="margin-right:20px;"> </v-ons-icon>         
          </div>
        </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import palestras from '../assets/palestras.json'

export default {
  name: 'Calendario',
  props:['palestras'],
  data() { 
    return { 
      dia:"Quinta - 05/09",
      indexDia: 0,
      itens: palestras.dia05,
      palestra: palestras,
      favoritos: { 0:[], 1:[], 2:[]}
    }
  },
  created() {
    if (localStorage.hasOwnProperty("favoritos")) { 
      var  fav = localStorage.getItem("favoritos");
      this.favoritos = JSON.parse(fav);
    }
    else  { 
      localStorage.setItem("favoritos", JSON.stringify({ 0:[], 1:[], 2:[]}))
    }
  }, 
  methods: {
    reloadFavoritos() { 
        var  fav = localStorage.getItem("favoritos");
        this.favoritos = JSON.parse(fav);
    },
    changeDia(indexDia, listItem, strDia) { 
      this.dia = strDia;
      this.indexDia = indexDia;
      this.itens = listItem;
    },
    makeFavorite(index) {
      var checkIndex = this.favoritos[this.indexDia].indexOf(index);
      if (checkIndex >= 0) { 
        this.favoritos[this.indexDia].splice(checkIndex,1)
      }
      else { 
        var iDia = this.indexDia;
        this.favoritos[iDia].push(index);
      }
      localStorage.setItem("favoritos",JSON.stringify(this.favoritos));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fillRed { 
    filter: invert(10%) sepia(75%) saturate(7238%) hue-rotate(354deg) brightness(123%) contrast(87%); 
}
ons-list-header { 
  font-weight:bold;
  font-size:18px;

}
ons-button { 
  margin:5px;
  background-color:gray;

}
</style>

