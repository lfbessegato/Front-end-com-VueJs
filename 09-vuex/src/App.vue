<template>
  <div id="app">
    <lvAddTarefa></lvAddTarefa>
    <lv-tarefas></lv-tarefas>

    <hr>
    <lv-busca></lv-busca>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import LvAddTarefa from './AddTarefa.vue'
import LvTarefas from './LvTarefas'
import LvBusca from './LvBusca.vue'

export default {
  name: 'app',
  components: { LvAddTarefa, LvTarefas, LvBusca },
  computed: {
      ...mapState([
          'nome'
      ])
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
