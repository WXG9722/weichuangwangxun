<template>
    <div>
        <h1>count页面</h1>
        <p>{{$store.state.count}}</p>
        <button @click="$store.commit('add', 1)">add</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>