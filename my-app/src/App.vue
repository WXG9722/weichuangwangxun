<template>
  <div id="app">
    <c-header></c-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <c-footer></c-footer>
  </div>
</template>
<script>
import CHeader from '@/components/CHeader.vue'
import CFooter from '@/components/CFooter.vue'

export default {
  components: {
    CHeader,
    CFooter
  }
}
</script>
<style>
.content{
  margin: 0.8rem 0;
}
</style>
