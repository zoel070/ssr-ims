<template>
  <div class="mainer">
    <el-button type="primary" @click="addArticle" class="add-button">新建文章</el-button>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="id" label="ID" align="center">
      </el-table-column>
      <el-table-column prop="title" label="标题" align="center">
      </el-table-column>
      <el-table-column prop="kind" label="分类" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="scope">
          <el-button @click="modify(scope)" type="text" size="small">
            <i class="el-icon-edit"></i>
            编辑
          </el-button>
          <el-button @click="deleteRow(scope)" type="text" size="small">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Article from '@/models/article';

export default {
  created() {
    this.getArticle();
  },
  data() {
    return {
      dialogModify: false,
      dialogAdd: false,
      beforeAdd: {},
      beforeModify: {},
      tableData: []
    }
  },
  methods: {
    getArticle() {
      Article.index().then(res => {
        console.log("🚀 ~ file: ArticleList.vue:47 ~ Article.index ~ res:", res)
        this.tableData = res.articles;
      })
    },
    modify(scope) {
      this.$router.push({ name: 'ArticleEdit', params: { id: scope.row.id } });
    },
    deleteRow(scope) {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = scope.row.id;
        return Article.delete(id)
      }).then((res) => {
        return this.getArticle()
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    cancelModify() {
      this.dialogModify = false;
    },
    confirmModify() {
      this.tableData[this.beforeNum].name = this.beforeModify.name;
      this.dialogModify = false;
    },
    addArticle() {
      this.$router.push({ name: 'ArticleCreate' })
    },
    cancelAdd() {
      this.beforeAdd = {};
      this.dialogAdd = false;
    },
    confirmAdd() {
      this.tableData.push(this.beforeAdd);
      this.beforeAdd = {};
      this.dialogAdd = false;
    },
  }
}
</script>

<style lang="less" scoped>
.add-button {
  margin-bottom: 30px;
}
</style>