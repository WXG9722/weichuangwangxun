<template>
    <div>
        <img v-for="(item, index) in $store.state.photos" :key="index" :src="item.src" alt="" @click="goDetail(index)">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                // photo: []
            }
        },
        created() {
            axios.get('/data/photodata.json').then(res=>{
                // this.photo = [...res.data.photoData];
                this.$store.commit('addPhoto', res.data.photoData)
            }).catch(err=>{
                console.log(err);
            })
        },
        methods: {
            goDetail(index){
                this.$router.push('/photodata/' + index);
            }
        },
    }
</script>

<style scoped>
img{
    width: 50%;
}
</style>