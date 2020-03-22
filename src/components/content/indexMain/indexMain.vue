<template>
  <div class="main">
    <p id="title">精品歌单</p>
    <ul class="hotmusic">
      <li :key="index" v-for="(item,index) in hotMusic" @click='itemclick(item.id)'>
      <img v-lazy="hotMusic[index].coverImgUrl"><div class="info">
        <article class="head">{{item.tags[0]}}&nbsp;{{item.tags[1]}}&nbsp;{{item.tags[2]}}</article>
        <span>{{item.name}}</span>
        <article class="article">{{item.description}}</article>
        <!-- {{item.description}} -->
        </div>
      </li></ul>
  </div>
</template>

<script>
import {getNewsMusicList} from '../../../network/indexMain'
import store from '../../../store/index'
export default {
  data(){
    return {
      hotMusic:[]
    }
  },
  created(){
    this.getNewsMusicList()
  },
  store,
  methods:{
    getNewsMusicList(){
      getNewsMusicList().then(res => {
        console.log(res);
        this.hotMusic = res.playlists
      })},
    itemclick(id){
      this.$store.commit('go',{})
      this.$router.push('/detail/'+id)
    }
  }
}
</script>

<style scoped>
.main{
 padding-top: 9px;
 margin-bottom: 70px;
}
#title {
  margin-top: 2vw;
  text-indent: 2vw;
  color: orange;
}
ul{
  width: 100vw;
}
li{
  padding-top: 10px;
  width: 95%;
  height: 100px;
  position: relative;
    margin-top: 2vw;
    margin-left: 5vw;
  font-size: 10px;
  background-color: #333;
}
.hotmusic img {
  width: 80px;
}
.info{
    display: inline-block;
  float: right;
  width: 150px;
  margin-top: 8px;
  margin-right: 60px;
}
.head{
  float: left;
  text-indent: 2vw;
  color: white;
}
span{
color: white; 
}
.article{
margin-top: 6px;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
  width: 200px;
  height: 33px;
  overflow : hidden;
}
</style>