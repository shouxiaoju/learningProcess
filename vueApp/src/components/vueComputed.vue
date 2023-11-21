<template>
  <div id="vueComputed">
    <h4>
      模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：
    </h4>
    <prism-editor
      class="my-editor"
      v-model="textPom"
      :highlight="highlighter"
      readonly
      line-numbers
    ></prism-editor>
    <p>
      这里的表达式包含3个操作，并不是很清晰，所以遇到复杂逻辑时应该使用Vue特带的计算属性computed来进行处理。
    </p>
    <h4>
      在一个计算属性里可以完成各种复杂的逻辑，包括运算、函数调用等，只要最终返回一个结果就可以。
    </h4>
    <prism-editor
      class="my-editor"
      v-model="reversePom"
      :highlight="highlighter"
      readonly
      line-numbers
    ></prism-editor>
    <p>计算属性是基于它们的依赖项的值结果进行缓存的，只要依赖的变量不变, 都直接从缓存取结果, 依赖变化重新计算结果存入缓存, 比普通方法性能更高。</p>
    <h3>vue计算属性-完整写法</h3>
    <prism-editor
      class="my-editor"
      v-model="allPom"
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
  name: "VueComputed",
  components: {
    PrismEditor
  },
  data() {
    return {
       message:'Hello',
      textPom:
        "<body>\n" +
        "   <div>\n" +
        "    {{ message.split('').reverse().join('') }}\n" +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  message:'Hello'," +
        "              }\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      reversePom:
        "<body>\n" +
        "   <div>\n" +
        "    {{reversedMessage }}\n" +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  message:'Hello'," +
        "              }\n" +
        "           },\n" +
        "           comouted: {\n"+
        "               reversedMessage: function() {\n"+
        "                   return this.message.split('').reverse().join('');\n"+
        "               }\n"+
        "           },\n"+
        "       })\n" +
        "   <script>\n" +
        "</body>",
        allPom:
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  message:'Hello'," +
        "              }\n" +
        "           },\n" +
        "           comouted: {\n"+
        "               属性名: {\n"+
        "                   set(val) {\n"+
        "                       console.log(val)\n"+
        "                   },\n"+
        "                   get() {\n"+
        "                       return '处理后的值' \n"+
        "                    }\n"+
        "               }\n"+
        "           },\n"+
        "       })\n" +
        "   <script>\n" 
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    }
  }
};
</script>

<style scoped>
#vueComputed {
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
