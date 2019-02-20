<template>
    <div>
        <router-link to="/photo" v-if="isShow">
            <v-touch v-on:swipeleft="next" v-on:swiperight="last" class="bg" :style="{backgroundImage:'url(' + photos[iNow].src + ')'}"></v-touch>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Vue from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data() {
            return {
                iNow: this.$route.params.photoId,
                isShow: false,
            }
        },
        computed: {
            ...mapState(['photos'])
        },
        created() {
            if(this.photos.length == 0){
                this.$router.push('/photo');
            }else{
                this.isShow = true;
            }
        },
        methods: {
            next(){
                if(this.iNow == this.photos.length-1){
                    this.iNow = this.photos.length-1;
                }else{
                    this.iNow++;
                }
            },
            last(){
                if(this.iNow == 0){
                    this.iNow = 0;
                }else{
                    this.iNow--;
                }
            }
        },
    }
</script>

<style scoped>
.bg{
    position: absolute;
    top: 1rem;
    bottom: 0.8rem;
    left: 0;
    right: 0;
    background: #000 no-repeat center center;
    background-size: contain;
}
</style>