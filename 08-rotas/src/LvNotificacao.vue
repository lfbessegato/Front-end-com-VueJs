<template>
	<div>
		<h1>Notificação</h1>
		<p v-if="msg == 'erro'">Erro ao Cadastrar Usuário</p>
		<p v-if="msg != 'erro'">Olá, {{ msg }}</p>
	</div>
</template>

<script>
export default{
	name: 'lv-notificacao',
	props: ['msg']
}
</script>