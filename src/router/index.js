import Vue from 'vue'
import VueRouter from 'vue-router'
const index =() => import('../views/index/index.vue')
const hot =() => import('../views/hot/hot.vue')
const ranking =() => import('../views/ranking/ranking.vue')
const my =() => import('../views/my/my.vue')
const detail = () => import('../views/datail/detail.vue')
const Audio = () => import('../views/audio/audio.vue')
const search = () => import('../components/content/search/search.vue')
const SearchAudio = () => import('../views/searchaudio/searchaudio.vue')
const HotMvPlay = () => import('../views/hot/hotmvplay.vue')
const Audioback = () => import('../views/audio/audioback.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/index'
  },
{
   path:'/index',
   component:index
 },
 {
   path:'/ranking',
   component:ranking
 },
 {
   path:'/hot',
   component:hot
 },
 {
   path:'/my',
   component:my
 },
 {
   path:'/detail/:id',
   component:detail
 },
 {
  path:'/audio/:id',
  component:Audio
 },
  {
    path:'/search/:id',
    component:search
  },
  {
    path:'/searchaudio',
    component:SearchAudio
  },
  {
    path:'/hotmvplay/:id',
    component:HotMvPlay
  },
  {
    path:'/audioback/:id',
    component:Audioback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
