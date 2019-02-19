import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie.vue'
import Music from './views/Music.vue'
import Book from './views/Book.vue'
import Picture from './views/Picture.vue'
import MusicList from './views/MusicList.vue'
import MovieData from './views/MovieData.vue'
import Slide from './components/Slide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },{
      path: '/music',
      name: 'music',
      component: Music
    },{
      path: '/book',
      name: 'book',
      component: Book
    },{
      path: '/picture',
      name: 'picture',
      component: Picture
    },{
      path: '/musiclist',
      name: 'musiclist',
      component: MusicList
    },{
      path: '/moviedata/:movieId',// 接收来自Movie.vue中的goDetail方法的item.id存储为movieId
      name: 'moviedata',
      component: MovieData
    },{
      path: '/slide',
      name: 'slide',
      component: Slide
    }
  ]
})
