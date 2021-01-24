<template>
  <ul>
      <li v-for="tarefa in tarefas" :key=tarefa.tarefas>
          <lv-del-tarefa :tarefa="tarefa"></lv-del-tarefa>
          {{ tarefa }}
      </li>
  </ul>

</template>

<script>
import {mapGetters} from 'vuex'
import LvDelTarefa from './LvDelTarefa.vue'

export default {
  components: { LvDelTarefa },
  computed: {
		...mapGetters({
			tarefas: 'listaTarefas'
		})
	}

}
</script>

<style>

</style>
