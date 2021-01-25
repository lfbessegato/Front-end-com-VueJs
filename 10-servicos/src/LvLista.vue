<template>
  <div>
    <h4>Lista de {{ titulo }}</h4>
    <ul>
      <li v-for="item in lista" :key=item.lista>
        {{ item.nome }} de <i>{{ item.marca }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'lv-lista',
  props: {
    titulo: null,
    lista: {
      required: true,
      type: Array | Object
    }
  }
}
</script>

<style>

</style>