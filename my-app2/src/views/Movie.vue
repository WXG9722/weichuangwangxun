<template>
    <div>
        <ul class="container">
            <li v-for="(item, index) in movieList" :key="index">
                <img :src="item.images.small" alt="">
                <div class="info">
                    <h4>{{item.title}}</h4>
                    <p>
                        <span v-for="(casts, index) in item.casts" :key="index">{{casts.name}}/</span>
                    </p>
                    <p>{{item.collect_count}}已观看</p>
                    <p>年份：{{item.year}}</p>
                    <p>
                        <span v-for="(genres, index) in item.genres" :key="index">{{genres}} </span>
                    </p>
                </div>
            </li>
        </ul>
        <img v-show="isLoading" src="@/assets/img/loading.gif" alt="" class="loading">
        <div v-show="isBottom" class="bottom">到底了！</div>
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data(){
            return {
                movieList: [],
                isLoading: false,
                isBottom: false,
            }
        },
        created() {
            this.getMovies();
            window.onscroll = ()=>{
                if(document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.offsetHeight && this.isBottom == false){
                    // 上面的公式是滚动条和顶端之间的距离 + 视窗高度 = 页面高度
                    this.getMovies()
                }
            }
        },
        methods: {
            getMovies(){
                this.isLoading = true;
                setTimeout(()=>{
                    Axios.get('/movie'+ this.movieList.length +'.json').then(res=>{
                        this.movieList = [...this.movieList, ...res.data.subjects];
                        this.isLoading = false;
                        if(this.movieList.length == 30){
                            this.isBottom = true;
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }, 1500)
            }
        },
    }
</script>

<style scoped>
.container{
    padding: 0 0.2rem;
}
li{
    padding-top: 0.2rem;
    display: flex;
    border-bottom: 0.02rem solid #000
}
li img{
    width: 1.8rem;
    float: left;
    height: 2.6rem;
}
.info{
    flex-grow: 1;
    margin-left: 0.2rem;
}
.info h4{
    font-size: 0.4rem;
    margin-bottom: 0.4rem;
}
.info p{
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
}
.loading{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 0.5rem;
    height: 0.5rem;
}
.bottom{
    font-size: 0.3rem;
}
</style>