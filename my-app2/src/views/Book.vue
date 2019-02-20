<template>
    <div>
        <!-- <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe> -->
        <slide :images="images" ></slide>
    </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import Slide from '@/components/Slide.vue'

// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
      data() {
        return {
          images:[
                  "https://img3.doubanio.com/lpic/s24468373.jpg",
                  "https://img3.doubanio.com/lpic/s27102925.jpg",
                  "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
        }
      },
        components: {
            Swipe,
            SwipeItem,
            Slide
        }
    }
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>