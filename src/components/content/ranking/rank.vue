<template>
  <div class="main">
    <span class="iconfont icon-yinyue"></span>
 <ul>
   <li @click="itemclick(index,1)" :key="index" v-for="(item,index) in playlist"><div class="r-left">
     <img v-lazy="item.al.picUrl" ></div>
    <div class="r-right">
      <p class="title">{{item.name}}</p>
      <span class="info">歌手：{{item.ar[0].name}}&nbsp;{{item.alia[0]}}</span>
      </div></li>
 </ul>
  </div>
</template>

<script>
import {getRankingData} from '../../../network/ranking'

export default {
  name:'name',
  data(){
    return {
      playlist:[]
    }
  },
  created(){
    this.getRankingData()
  },
  methods:{
    getRankingData(){
      getRankingData().then(res => {
        console.log(res);
        this.playlist=res.playlist.tracks
      })
    },
    itemclick(index,num){
      this.$store.commit('rankmusic',{
        rankdata:{id:this.playlist[index].id,name:this.playlist[index].name,img:this.playlist[index].al.picUrl,num:num}
      })
      this.$router.push('/audioback/'+this.playlist[index].id)
    }
  }
}
</script>

<style scoped>
.rank{
  color: orange;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
}
img {
  width: 80px;
}
ul{
  margin-top: 98px;
  height:calc(100vh - 100px);
  overflow-y: auto;
}
li{
  position: relative;
  background-color: #333;
  height: 100px;
  margin-top: 20px;
}
.r-left{
  display: inline-block;
  padding-top: 10px;
  text-indent: 20px;
  
}
.r-right{
  display: inline-block;
}
.title{
  position: absolute;
  top: 10px;
  left: 120px;
  color: #ccc;
}
.info{
   position: absolute;
  top: 30px;
  left: 110px;
  font-size: 14px;
  color: #887495;
}
.main{
  
}
</style>