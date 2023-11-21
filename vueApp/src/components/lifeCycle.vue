<template>
    <div id='lifeCycle'>
        <p>{{cont}}</p>
        <el-button @click="cont++">点击+1</el-button>
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
