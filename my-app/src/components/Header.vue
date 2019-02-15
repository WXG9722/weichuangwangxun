<template>
    <div>
        <header :style="{background: obj.bgc}">
            <span class="home">首页</span>
            {{obj.name}}
        </header>
    </div>
</template>

<script>
    export default {
        // 子组件接收来自父组件App的传来的headerColor 并在在标签中使用 完成了子组件到子组件的传值
        props: ['obj'],
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