<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/movie">电影</router-link>
            </li>
            <li>
                <router-link to="/music">音乐</router-link>
            </li>
            <li>
                <router-link to="/book">书籍</router-link>
            </li>
            <li>
                <router-link to="/picture">图片</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
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