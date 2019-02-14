<template>
    <div class="footer">
        <ul>
            <li>电影</li>
            <li>音乐</li>
            <li>书籍</li>
            <li>图片</li>
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
li{
    flex-grow: 1;
    color: #fff;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.3rem;
}
</style>