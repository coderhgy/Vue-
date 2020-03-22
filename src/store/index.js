// 导入歌曲播放配置文件
import {playmode} from '../components/content/config'

import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playing:false,
    currentIndex:-1,
    mode:playmode.sequence,
    songdata:{},
    isshow:true,
    tabshow:true
  },
  mutations: {
    data(state,payload){
      state.songdata = payload.song
      state.isshow = false
    },
    searchdata(state,payload){
    state.songdata= payload.search
    state.isshow = false
    },
    rankmusic(state,payload){
      state.songdata = payload.rankdata
      state.isshow = false
    },
    back(state){
      state.isshow = true
    },
    go(state){
      state.isshow = false
    },
    tabgo(state){
      state.tabshow = true
    },
    tabback(state){
      state.tabshow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
