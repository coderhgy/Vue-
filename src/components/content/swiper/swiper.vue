<template>
  <div class="swiper">
   <img :src="imglist[currentIndex]">
   <ul>
    <li :key="index" v-for="(item,index) in imglist"  :class="{'current':currentIndex === index}"></li>
   </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imglist:["http://chuantu.xyz/t6/724/1584279340x989559068.jpg" ,"http://chuantu.xyz/t6/724/1584279379x2728265612.jpg" ,"http://chuantu.xyz/t6/724/1584279413x2728265612.jpg" ],
      currentIndex:0
    }
  },
  mounted(){
    this.playswiper()
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
  margin-left: 43vw;
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