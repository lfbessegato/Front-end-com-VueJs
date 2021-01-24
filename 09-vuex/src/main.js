import Vue from 'vue'
import App from './App.vue'

// importar a loja
import loja from './loja/raiz'

new Vue({
  store: loja,
  el: '#app',
  render: h => h(App)
})
