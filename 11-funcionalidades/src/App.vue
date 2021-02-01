<template>
  <div id="app">
    <div v-formato="'maiusculo'" v-ola>
      Meu textinho {{ $ola() }}
    </div><br>

    <div v-formato.minusculo>
      Meu textinho {{ $ola() }}
    </div><br>
    <div v-formato.maiusculo>
      Meu textinho
    </div><br>
    <div v-formato.capitalizado>
      Meu textinho
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
