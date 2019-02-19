<template>
    <div>
        <div class="detail" v-if="isShow">
            <h1>{{movieData.title}}</h1>
            <img :src="movieData.images.small" alt="">
            <div class="info">
                <h4>豆瓣评分:{{movieData.rating.average}}</h4>
                <p>导演:
                    <span v-for="(directors, index) in movieData.directors" :key="index">{{directors.name}}</span>
                </p>
                <p>主演:
                    <span v-for="(casts, index) in movieData.casts" :key="index">{{casts.name}}/</span>
                </p>
                <p>类型:
                    <span v-for="(genres, index) in movieData.genres" :key="index">{{genres}}/</span>
                </p>
                <p>制片国家/地区:
                    <span v-for="(countries, index) in movieData.countries" :key="index">{{countries}}/</span>
                </p>
                <p>年份:{{movieData.year}}</p>
                <p>又名:
                    <span v-for="(aka, index) in movieData.aka" :key="index">{{aka}}/</span>
                </p>
                </div>
            <div id="summary">
                <p>剧情摘要:</p>
                {{movieData.summary}}
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data(){
            return {
                movieData: {},
                isShow: false,
            }
        },
        created() {
            Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/' + this.$route.params.movieId)
            .then(res=>{
                this.movieData = res.data;
                this.isShow = true;
            }).catch(err=>{
                console.log(err);
            })
        },
    }
</script>

<style scoped>
h1{
    font-size: 0.4rem;
    font-weight: 600;
    padding: 0.1rem; 
}
img{
    width: 2.5rem;
    float: left;
}
h4{
    font-size: 0.35rem;
    padding-bottom: 0.4rem;
}
p{
    color: #666666;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.26rem;
    margin-bottom: 0.2rem;
}
span{
    font-family: Helvetica,Arial,sans-serif;
    color: #111;
    font-size: 0.26rem;
}
#summary{
    margin-top: 0.3rem;
    font-size: 0.28rem;
    line-height: 0.5rem;
}
#summary p{
    color: #000;
    font-size: 0.4rem;
}
</style>