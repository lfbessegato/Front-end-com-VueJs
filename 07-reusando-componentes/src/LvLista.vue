<template>
  
</template>

<script>
export default {
    name:'LvLista',
    props: {
        ordena: null,
        lista: {
        required: true,
            type: Array,
            default:[]
        }
    },
    created() {
        if(typeof this.ordena != 'undefined')
            this.lista.sort()
    }

}
</script>

<style>

</style>