import Vue from 'vue'
import Router from 'vue-router'
import VueCommands from '../components/command';
import VueComputed from '../components/vueComputed.vue';
import VueWatch from '../components/vueWatch';
import LifeCycle from '../components/lifeCycle';

Vue.use(Router)
export const routes= [
  {
    path: '/',
    name: 'VueCommands',
    component: VueCommands
  },
  {
    path: '/vueCommands',
    name: 'VueCommands',
    component: VueCommands
  },
  {
    path: '/vueComputed',
    name: 'VueComputed',
    component: VueComputed
  },
  {
    path: '/vueWatch',
    name: 'VueWatch',
    component: VueWatch
  },
  {
    path: '/lifeCycle',
    name: 'LifeCycle',
    component: LifeCycle
  }
]


 // 根据这个路由去生成侧边栏
export default new Router({routes});