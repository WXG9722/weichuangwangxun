<template>
  <div id="app">
    <!-- 父组件App向Header传值 使用下面的方式传递data中的headerColor -->
    <Header :obj="obj"></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 父组件App向Footer传值 使用下面的方式传递data中的menu -->
    <!-- 父组件接收子组件Footer传来的footerColor 这里的@change与子组件$emit中触发的事件名称一致 同时触发color函数 传入参数footerColor -->
    <Footer :menu="menu" @change="color"></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
import mock from '@/mock/mock.js'

export default {
  data(){
    return {
      menu: [
        {
          path: '/movie',
          name: '电影',
          bgc: '#000'
        },{
          path: '/music',
          name: '音乐',
          bgc: 'green'
        },{
          path: '/book',
          name: '书籍',
          bgc: 'pink'
        },{
          path: '/picture',
          name: '图片',
          bgc: 'orange'
        }
      ],
      // data中定义一个headerColor存储子组件传来的footerColor
      obj: {
        path: '/movie',
        name: '电影',
        bgc: '#000'
      },
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    color(obj){
      // 定义一个形参来接收子组件Footer传来的footerColor（这里使用了相同的名称 但实际上是形参） 下一步是把它传入做组件Header中 
      this.obj = {...obj};// 给data中的headerColor赋值
    },
  },
  created(){
    // 优化 为了刷新时Header的字与当前地址的path匹配 需要给obj赋一个初值 这个初值来自与当前地址匹配的path
    if(this.$route.path !== '/'){
      let result = this.menu.filter((objOfMenu, index)=>{
        return objOfMenu.path == this.$route.path
      })
      this.obj = result[0];// result是一个数组 filter返回的是数组
    }

    axios.get('a')
    .then(res=>{
      console.log(res)
    }).catch(err=>{

    })
  },
}
</script>
<style>
.content{
  margin: 0.8rem 0;
}
</style>
