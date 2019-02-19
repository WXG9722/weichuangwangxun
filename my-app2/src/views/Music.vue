<template>
    <div>
        <img v-for="(item, index) in musicList" :key="index" :src="item.bg" :alt="item.name" @click="getMusicList">
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data() {
            return {
                musicList: [],
            }
        },
        methods: {
            getMusic(){
                Axios.get('/data/musiclist.json').then(res=>{
                    this.musicList = [...this.musicList, ...res.data.albums];
                }).catch(err=>{
                    console.log(err);
                })
            },
            getMusicList(){
                this.$router.push('/musiclist')
            }
        },
        created() {
            this.getMusic();
        },
    }
</script>

<style scoped>
img{
    width: 50%;
}
</style>