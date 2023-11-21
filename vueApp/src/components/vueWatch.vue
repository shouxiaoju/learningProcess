<template>
  <div id="vueWatch">
    <h4>
      在Vue.js中，watch是一种用于侦听数据变化的机制。它允许你在数据发生改变时执行相应的操作。可以简单地理解为，watch是一种侦听器，它可以监听指定的数据变化，并在该数据发生变化时执行特定的函数。
    </h4>
    <h4>
      在Vue实例中，你可以使用watch选项来定义一个或多个侦听器。每个侦听器都是一个对象，其中key表示要侦听的数据（该数据在
      data 节点中对应的名称），value为一个函数，该函数在数据发生变化时被调用。
    </h4>
    <p>
      1、侦听器的处理函数接受提供两个实参，请使用相同数量的形参对其进行接收。其中，第一个实参为数据变化后的值，第二个参数为数据变化前的值。
    </p>
    姓名:<input type="text" v-model="name" />
    <prism-editor
      class="my-editor"
      v-model="functionPom"
      :highlight="highlighter"
      readonly
      line-numbers
    ></prism-editor>
    <p>
      2、如果通过创建对象的方式创建监听器，则处理函数需要定义在 handler
      方法名之中。
    </p>
    <p>
      而完整写法的侦听器应该是一个对象，对象名称是侦听的对象名，加上属性
      deep:true 和 immediate:true和handler、具体方法如下。
    </p>
    <p>deep:true : 对复杂的类型深度监视。</p>
    <p>immediate:true:初始化旧立刻执行一次handler方法。</p>
    <p>handler：handler之后写具体执行函数。</p>
    姓名:<input type="text" v-model="obj.name1" /> 年龄:<input
      type="number"
      v-model="obj.age"
    />
    <prism-editor
      class="my-editor"
      v-model="objectPom"
      :highlight="highlighter"
      readonly
      line-numbers
    ></prism-editor>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

// import highlighting library
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "VueWatch",
  components: {
    PrismEditor
  },
  data() {
    return {
      name: "",
      obj: {
        name1: "",
        age: ""
      },
      objectPom:
        "<body>\n" +
        "   <div>\n" +
        "       姓名:<input type='text' v-model='obj.name1' />\n" +
        "       年龄:<input type='number' v-model='obj.age'/>\n" +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  obj:{\n" +
        "                       name1:'',\n" +
        "                       age:''\n" +
        "                   },\n" +
        "              }\n" +
        "           },\n" +
        "           watch:{\n" +
        "               boj(newVal,oldVal){\n" +
        "                   deep: true,\n" +
        "                   immediate: true,\n" +
        "                   handler(newVal, oldVal) {\n" +
        "                       console.log('新:', newVal);\n" +
        "                       console.log('旧:', oldVal);\n" +
        "                   }\n" +
        "               }\n" +
        "           }\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      functionPom:
        "<body>\n" +
        "   <div>\n" +
        "       姓名:<input type='text' v-model='name' >\n" +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  name:'',\n" +
        "              }\n" +
        "           },\n" +
        "           watch:{\n" +
        "               name(newVal,oldVal){\n" +
        "                   console.log('新name'+newVal)\n" +
        "                   console.log('旧name'+oldVal)\n" +
        "               }\n" +
        "           }\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>"
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    }
  },
  watch: {
    name(newVal, oldVal) {
      console.log("新name" + newVal);
      console.log("旧name" + oldVal);
    },
    obj: {
      deep: true,
      immediate: true,
      handler(newVal, oldVal) {
        console.log("新:", newVal);
        console.log("旧:", oldVal);
      }
    }
  }
};
</script>

<style scoped>
#vueWatch {
}
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  margin: 10px 0;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
