import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//importando componentes/paginas
import Inicial from './LvInicial.vue'
import Usuarios from './LvUsuarios.vue'
import NovoUsuario from './LvNovoUsuario.vue'
import Notificacao from './LvNotificacao.vue'

 // registra router
 Vue.use ( VueRouter ) 

//Iniciando as rotas
const router = new VueRouter({
  mode: 'history',
  routes: [
    // path é o caminho da url da rota, component é qual pagina a exibir
    {path: '/',         component: Inicial},
    {path: '/usuarios', component: Usuarios,
      children: [
       {path: 'novo', component: NovoUsuario},
       {path: ':msg', component: Notificacao, props: true},
      ]
    },
  ],
})

new Vue({
  el: '#app',
  router,  // registra rotas
  render: h => h(App)
})
