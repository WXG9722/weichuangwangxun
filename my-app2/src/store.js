import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: '#000',
    name: '电影',
    photos: []
  },
  mutations: {
    change(state, obj){
      state.color = obj.bgc;
      state.name = obj.name;
    },
    addPhoto(state, photo){
      state.photos = [...photo]
    }
  },
  actions: {

  }
})
