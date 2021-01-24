<template>
  <div>
		<label>Buscar por</label>
		<input type="text" v-model="termo" >
		<ul>
			<li v-for="tarefa in resultado(termo)" :key=tarefa.tarefas>{{ tarefa }}</li >
		</ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'lv-busca',
    data() { return { termo: ''} },
    computed: {
		...mapGetters({
			resultado: 'buscaTarefas'
		})
	},
}
</script>

<style>

</style>