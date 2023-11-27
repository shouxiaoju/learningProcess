<template>
    <div id='lifeCycle'>
        <p>{{cont}}</p>
        <el-button @click="cont++">点击+1</el-button>
        <h4>生命周期就是用来描述一个组件从引入到退出的全过程。 那复杂来说呢？就是一个组件从创建开始经历了数据初始化，挂载，更新等步骤后，最后被销毁。</h4>
        <h4>组件创建阶段</h4>
        <p>
            beforeCreate 创建前<br>
            created 创建后，在Vue实例创建完毕状态，我们可以去访问data、computed、watch、methods上的方法和数据，但现在还没有将虚拟Dom挂载到真实Dom上，所以我们在此时访问不到我们的Dom元素（el属性，ref属性此时都为空）。<br>
            beforeMount 载入前，它是在挂载之前被调用的，会在此时去找到虚拟Dom，并将其编译成Render<br>
            mounted 载入后，虚拟Dom已经被挂载到真实Dom上，此时我们可以获取Dom节点，$ref在此时也是可以访问的。<br>
        </p>
        <h4>组件更新阶段</h4>
        <p>
            beforeUpdate 更新前，响应式数据更新的时候会被调用，beforeupdate的阶段虚拟Dom还没更新，所以在此时依旧可以访问现有的Dom。我们可以在此时访问现有的Dom，手动移除一些添加的监听事件<br>
            updated 更新后，此时补丁已经打完了，Dom已经更新完毕，可以执行一些依赖新Dom的操作。但还是不建议在此时进行数据操作，避免进入死循环<br>
        </p>
        <h4>组件卸载阶段</h4>
        <p>
            beforeDestroy 卸载前， 在Vue实例销毁之前被调用，在此时我们的实例还未被销毁。在此时可以做一些操作，比如销毁定时器，解绑全局事件，销毁插件对象等<br>
            destroyed 卸载后<br>
        </p>
    </div>
</template>

<script>
import VuePrismEditor from './vuePrismEditor.vue';
export default {
   name:"LifeCycle",
   components:{
    VuePrismEditor
   },
   data(){
       return{
           cont:0,
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
