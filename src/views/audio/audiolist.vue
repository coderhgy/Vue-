<template>
  <div class="page">
     <div class="dio" v-if= "this.songdata.num==1"><img class="smallimg" :src="songdata.img" alt="">
    <div class="line">
      <div class="playline" :style="{'width': w+'vw'}"></div>
    </div>
     <div class="poaudio">
       <audio :src="musicUrl" id="audio" autoplay='autoplay'></audio>
       <button id="upper"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-icon-1"></use>
</svg></button>
      <button @click="paused" v-show="!isplay" class="paused">
        <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-zanting"></use>
</svg>
      </button>
      <button @click="play" id="play" v-show="isplay">
        <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-zanting1"></use>
</svg>
      </button>
         <button id="next">
           <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-icon-"></use>
</svg></button>

<button id="suiji">
  <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-ziyuan"></use>
</svg>
</button>
     </div>
     </div>

  </div>
</template>

<script>
import '../../assets/js/iconfont1'
import {getMusicUrl} from '../../network/getMusicUrl'
export default {
  data(){
    return{
    musicUrl:{},
    isplay:false,
    w:''
    }
  },
  computed:{
    musicid(){
      return this.$store.state.songdata.id
    },
    songdata(){
      return this.$store.state.songdata
    }
  },
  updated(){
    this.getMusicUrl()
  },
  created(){
    this.line()
  },
  methods:{
    getMusicUrl(){
      const that = this 
      getMusicUrl(that.musicid).then(res => {
        that.musicUrl = res.data[0].url
      })
    },
    paused(){    
      const au = document.getElementById('audio')
      au.pause()
      this.isplay = true
    },
    play(){
      const au = document.getElementById('audio')
      au.play()
      this.isplay = false
    },
   line(){
      
      const that = this 
      that.w=0
     setInterval(() => {
         let au = document.getElementById('audio')
      const that = this 
       that.w = (au.currentTime/au.duration) * 100
    
      }, 1000);
  
    }
  }
}
</script>
<style scoped>
.smallimg{
  position: relative;
  left: 50px;
  top: 3px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.dio{
    position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #efefef;
  z-index: 9999;
  height: 49px;
}
audio{
  display: inline-block;
  position: absolute;
  right: 50px;
  top: 2px;
  height: 40px;
  width: 200px;
  margin-left: 50px;
}
#upper{
  position: absolute;
  left: 120px;
  top:10px;
}
#next{
position: absolute;
  left: 220px;
  top:10px;
}
#play{
   position: absolute;
  left: 170px;
  top:10px;
}
.paused{
  position: absolute;
  left: 170px;
  top:10px;
}
#suiji{
  position: absolute;
  left: 300px;
  top:10px;
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: #31c27c;
  overflow: hidden;
}
button{
  border: none;
  background-color: #efefef;
}
.line{
  position: fixed;;
  bottom: 48px;
  width: 100vw;
  background-color:#ccc;
  height: 3px;
}
.playline{
  background-color:#31c27c;
 height: 3px;
  }
</style>