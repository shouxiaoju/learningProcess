<template>
  <div id="vuePrismEditor">
    <prism-editor
      class="my-editor"
      :value="values"
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
  name: "VuePrismEditor",
  props: {
    values: String
  },
  components: {
    PrismEditor
  },
  data() {
    return {};
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    }
  }
};
</script>
<style scoped>
#vuePrismEditor {
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
