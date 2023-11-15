<template>
  <div id="app">
    <MyHeader/>
    <div id="appMain">
      <AsideNavVue/>
      <div id="content">
        <router-view/>
      </div>
     
    </div>
    
  </div>
</template>

<script>
import MyHeader from './components/myHeader.vue';
import AsideNavVue from './components/asideNav.vue';
export default {
  name: 'App',
  components:{
    MyHeader,
    AsideNavVue
  }
}
</script>

<style>
html,body{
  width: 100%;
  min-width: 390px;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#appMain{
  width: 100%;
  height: calc(100% - 40px);
  max-height: 1033px;
  display: flex;
}
#content{
  width: 100%;
   padding: 10px;
   overflow-y: scroll;
}
</style>
