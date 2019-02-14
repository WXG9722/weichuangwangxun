<template>
    <div>
        <h1>count页面</h1>
        <!-- <p>{{$store.state.count}}</p> -->
        <p>{{count}}</p>
        <p>{{num}}</p>
        <p>两个数的和：{{sum}}</p>
        <button @click="add(3)">add 3</button>
        <button @click="addAction(2)">add 2</button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapState(['count', 'num']),
            ...mapGetters(['sum'])
        },
        methods: {
            ...mapMutations(['add']),
            ...mapActions(['addAction'])
        }
    }
</script>

<style scoped>

</style>