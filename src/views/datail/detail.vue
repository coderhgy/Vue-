<template>
  <div class="body">
    <div class="bg"><Navbar><div @click='backclick' slot="left"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fanhui"></use>
</svg></div> <div slot="center">歌单详情</div></Navbar></div>

   <div id="cover">
     <img :src="coverimg" alt="">
   </div>
   <p class="playall">随机播放</p>
   <ul class="musicshow">
     <li @click="playmusic(item.id,item.name,item.al.picUrl,1)" :key="index" v-for="(item,index) in musicdata">
      
 <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-yinyue"></use>
</svg>
      <article> {{item.name}}</article><span class="singer">Singer:&nbsp;&nbsp;{{item.ar[0].name}}</span>
     </li>
   </ul>
  </div>
</template>

<script>
import {getdetail} from '../../network/getdetail'
// 引入顶部导航条
import Navbar from '../../components/common/navbar/navbar'
import store from '../../store/index'
export default {
  name:'detail',
  components:{
    Navbar
  },
  data(){
    return {
      id:null,
      musicdata:[],
      coverimg:{},
      description:{}
    }
  },
  created(){
    this.id = this.$route.params.id
    this.getdetail();
  },
  store,
  methods:{
    getdetail(){
     const that =this
      getdetail(that.id).then(res => {
        console.log(res);
        this.musicdata = res.playlist.tracks
        this.coverimg = res.playlist.coverImgUrl
        this.description=res.playlist.description
      })
    },
    backclick(){
      this.$router.back()
       this.$store.commit('back',{})
    },
    playmusic(id,name,img,num){
      this.$router.push('/audio/'+id)
      this.$store.commit('data',{
        song:{id:id,name:name,img:img,num:num}
      })
    }
  }
  
}
</script>

<style scoped>
.icon {
  position: absolute;
 left: -15px;
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill:#ff5400;
  overflow: hidden;
  float: left;
  margin-top: 10px;
  margin-left: 40px;

}
.body{
 
}
#sp{
  color: orange;
  margin-left: 5px;
}
#cover p {
  text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;

}
#cover{
  width:100%;
  margin: 0 auto;
  font-size: 14px;
  text-align: center;
  background-color: rgba(207, 223, 45, .1);
  padding-bottom: 5px;
  height: 250px;
  overflow: hidden;
}
#cover img {
  display: inline-block;
  width: 100%;
  opacity:0.5;
}
.musicshow {
  margin-top: 30px;
  }
.musicshow img {
width: 70px;
}
.musicshow li {
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
  background-color: #222222;
  font-size: 14px;
  height: 40px;
}
article{
  display: inline;
 
  line-height: 40px;
  margin-left: 80px;
   text-overflow: ellipsis;
   overflow: hidden;


}
.musicshow li:nth-child(odd){
  background-color: #473f3f;
}
.singer{
  display: inline-block;
 padding-left: 30px;
}
.return{
  background-color: white;
}
.playall{
  margin: 0 auto;
  margin-top: -60px;
  color: orange;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid orange;
font-size: 17px;
}
</style>
