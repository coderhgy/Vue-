<template>
  <div>
     <div class="dio" v-if= "this.songdata.num==1"><img class="smallimg" :src="songdata.img" alt=""><audio :src="musicUrl" controls autoplay='autoplay'></audio></div>

  </div>
</template>

<script>

import {getMusicUrl} from '../../network/getMusicUrl'
export default {
  data(){
    return{
    musicUrl:{}
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
  methods:{
    getMusicUrl(){
      const that = this 
      getMusicUrl(that.musicid).then(res => {
        that.musicUrl = res.data[0].url
      })
    }        
  }
}
</script>
<style scoped>
.smallimg{
  position: relative;
  left: 18px;
  top: 3px;
  width: 40px;
  height: 40px;
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
</style>