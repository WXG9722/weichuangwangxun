import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: '#000',
    name: '电影'
  },
  mutations: {
    change(state, obj){
      state.color = obj.bgc;
      state.name = obj.name;
    }
  },
  actions: {

  }
})
