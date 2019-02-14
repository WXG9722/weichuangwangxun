<template>
    <div>
        <header>
            <span class="home">首页</span>
            电影
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
header{
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 0.4rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.home{
    font-size: 0.3rem;
    position: absolute;
    left: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
}
</style>