<template>
   <div class="bg">
     <navbar>
     <div @click='backclick' slot="left"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fanhui"></use>
</svg></div> <div slot="center">{{songdata.name}}</div>
     </navbar>
     <div class="img"><img :src="songdata.img" alt=""></div>
   <div class="main"><ul><li :class="{active : index==0}" :key="index" v-for="(item,index) in list">{{item}}</li>
     </ul></div>
  <ul class="contentmain">
    <li :key="index" v-for="(item,index) in hotcomdata">
    <div id="pic"><img v-lazy="item.user.avatarUrl"></div>
    <p class="nickname">{{item.user.nickname}}</p>
    <p class="content">{{item.content}}</p>
    </li>
  </ul>
   </div>


</template>

<script>
import store from '../../store/index.js'
// 引入顶部导航组件
import navbar from '../../components/common/navbar/navbar'
// 引入网络请求文件
import {gethotcom} from '../../network/gethotcom'
export default {
  name:'audio',
  data(){
    return {
      musicid:{},
      musicUrl:{},
      list:['热评','歌词'],
      limit:1,
      hotcomdata:{}

    }
  },
  store,
  computed:{
    songdata(){
      return this.$store.state.songdata
    }
  },
  components:{
    navbar
  },
  created(){
    this.musicid = this.$route.params.id
     this.gethotcom()
  },
  methods:{
    backclick(){
      this.$router.back()
      this.$store.commit('back',{})
    },
    gethotcom(){
  const that = this
      gethotcom(that.musicid,that.limit).then(res => {
        that.hotcomdata = res.hotComments
         console.log(that.hotcomdata);
      })
    }
   
  }
}
</script>

<style scoped>
.img{
  width: 100%;
  height: 200px;
  overflow: hidden;
  opacity: .3;
}
img{
  width: 100%;
}
.bg{

}
.contentmain{
  display: block;
  height: calc(100vh - 220px);
  overflow-y: auto;
}
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
p{
  color: white;
}
.main{
  width: 100vw;
  text-align: center;
}
.main li{
  display: inline-block;
  height: 25px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 3px;
}
.active{
  color: orange;
}
#pic{
   display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 40px;
  margin-top: 10px;
}
#pic img {
  width: 100%;
  height: 100%;
}
#pic li {
  position: relative;
}
.nickname{
  position: relative;
  top: -19px;
  left: 22px;
  display: inline;
  color: #ff5777;
}
.content{
  font-size: 14px;
  margin: 0 auto;
  width: 90%;
  color: #cccccc;
  text-indent: 25px;
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>