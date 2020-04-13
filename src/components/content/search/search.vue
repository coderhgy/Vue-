<template>

  <div>
   <navbar><div slot="left" @click="backclick"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fanhui"></use>
</svg></div>
<div slot="center" id="center">搜索结果</div></navbar>
   <img :src="searchResult[0].artists[0].img1v1Url" alt="">
   <div>
     <ul class="main"><li @click.stop="listclick(item.id,index,1)" :key="index" v-for="(item,index) in searchResult">
        <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-yinyue"></use>
</svg>

      <article class="arcl">{{item.name}} </article>   Singer:<span>{{item.artists[0].name}}</span>
       </li></ul>
   </div>
   </div>
</template>

<script>
import {getSearchMusic,getMusciDetail} from '../../../network/getsearch'
import navbar from '../../common/navbar/navbar'
import store from '../../../store/index'
export default {
  name:'search',
  data(){
    return {
      searchname:null,
      searchResult:{},
      musicdata:{},
    }
  },
  components:{
    navbar
  },
created(){
  this.searchname = this.$route.params.id
  // console.log(this.$route.params.id);
  this.getSearchMusic()
  },
  store,
  methods:{
    getSearchMusic(){
      const that = this
      getSearchMusic(that.searchname).then(res => {
        this.searchResult = res.result.songs
        // console.log(this.searchResult);
        
      })
    },
    backclick(){
      this.$store.commit('back',{})
      this.$router.back()
    },
    listclick(id,index,num){
      this.getMusciDetail(id,index)
      this.commitdata(id,num)
    },
    getMusciDetail(id){
      getMusciDetail(id).then(res => {
        this.musicdata = res.songs
      })
    },
    commitdata(id,num){
      const that = this
      setTimeout(function(){
             that.$store.commit('searchdata',{
        search:{id:id,name:that.musicdata[0].name,num:num,img:that.musicdata[0].al.picUrl}
      })
         that.$router.push('/searchaudio/')
      },200)
    }
  }
}
</script>

<style scoped>
.icon {
  position: relative;
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
img{
  width: 100%;
}
.main{
  height: 400px;
  overflow-y: auto;
}
li{
  width: 100%;
  overflow: hidden;
  height: 44px;
  line-height: 44px;
}
.arcl{
  display: inline-block;

}
 li:nth-child(odd){
  background-color: #473f3f;
}
#center{
  
}
</style>