<template>
    <div id="myHeader">{{describe}}</div>
</template>

<script>
export default {
   name:'MyHeader',
   data(){
       return {
           describe:'我是头部'
       }
   }
}
</script>

<style scoped>
#myHeader{
    width: 100%;
    height: 40px;
    text-align:center;
    line-height: 40px;
    background-color: #B3C0D1;
}
</style>
