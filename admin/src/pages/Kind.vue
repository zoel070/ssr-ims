<template>
  <div class="mainer">
    <el-button type="primary" @click="addKind" class="add-button">添加分类</el-button>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="id" label="ID" align="center">
      </el-table-column>
      <el-table-column prop="kind" label="分类名称" align="center">
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
    <el-dialog title="分类修改" :visible.sync="dialogModify" width="30%">
      <el-form label-position="top" label-width="80px" :model="beforeModify">
        <el-form-item label="ID">
          <el-input v-model="beforeModify.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="分类名称">
          <el-input v-model="beforeModify.kind"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="cancelModify()">取 消</el-button>
        <el-button type="primary" @click="confirmModify()">保 存</el-button>
      </span>
    </el-dialog>
    <el-dialog title="分类添加" :visible.sync="dialogAdd" width="30%">
      <el-form label-position="top" label-width="80px" :model="beforeAdd">
        <el-form-item label="分类名称">
          <el-input v-model="beforeAdd.kind"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="cancelAdd()">取 消</el-button>
        <el-button type="primary" @click="confirmAdd()">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Kind from '@/models/kind';

export default {
  created() {
    this.getKind();
  },
  data() {
    return {
      dialogModify: false,
      dialogAdd: false,
      beforeAdd: {},
      beforeModify: {},
      tableData: [],
    }
  },
  methods: {
    getKind() {
      Kind.index().then(res => {
        this.tableData = res.kinds;
      })
    },
    modify(scope) {
      this.beforeModify = { ...scope.row };
      this.dialogModify = true;
    },
    deleteRow(scope) {
      this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = scope.row.id;
        return Kind.delete(id)
      }).then((res) => {
        return this.getKind()
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
      const id = this.beforeModify.id;
      const params = {
        kind: this.beforeModify.kind,
      }
      Kind.update(id, params).then(res => {
        this.dialogModify = false;
        this.getKind();
      }).catch(e => console.log(e, 444))
    },
    addKind() {
      this.dialogAdd = true;
    },
    cancelAdd() {
      this.beforeAdd = {};
      this.dialogAdd = false;
    },
    confirmAdd() {
      const params = {
        kind: this.beforeAdd.kind,
      }
      Kind.insert(params).then(res => {
        this.dialogAdd = false;
        this.beforeAdd = {};
        this.getKind();
      }).catch(e => console.log(e, 444))
    },
  }
}
</script>

<style lang="less" scoped>
.add-button {
  margin-bottom: 30px;
}
</style>