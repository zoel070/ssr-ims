<template>
  <div class="mainer">
    <el-button type="warning" @click="goback" class="add-button">返回文章列表</el-button>
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
        <el-button type="primary" @click="onSubmit('form')">保 存</el-button>
        <el-button @click="cancelSubmit">取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import hljs from 'highlight.js'
import { quillEditor } from 'vue-quill-editor'
import Article from '@/models/article'
import Kind from '@/models/kind'
import titleConfig from '@/utils/toolbar-title'
import toolbar from '@/utils/toolbar'

export default {
  created() {
    let id = this.$route.params.id;
    this.id = id;
    Article.show(id).then((res) => {
      this.form = { ...res.article };
      this.realKindId = res.article.kind_id;
      this.form.kind_id = res.article.kind;
    }).catch((e) => console.log(e))
    Kind.index().then((res) => {
      this.kinds = res.kinds
    }).catch((e) => console.log(e))
  },
  data() {
    return {
      id: 0,
      realKindId: 0,
      kinds: [],
      form: {
        title: '',
        kind_id: 0,
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
    goback() {
      this.$router.replace({ name: 'ArticleList' });
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const id = this.id;
          const params = this.form;
          if ((typeof this.form.kind_id) == 'string') {
            params.kind_id = this.realKindId;
          }
          Article.update(id, params).then((res) => {
            this.$message.success('修改成功')
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

<style lang="less" scoped>
.add-button {
  margin-bottom: 30px;
}

.quill-editor {
  line-height: 24px;
}
</style>