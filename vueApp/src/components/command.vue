<template>
  <div id="vueCommands">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- v-on -->
      <el-tab-pane label="v-on" name="v-on">
        <h2>v-on用于事件绑定</h2>
        <prism-editor
          class="my-editor"
          v-model="onPom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <span>
          事件的基本使用：<br />
          1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；<br />
          2.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；
        </span>
        <div>
          <el-button v-on:click="coun">点击+1</el-button>
          <el-button @click="coun1">点击-1</el-button>
          <el-button v-on:click="coun2(5)">点击+5</el-button>
          <el-button @click="coun3(5, $event)">点击-5</el-button>
          <span>{{ num }}</span>
        </div>
        <prism-editor
          class="my-editor"
          v-model="text2"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <span>会导致event丢失</span>
        <prism-editor
          class="my-editor"
          v-model="text3"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <span>给event占位</span>
        <h3>
          v-on绑定多个事件：<br />
          语法：v-on="{事件名：方法名，事件名：方法名,……}"，v-on里面是一个对象，
        </h3>
      </el-tab-pane>
      <!-- v-nind -->
      <el-tab-pane label="v-bind" name="v-bind">
        <h2>单向数据绑定，它是为标签里的某个属性绑定值用的</h2>
        <p>单向数据绑定：<input type="text" v-bind:value="aname" /></p>
        <p>
          v-bind:可以简写为:，举例：v-bind:href='xxx'可以简写为：:href='xxx'
        </p>
      </el-tab-pane>
      <!-- v-model -->
      <el-tab-pane label="v-model" name="v-model">
        <h2>
          双向数据绑定，v-model只能应用在表单类元素（如：input、select等）
        </h2>
        双向数据绑定：<input type="text" v-model="aname" />
        <prism-editor
          class="my-editor"
          v-model="modelPom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <h2>
          v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。
        </h2>
      </el-tab-pane>
      <!-- v-for -->
      <el-tab-pane label="v-for" name="v-for">
        <h2>遍历</h2>
        <prism-editor
          class="my-editor"
          v-model="forPom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <div v-for="(item, index) in listArr" :key="item">
          {{ index }}-{{ item }}
        </div>
      </el-tab-pane>
      <!-- v-show -->
      <el-tab-pane label="v-show" name="v-show">
        <h2>
          条件渲染，v-show指令通过改变元素的 css
          属性（display）来决定元素是显示还是隐藏。v-show等于false时,相当于设置了样式的display为none
        </h2>
        <prism-editor
          class="my-editor"
          v-model="showPom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <h3 v-show="showTest">这个元素是否展示</h3>
        <el-button @click="showTestClick(showTest)">点击按钮展示隐藏</el-button>
      </el-tab-pane>
      <!-- v-if -->
      <el-tab-pane label="v-if" name="v-if">
        <h2>
          条件渲染，与v-show类似，唯一不同的是，当v-if =
          false的时候，直接删掉DOM结构
        </h2>
        <prism-editor
          class="my-editor"
          v-model="ifPom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <div v-if="n == 0">{{ a }}-{{ n }}</div>
        <div v-else-if="n == 1">{{ b }}-{{ n }}</div>
        <div v-else>{{ c }}-{{ n }}</div>
        <el-button @click="n++">点我n+1</el-button>
        <p>注意: 如果用v-if和v-else去做判断,中间不能被打断</p>
      </el-tab-pane>
      <!-- v-text -->
      <el-tab-pane label="v-text" name="v-text">
        <h2>
          用于将数据填充到标签中，作用于插值语法表达式类似，但是没有闪动问题
          （如果数据中有HTML标签会将html标签一并输出 ）
        </h2>
        <prism-editor
          class="my-editor"
          v-model="textPom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <p v-text="vText"></p>
        <h3>
          注意：<br />1.
          v-text会把解析到为文本完全替换掉标签里的内容,如上边例子中，页面上并没有显示出“公众号：”这几个字符，因为它被v-text完全替换掉了
          <br />2.
          不能解析字符串，v-text会把所有的字符串都当成正常的文本解析，不会当成标签，即使你的data里的str数据中有标签结构
        </h3>
      </el-tab-pane>
      <!-- v-html -->
      <el-tab-pane label="v-html" name="v-html">
        <h2>
          v-html和v-text的区别：它与v-text区别在于v-text输出的是纯文本，浏览器不会对其再进行html解析，但v-html会将其当html标签解析后输出。与v-text的相同点是都会替换原本标签的内容
        </h2>
        <p v-html="htmltext"></p>
        <prism-editor
          class="my-editor"
          v-model="htmlPom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <p>注意：</p>
        <p>1作用：向指定节点中渲染包含html结构的内容。</p>
        <p>2.与插值语法的区别：</p>
        <p>(1).v-html会替换掉节点中所有的内容，{{ xx }}则不会。</p>
        <p>(2).v-html可以识别html结构。</p>
        <p>3.严重注意：v-html有安全性问题！！！！</p>
        <p>(1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。</p>
        <p>(2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！</p>
      </el-tab-pane>
      <!-- v-cloak -->
      <el-tab-pane label="v-cloak" name="v-cloak">
        <h2>
          1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
        </h2>
        <h2>
          2.使用css配合v-cloak可以解决网速慢时页面展示出【{'{ xxx }'}】的问题。
        </h2>
      </el-tab-pane>
      <!-- v-once -->
      <el-tab-pane label="v-once" name="v-once">
        <h2>1.v-once所在节点在初次动态渲染后，就视为静态内容了。</h2>
        <h2>
          2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。
        </h2>
        <prism-editor
          class="my-editor"
          v-model="oncePom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <h3 v-once>初始化时候的n是:{{ n }}</h3>
        <h3>现在的n是:{{ n }}</h3>
        <button @click="n++">点我n加1</button>
        <h3>v-cloak和v-once都没有值（后面都没有等号）。</h3>
      </el-tab-pane>
      <!-- v-pre -->
      <el-tab-pane label="v-pre" name="v-pre">
        <h2>1.跳过Vue在有v-pre属性的所在节点的编译过程。</h2>
        <h2>
          2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译速度。
        </h2>
        <prism-editor
          class="my-editor"
          v-model="prePom"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
        <h3 v-pre>没有使用指令语法和插值语法</h3>
        <h3 v-pre>{{ pretext }}</h3>
      </el-tab-pane>
      <!-- 总结 -->
      <el-tab-pane label="总结" name="summarize">
        <p>v-on : 绑定事件监听, 可简写为@</p>
        <p>v-bind : 单向绑定解析表达式, 可简写为 :xxx</p>
        <p>v-model : 双向数据绑定</p>
        <p>v-for : 遍历数组/对象/字符串</p>
        <p>v-show : 条件渲染 (动态控制节点是否展示)</p>
        <p>v-if : 条件渲染（动态控制节点是否存存在）</p>
        <p>v-else : 条件渲染（动态控制节点是否存存在）</p>
        <p>v-text：将数据填充到标签中（不会解析填充内容中的HTML标签）</p>
        <p>v-html：将数据填充到标签中（会解析填充内容中的HTML标签）</p>
        <p>v-cloak：一个特殊属性，Vue接管标签后会删掉这个属性（没有值）</p>
        <p>
          v-once：只渲染一次，之后Vue就不再渲染这个标签了（视为静态内容了）v
        </p>
        <p>
          v-pre：Vue不接管这个属性所在的标签（可用于加快编译速度，用于没有使用指令语法、没有使用插值语法的节点上）
        </p>
      </el-tab-pane>
    </el-tabs>
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
  name: "VueCommands",
  components: {
    PrismEditor
  },
  data() {
    return {
      activeName: "v-on",
      aname: "学编程",
      num: 0,
      onPom:
        "<a href='#' v-on:click='ShowInfo'>鼠标单击事件</a>\n" +
        "<a href='#' @click='ShowInfo'>鼠标单击事件</a>",
      text2: "<a href='#' @click='ShowInfo(1)'>鼠标单击事件传参</a>",
      text3:
        "<a href='#' @click='ShowInfo(1,$event)'>鼠标单击事件enent占位</a>",
      modelPom:
        "<body>\n" +
        "   <div>\n" +
        '       双向数据绑定：<input type="text" v-model:value="aname">\n' +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           el: '#root',\n" +
        "           data: {\n" +
        "               aname:'学编程的Giser'\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      listArr: ["第一项", "第二项", "第三项"],
      forPom:
        "<body>\n" +
        "   <div>\n" +
        '       <div v-for="(item,index) in listArr" :key="item">\n' +
        "           {{index}}-{{item}}\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        '                  listArr:["第一项","第二项","第三项"] \n' +
        "              }\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      showTest: true,
      showPom:
        "<body>\n" +
        "   <div>\n" +
        "       <h3 v-show='showTest'>这个元素是否展示</h3>\n" +
        "       <el-button @click='showTestClick(showTest)'>点击按钮展示隐藏</el-button>\n" +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  showTest:true \n" +
        "              }\n" +
        "           },\n" +
        "           methods: {\n" +
        "               showTestClick(value){\n" +
        "                   this.showTest=!value\n" +
        "               }\n" +
        "           }\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      n: 0,
      a: "我是if",
      b: "我是if-else-if",
      c: "我是 else",
      ifPom:
        "<body>\n" +
        "   <div>\n" +
        "       <div v-if='n==0'>{{a}}-{{n}}</div>\n" +
        "       <div v-else-if='n==1'>{{b}}-{{n}}</div>\n" +
        "       <div v-else>{{c}}-{{n}}</div>\n" +
        "       <el-button @click='n++'>点我n+1</el-button>\n" +
        "   </div>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                   n:0,\n" +
        "                   a:'我是if',\n" +
        "                   b:'我是if-else-if',\n" +
        "                   c:'我是 else',\n" +
        "              }\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      vText: "v-text的内容",
      textPom:
        "<body>\n" +
        "   <p v-text='vText'>标签里面的内容</p>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        '                  vText:"v-text的内容",' +
        "              }\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      htmltext: "<p>p标签</p>",
      htmlPom:
        "<body>\n" +
        "   <p v-html='htmltext'>标签里面的内容</p>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        '                  htmltext:"<p>p标签</p>",' +
        "              }\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      oncePom:
        "<body>\n" +
        "   <h3 v-once>初始化时候的n是:{{ n }}</h3>\n" +
        "   <h3>现在的n是:{{ n }}</h3>\n" +
        "   <button @click='n++'>点我n加1</button>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  n:0," +
        "              }\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>",
      pretext: "需要解析的语法",
      prePom:
        "<body>\n" +
        "   <h3 v-pre>没有使用指令语法和插值语法</h3>\n" +
        "   <h3 v-pre>{{pretext}}</h3>//pretext的内容没有进行编译\n" +
        "   <button @click='n++'>点我n加1</button>\n" +
        "   <script>\n" +
        "       const vm = new Vue({\n" +
        "           data(): {\n" +
        "              return {\n" +
        "                  pretext:'需要解析的语法'," +
        "              }\n" +
        "           },\n" +
        "       })\n" +
        "   <script>\n" +
        "</body>"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    coun() {
      this.num++;
    },
    coun1() {
      this.num--;
    },
    coun2(value) {
      this.num += value;
    },
    coun3(value, event) {
      this.num -= value;
      console.log("event", event);
    },
    highlighter(code) {
      return highlight(code, languages.js);
    },
    showTestClick(value) {
      this.showTest = !value;
    }
  }
};
</script>

<style scoped>
#vueCommands {
  width: 100%;
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
