<template>
    <div>
        <aplayer autoplay :music="list[0]" :list="list" v-if="isShow" showLrc/>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios'
    export default {
        data() {
            return {
                list: [],
                isShow: false,
            }
        },
        components:{
            Aplayer,
        },
        created() {
            Axios.get('/data/musicdata.json').then(res=>{
                res.data.musicData.forEach(element => {
                    let obj = {
                        title: element.title,
                        artist: element.author,
                        src: element.src,
                        pic: element.musicImgSrc,
                        lrc: `http://localhost:8080/${element.lrc}`
                    };
                    this.list.push(obj);
                    this.isShow = true;
                });
            }).catch(err=>{
                console.log(err)
            })
        },
    }
</script>

<style scoped>

</style>