<template>
  <div id="app">
    <h4>Lista um</h4>
    <lv-lista :lista="['feijão','arroz','carne']"></lv-lista>
    <br>
    <lv-lista :lista="['feijão','arroz','carne']"></lv-lista>
    <br>

    <h4>Lista dois</h4>
    <lv-lista :lista="['leite','biscoito','bombom','aveia']" ordena></lv-lista>
    <br>
    <lv-lista :lista="['leite','biscoito','bombom','aveia']" ></lv-lista>

    <lv-cartao titulo="Preço">
      Aqui você encontra preços <strong>baixos</strong>
     
      <div slot="rodape">
        Meu conteúdo do Rodapé
      </div>
    </lv-cartao>
    <lv-cartao titulo="Qualidade">
      Temos is produtos com mais <strong>qualidade</strong> no mercado
     
      <div slot="rodape"></div>
    </lv-cartao>

    <!-- chama o leitor do artigo e os comentarios -->
    <br><hr>
    <lv-leitor ></lv-leitor>
    <lv-comentarios></lv-comentarios>

     <lv-usuario nome="Filomena" @novaMsg="escrever"></lv-usuario>
     <lv-usuario nome="Amarildo" @novaMsg="escrever"></lv-usuario>
     <br>
     <div v-html="chat"></div>
  </div>
</template>

<script>
import LvCartao from './LvCartao.vue'
import LvLista from './LvLista.vue'
import LvLeitor from './LvLeitor.vue'
import LvComentarios from './LvComentarios.vue'
import LvUsuario from './LvUsuario.vue'

export default {
  components: { LvLista, LvCartao, LvLeitor, LvComentarios, LvUsuario },
  data() { return { chat: ''} },
  methods: {
    escrever(mensagem) {
      this.chat = mensagem + '<hr>' + this.chat
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
