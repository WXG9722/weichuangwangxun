import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 存储值 相当于data
  state: {
    count: 0,
    num: 10
  },
  // 存储方法 相当于methods
  mutations: {
    add(state, a){
      state.count += a;
    }
  },
  // 存储计算属性 相当于computed
  getters: {
    sum(state){
      return state.count + state.num
    }
  },
  // 提交的是mutation而不是直接变更状态 但是可以包含异步操作
  actions: {
    addAction({commit}, num){
      commit('add', num);
    }
  },
});
