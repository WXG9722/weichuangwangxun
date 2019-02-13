<template>
    <div>
        <h1>count页面</h1>
        <!-- <p>{{$store.state.count}}</p> -->
        <p>{{count}}</p>
        <p>{{num}}</p>
        <p>两个数的和：{{sum}}</p>
        <button @click="add(2)">add</button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapState(['count', 'num']),
            ...mapGetters(['sum'])
        },
        methods: mapMutations(['add'])
    }
</script>

<style scoped>

</style>