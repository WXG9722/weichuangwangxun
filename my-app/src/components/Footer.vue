<template>
    <div class="footer" :style="{background: footerColor}">
        <ul>
            <li v-for="(obj, index) in menu" :key="index">
                <!-- 特殊标签绑定点击事件后面加.native -->
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        // 父组件App往Footer传值使用props接收
        props: ['menu'],
        data(){
            return {
                footerColor: '',
            }
        },
        methods: {
            change(obj){
                this.footerColor = obj.bgc;
                // 为了让header的颜色保持一致 需要把footerColor传到父组件App 再将这个值传入子组件Header中
                // 方法：$emit('事件', 参数)
                // change表示父组件的事件 而不是子组件的change函数 这里只是名称相同 footerColor是要传入的参数
                this.$emit('change', obj);
            }
        },
        created(){
            // 在非主页地址刷新时 Footer的颜色还是默认的颜色 需要优化
            // 优化 为了刷新时Footer的颜色可以匹配上 需要给footerColor一个初值 这个初值来自与当前地址匹配的bgc
            if(this.$route.path !== '/'){
                let result = this.menu.filter((objOfMenu, index)=>{
                    return objOfMenu.path == this.$route.path;
                })
                this.footerColor = result[0].bgc;// 由于filter返回的是一个新数组 所以取值用此种方法
            }
        },
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