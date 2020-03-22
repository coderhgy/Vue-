<template>
  <div class="hotmv">
    <ul><li @click="mvclick(item.id)" :key="index" v-for="(item,index) in mvlist">
      <img v-lazy="item.cover" alt=""><div class="info">
        <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-MV"></use>
</svg>
      <p> {{item.name}}</p><span>歌手：{{item.artistName}}</span>
      </div>
      
      </li></ul>

  </div>
</template>
<script>
import store from '../../store/index'
import {getMvData,playMv} from '../../network/getMv'
export default {
  data(){
    return {
      mvlist:[],
      mvid:[],
      mvurl:[]
    }
  },
  created(){
    this.getMvData()
    this.playMv()
  },
  store,
  methods:{
    getMvData(){
      getMvData().then(res => {
        console.log(res);
        this.mvlist = res.data
        for(let i=0;i<this.mvlist.length;i++){
          this.mvid.push(res.data[i].id)
        }
        // console.log(this.mvid);
         })
    },
    playMv(){
      const that =this
   setTimeout(function(){
       playMv(that.mvid[1]).then(res => {
       console.log(res);
       
     })
   },3000)
    },
    mvclick(id){
      this.$router.push('/hotmvplay/'+id)
    this.$store.commit('go',{})
    }
  }
}
</script>

<style scoped>
.icon {
  position: relative;
  top: 6px;
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
    fill: red;
  overflow: hidden;

}
.hotmv{
  margin-top:20px ;
}
video{
  width: 90%;
  display: block;
  margin: 0 auto;
}
img{
  display:block;
  margin: 0 auto;
  width: 90%;
}
p{ 
  display: inline;
  margin-right: 20px;
  margin-left:10px;
  color: white;
}
.info{
  margin-top: 10px;
  text-align: center;
  font-size:20px;
  margin-bottom: 30px;
}
ul{
  margin-top: 98px;
}
</style>