<template>
  <div id="app">
    <!-- Exibindo o total -->
    <p>{{ total }}</p>

    <button @click="calcula('-')"> - </button>
    <button @click="calcula('+')"> + </button>

    <!-- Exibe nome normal e nome com filtro formatado -->
    <hr>
    <p>Nome Iniciado: {{ nome }}</p>
    <p>Nome Filtrado: {{ nome | formataNome }} </p>

    <!-- Exibe o nome depois de passar pela propriedade computada, alé mde ter o input do nome -->
    <hr>
    <p>Nome Computado: {{ nomeFormatado }}</p>
    <label>Input a computar</label>
    <input v-model="nome" type="text">

    <!-- Formulário de busca para observadores -->
    <hr>
    <input v-model="busca" type="text">
    <p v-text="resultado"></p>

  </div>
</template>

<script>
export default {
  name: 'app',
  // Inicia as variaveis usadas
  data () {
    return {
      total: 10,
      nome: 'jose antonio',
      resultado: '',
      busca: ''
    }
  },

  watch: {
    // observa a variavel busca, mudando o resultado e executando o metodo de recolher
    busca: function (novoValor, valorAntigo) {
      this.resultado = 'Aguardando termino da digitação..'
      this.recolheResposta()
    }
  },

  methods: {
     // se sinal for - então subtrai se nao soma, tudo no total
    calcula( sinal ) {
      this.total = (sinal == '-')
        ? this.total - 1
        : this.total + 1
    },

    // espera meio segundo, caso o texto ainda não mudou muda o resultado
    recolheResposta() {
      let valor = this.busca
      setTimeout( () => {
        if(valor == this.busca)
          this.resultado = 'Terminou de digitar..'
      }, 500)
    }
  }, 
  
  filters: {
    // alem de printar no console, coloca tudo em minusculo, corta no espaço e então pega cada palavra passando a primeira letra para maiusculo
    formataNome( valor ) {
      console.log('executando filter')

      valor = valor.toLowerCase()

      let corta = valor.split(' ')
      let resultado = ''

      for (let nome of corta)
        resultado += nome.charAt(0).toUpperCase() + nome.slice(1) + ' '
      return  resultado
    }
  },
  computed: {
    // passa todo o nome para maiusculo, para mudar o valor, pega somente os 4 primeiros caracteres
    nomeFormatado: {
      get: function () {
        console.log('executando computed')
        return this.nome.toUpperCase()
      },
      set function (novoValor) {
        this.nome = novoValor.substring(0, 3)
      }
    }
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
