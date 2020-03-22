<template>
  <div id="app" class="app">
    <Logo v-show="isshow"></Logo>
    <Tabbar></Tabbar>
   <keep-alive exclude="detail,audio,search,searchaudio,rank,hotmvplay"><router-view/>></keep-alive>
   <audiolist></audiolist>
  </div>
</template>
<script>
import Tabbar from './components/common/tabbar/tabbar'
import './assets/font/iconfont'
import audiolist from './views/audio/audiolist'
import Logo from './components/common/logo/logo'
export default {
  components:{
    Tabbar,
    audiolist,
    Logo
  },
  computed:{
    isshow(){
      return this.$store.state.isshow
    }
  }
}
</script>

<style>
/* 导入初始化样式 */
@import './assets/css/base.css';
body{
  background-color: #222222;
  color: #ccc;
}
</style>
