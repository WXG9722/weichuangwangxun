<template>
  <div id="app">
    <!-- 父组件App向Header传值 使用下面的方式传递data中的headerColor -->
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 父组件App向Footer传值 使用下面的方式传递data中的menu -->
    <!-- 父组件接收子组件Footer传来的footerColor 这里的@change与子组件$emit中触发的事件名称一致 同时触发color函数 传入参数footerColor -->
    <Footer :menu="menu"></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {mapMutations} from 'vuex'

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
    }
  },
  components: {
    Header,
    Footer
  },
  methods: mapMutations(['change']),
  created() {
    let result = this.menu.filter((obj, index)=>{
      return obj.path == this.$route.path;
    })
    if(result.length){
      this.change(result[0]);
    }
  },
}
</script>
<style>
.content{
  margin: 0.8rem 0;
}
</style>
