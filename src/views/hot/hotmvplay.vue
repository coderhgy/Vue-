<template>
  <div>
    <Navbar><div @click='backclick' slot="left"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fanhui"></use>
</svg></div> <div slot="center" class="center">{{data.name}}</div></Navbar>

    <video :src="mvurl" controls autoplay></video>
    <p>热门评论</p>
    <ul><li :key="index" v-for="(item,index) in hotcom">
      <img :src="item.user.avatarUrl"> <span>{{item.user.nickname}}</span>
      <article>{{item.content}}</article>
      </li></ul>
  </div>
</template>

<script>
// 导入获取mv的网络请求
import {playMv,getmvcom} from '../../network/getMv'
import Navbar from '../../components/common/navbar/navbar'
import store from '../../store/index'
export default {
  components:Navbar,
  name:'hotmvplay',
  data(){
    return {
      mvid:'',
      mvurl:'',
      data:{},
      hotcom:{}
    }
  },
  store,
  created(){
    this.mvid = this.$route.params.id
    this.playMv()
    this.getmvcom()
  },
  methods:{
     backclick(){
      this.$router.back()
      this.$store.commit('back',{})
    },
    playMv(){
      const that = this
      playMv(that.mvid).then(res => {
        console.log(res);
        that.data = res.data
        that.mvurl=res.data.brs['1080']
      })
    },
    getmvcom(){
      const id = this.mvid
      const that =this
      getmvcom(id).then(res => {
        console.log(res);
        that.hotcom = res.hotComments
        
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
video{
  width: 100%;
  margin-top: 15px;
}
p{
  color: orange;
  height: 30px;
  line-height: 30px;
}
.center{
  width: 90px;
  margin: 0 auto;
  height: 49px;
  line-height: 49px;
  color: #fff;
}
img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: 20px;
  margin-top: 20px;
}
ul{
  height: 400px;
  overflow-y: auto;
}
li{
  position: relative;
}
span{
  position: absolute;
  top: 36px;
  left: 111px;
  color: #ffff;
}
article{
  width: 90%;
  margin: 0 auto;
}
</style>