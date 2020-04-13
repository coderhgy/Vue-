<template>
  <div class="swiper">
   <img :src="imglist[currentIndex].picUrl">
   <ul>
    <li :key="index" v-for="(item,index) in imglist"  :class="{'current':currentIndex === index}"></li>
   </ul>
  </div>
</template>

<script>
import {getbanner} from '../../../network/getbanner.js';
export default {
  data(){
    return {
      imglist:{},
      currentIndex:0
    }
  },
  mounted(){
    this.playswiper()
    this.getbanner()
  },
  methods:{
    playswiper(){
      const that =this 
     setInterval(function(){
       that.currentIndex +=1
       if (that.currentIndex==that.imglist.length){
         that.currentIndex=0
       }
     },4000)
    },
    getbanner(){
      const that = this
      getbanner().then(res =>{
        that.imglist = res.banners
      })
    }
  }
}
</script>

<style scoped>
.swiper{
position: relative;
padding-top: 45px;
}
img{
  display: block;
  margin: 0 auto;
  box-shadow: 0px .3px 1px;
  width: 100%;
  height: 200px;
}
ul{
    position: absolute;
  top: 230px;
  margin-left: 23vw;
}
li{
  float: left;
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-radius:5px;
  /* background-color: rgba(0, 0, 0, .4); */
  background-color:rgba(0, 0, 0, .4);
}
.current{
  background-color:white;
}
</style>