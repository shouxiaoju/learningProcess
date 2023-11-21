<template>
    <div id='lifeCycle'>
        <p>{{cont}}</p>
        <el-button @click="cont++">点击+1</el-button>
        <h4>生命周期就是用来描述一个组件从引入到退出的全过程。 那复杂来说呢？就是一个组件从创建开始经历了数据初始化，挂载，更新等步骤后，最后被销毁。</h4>
        
        <p></p>
    </div>
</template>

<script>

export default {
   name:"LifeCycle",
   data(){
       return{
           cont:0
       }
   },
   beforeCreate(){
       console.log("beforeCreate");
   },
   created(){
       console.log("create");
   },
  beforeMount(){
      console.log("beforeMount");
  },
  mounted(){
      console.log("mounted");
  },
  beforeUpdate(){
      console.log("beforeUpdate");
  },
  updated(){
      console.log("updated");
  },
  beforeDestroy(){
      console.log("beforeDestroy");
  },
  destroyed(){
      console.log("destroyed");
  }
}
</script>
<style scoped>
#lifeCycle{

}
</style>
