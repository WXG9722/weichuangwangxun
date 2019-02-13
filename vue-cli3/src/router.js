import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import A from './views/A.vue';
import B from './views/B.vue';
import Count from './views/Count.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about/:name/:age',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children: [
        {
          path: '/a',
          name: 'a',
          component: A,
        },
        {
          path: '/b',
          name: 'b',
          component: B,
        },
      ],
    },
    {
      path: '/count',
      component: Count
    }
  ],
});
