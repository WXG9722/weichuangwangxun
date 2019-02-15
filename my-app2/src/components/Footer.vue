<template>
    <div class="footer" :style="{background: color}">
        <ul>
            <li v-for="(obj, index) in menu" :key="index">
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
    export default {
        // 父组件App往Footer传值使用props接收
        props: ['menu'],
        computed: mapState(['color', 'name']),
        methods: mapMutations(['change']),
    }
</script>

<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.8rem;
    background-color: #000;
}
.footer ul{
    display: flex;
}
.footer a{
    color: #ccc;
}
.footer a.router-link-active{
    color: #fff;
}
li{
    flex-grow: 1;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.3rem;
}
</style>