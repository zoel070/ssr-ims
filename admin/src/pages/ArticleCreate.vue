<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="80px">
    <el-form-item label="标题" prop="title">
      <el-input v-model="form.title" placeholder="请添加文章标题"></el-input>
    </el-form-item>
    <el-form-item label="分类" prop="kind_id">
      <el-select v-model="form.kind_id" placeholder="请选择文章分类">
        <el-option v-for="item in kinds" :key="item.id" :label="item.kind" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内容" prop="content">
      <quill-editor class="quill-editor" v-model="form.content" ref="myQuillEditor" @ready="onEditorReady()"
        :options="editorOption"></quill-editor>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
      <el-button @click="cancelSubmit">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import hljs from 'highlight.js'
import { quillEditor } from 'vue-quill-editor'
import Kind from '@/models/kind'
import Article from '@/models/article'
import titleConfig from '@/utils/toolbar-title'
import toolbar from '@/utils/toolbar'

export default {
  created() {
    Kind.index().then((res) => {
      this.kinds = res.kinds
    })
  },
  data() {
    return {
      kinds: [],
      form: {
        title: '',
        kind_id: '',
        content: '',
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' },],
        kind_id: [{ required: true, message: '请选择分类', trigger: 'change' }],
        content: [{ required: true, message: '请输入内容', trigger: 'blur' },]
      },
      editorOption: {
        modules: {
          toolbar: toolbar,
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          },
        },
        placeholder: '请输入正文',
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = this.form
          Article.insert(params).then((res) => {
            this.$message.success('创建成功')
            this.$router.replace({ name: 'ArticleList' })
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancelSubmit() {
      this.$router.replace({ name: 'ArticleList' })
    },
    onEditorReady() {
      for (let item of titleConfig) {
        let tip = document.querySelector('.quill-editor ' + item.Choice)
        if (!tip) continue
        tip.setAttribute('title', item.title)
      }
    }
  },
  components: {
    'quill-editor': quillEditor
  }
}
</script>

<style>
.quill-editor {
  line-height: 24px;

}
</style>