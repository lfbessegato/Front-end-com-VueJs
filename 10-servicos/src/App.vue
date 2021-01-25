<template>
  <div id="app">
    <lv-lista Titulo="Carros" :lista="carros"></lv-lista>
    <lv-lista Titulo="Aviões" :lista="avioes"></lv-lista>
  </div>
</template>

<script>

import Carro from './servicos/carros'
import Aviao from './servicos/avioes'
import LvLista from './LvLista'

export default {
  name: 'app',
  data() { return { carros: {}, avioes: {} }},
  components: {LvLista},
  mounted() {
    Carro.lista().then(dado => this.carros = dado.data)
    Aviao.lista().then(dado => this.avioes = dado.data) 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
