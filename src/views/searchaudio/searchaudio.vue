<template>
  <div>
      <div class="bg"><Navbar><div @click='backclick' slot="left"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fanhui"></use>
</svg></div> <div slot="center">{{songdata.name}}</div></Navbar></div>
   <div id="cover">
     <img :src="songdata.img" alt="">
   </div>
    <div class="main"><ul><li :class="{active : index==0}" :key="index" v-for="(item,index) in list">{{item}}</li>
     </ul></div>
    <ul id="ul">
    <li :key="index" v-for="(item,index) in hotcomdata">
    <div id="pic"><img v-lazy="item.user.avatarUrl"></div>
    <p class="nickname">{{item.user.nickname}}</p>
    <p class="content">{{item.content}}</p>
    </li>
  </ul>
  </div>
</template>

<script>
import {gethotcom} from '../../network/gethotcom'

import Navbar from '../../components/common/navbar/navbar'
import store from '../../store/index'
export default {
  name:'searchaudio',
  components:{
    Navbar
  },
  data(){
    return{
      limit:30,
       list:['热评','歌词'],
      musicid:null,
      hotcomdata:{}
    }
  },
  store,
  computed:{
    songdata(){
      return this.$store.state.songdata
    }
  },
  created(){
    this.musicid = this.$store.state.songdata.id
    this.gethotcom()
  },

  methods:{
      backclick(){
      this.$router.back()
    },  
    gethotcom(){
  const that = this
      gethotcom(that.musicid,that.limit).then(res => {
        that.hotcomdata = res.hotComments
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
#cover{
  width: 100%;
  height: 200px;
  overflow: hidden;
}
#cover img {
  width: 100%;
  opacity: .4;
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
.ul{
  margin-bottom: 89px;
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
#ul{
  height: 400px;
  overflow-y: auto;
  }
</style>