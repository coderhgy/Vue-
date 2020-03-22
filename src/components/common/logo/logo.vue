<template>
  <div class="logo">
    <div id="logoimg"><img id="img" src="./logo.jpg"></div>
    <p>Tin&nbsp;Music</p>
    <input v-model.lazy="searchname" type="text" @keyup.13='searchmusic'
     placeholder="搜索歌曲" @focus="getsearch" @blur='losesearch'>
  <div class="searchprop" v-show="isshow"><ul><li :key="index" v-for="(item,index) in searchDefault">
    {{item.first}}</li></ul></div>
  </div>
</template>

<script>
import {getSearchDefault} from '../../../network/getsearch'
import store from '../../../store/index'
export default {
  data(){
    return{
      searchDefault:{},
      isshow:false,
      searchname:''
    }
  },
  created(){
    this.getSearchDefault()
  },
  store,
  methods:{
   getsearch(){
     this.isshow = true
     this.$store.commit('tabback',{})
     
    },
    losesearch(){
    this.isshow = false
    this.$store.commit('tabgo',{})
    },
    getSearchDefault(){
      getSearchDefault().then(res => {
        this.searchDefault = res.result.hots
      })
    },
    searchmusic(){
      this.$store.commit('go',{})
     this.$router.push('/search/'+this.searchname)
      
    }
  }
}
</script>
<style scoped>
.searchprop{
  position: absolute;
  top: 42px;
  width: 100%;
background-color: #ffffff;
color: #333333;
}
.logo{
  position: fixed;
  top: 0px;
  z-index: 222;
  width: 100VW;
  background-color: white;
  height: 49px;
  margin-bottom: 4px;
  line-height: 44px;
}
p{
  position: relative;
  top: -7px;
  display: inline-block;
  color: red;
  text-indent: 4vw;
  margin-right: 5vw;
  font-size: 20px;
}
input{
    position:relative;
  top: -7px;
  right: -10px;
  border:1px solid #ccc;
  height: 30px;
  width: 40vw;
  border-radius: 10px;
  text-indent: 3vw;
}
#logoimg{
  position: relative;
  top: -10px;
  width: 40px;
  height:40px;
  margin-left:10vw;
  display: inline-block;
}
#img{
  display: inline-block;
  position: relative;
  top: 2vh;
  width: 100%;
  height: 100%;
}
li{
  float: left;
  margin-left: 20px;
  color: #ccc;
}
</style>