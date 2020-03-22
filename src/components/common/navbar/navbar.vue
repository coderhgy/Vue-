<template>
  <div class="navbar">
    <div class="left"><slot name='left'></slot></div>
  <div class="center"><slot name='center'></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
.navbar{
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  height: 49px;
  background-color: rgba(0, 0, 0, 0);
  z-index: 99999;
}
slot{
  flex: 1;
}
.left{
  float: left;
  margin-left: 10px;
}
.center{
  width: 150px;
  margin: 0px auto;
  line-height: 49px;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
}
.right{
  float: right;
}
</style>

