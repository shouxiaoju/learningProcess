<template>
    <div id="asideNav">
        <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            :router=true
        >
          <el-menu-item index="/vueCommands">
              vue常用指令
          </el-menu-item>
          <el-menu-item index="/vueComputed">
              vue计算属性
          </el-menu-item>
          <el-menu-item index="/vueWatch">
              vue侦听器
          </el-menu-item>
          <el-menu-item index="/lifeCycle">
              vue生命周期
          </el-menu-item>
    </el-menu>
    </div>
</template>

<script>

export default {
   name:'AsideNav',
   data(){
       return {
            defaultActive:'vueCommands',
           
       }
   },
   mounted(){
       console.log('this.$route.path',this.$route.path);
       if(this.$route.path==="/"){
            this.defaultActive='/vueCommands'
       }else{
            this.defaultActive=this.$route.path
       }
       
   }
       
}
</script>

<style scoped>
#asideNav{
    width: 200px;
    height: 100%;
    background-color: #E9EEF3;
}
</style>
