<template>
<!-- 底部导航条 -->
  <div class="tabbar" v-show='isshow && issearch'>
    <ul><li @click="goroute('index',0)"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-icon_fuben"></use></svg>
    <p>首页</p>
    </li>
    <li  @click="goroute('ranking',1)"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-paihang"></use></svg>
    <p>排行榜单</p>
    </li>
    <li @click="goroute('hot',2)"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-MV"></use></svg>
    <p>热门MV</p>
    </li>
    <li  @click="goroute('my',3)"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-wode"></use></svg>
    <p>我的喜欢</p></li>
</ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      path:null,
      red:'red'

    }
  },
  computed:{
    isshow(){
      return this.$store.state.isshow
    },
    issearch(){
      return this.$store.state.tabshow
    }
  },
  methods:{
    goroute(params,index){
        const list =document.querySelectorAll("li")
        for(let i=0;i<list.length;i++){
          list[i].className=''
           list[index].className='red'
        }
    
   
      this.$router.replace(params)
      this.path = params
    }
  }

}
</script>
<style scoped>

ul{
  position: fixed;
  top: 49px;
  left: 0px;
  right: 0px;
  display: flex;
  font-size: 14px;
  text-align: center;
  height: 49px;
  width: 100vw;
   color:#cccc;
   background-color:rgba(0, 0, 0, .5);
   z-index: 999999;
}
li {
  flex: 1;
}
p{
  font-size: 13px;
  margin-top: 4px;
}
.red{
  color: orange;
}
svg{
  color: white;}
  .icon {
  width: 20px;
  height: 25px;
  vertical-align: -0.15em;
  overflow: hidden;
   fill: #cccccc;;
}



</style>