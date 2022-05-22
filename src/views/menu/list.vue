<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="路径"
        width="180">
      </el-table-column>
      <el-table-column
        prop="level"
        label="等级">
      </el-table-column>
      <el-table-column
        prop="address"
        label="展示">
        <template  slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            active-color="#13ce66"
            inactive-color="gray">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleAdd(scope.row.id)">添加</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pages"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 添加 -->
    <el-dialog
      title="添加子菜单"
      :visible.sync="addDialogVisible"
      width="30%"
      :before-close="handleClose">

      <add :id="id" :level="level" @closeAdd="handleCloseAdd"></add>
    </el-dialog>

    <!-- 修改 -->
    <el-dialog
      title="修改菜单"
      :visible.sync="editDialogVisible"
      width="30%"
      :before-close="handleClose">

      <edit :id="id" @closeEdit="handleCloseEdit"></edit>
    </el-dialog>
  </div>
</template>

<script>
import {deleteById, fetchGet, fetchListByPage} from "@/api/menu";
import add from "@/views/menu/add";
import edit from "@/views/menu/edit";


export default {
  components: {
    add,
    edit
  },
  name: "list",
  data() {
    return {
      id:null,
      level: 2,
      editMenuForm: null,
      queryInfo: {
        name: null,
        path: null,
        level: 1,
        pageNum: 1,
        pageSize: 10
      },
      addDialogVisible: false,
      editDialogVisible: false,
      tableData: [],
      currentPage: 1,
      total: 0,
      pages: 0,
    }
  },

  created() {
    this.getMenuList();
  },
  methods: {
    getMenuList() {
      fetchListByPage(this.queryInfo).then(response => {
        const data = response.data;
        this.tableData = data.records;
        this.currentPage = data.current;
        this.total = data.total;
        this.pages = data.pageNum;
      })
    },
    handleAdd(id) {
      this.id = id;
      this.addDialogVisible = true;
    },
    handleCloseAdd() {
      this.addDialogVisible = false;
    },
    handleCloseEdit() {
      this.editDialogVisible = false;
    },
    handleEdit(id) {
      this.id = id;
      this.editDialogVisible = true;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
    },
    handleSizeChange(pageSize) {
      this.queryInfo.pageSize = pageSize;
      this.getMenuList();
    },
    handleCurrentChange(currentChange) {
      this.currentPage = currentChange;
      this.queryInfo.pageNum = currentChange;
      this.getMenuList();
    },
    handleDelete(id) {
      this.$confirm('确认删除？')
      .then(_ => {
        deleteById({"id" : id}).then(response => {
          if (response.code == 0) {
            this.getMenuList();
          }else {
            this.$message.error(response.msg);
          }
        })
      })
      .catch(_ => {});
    }
  }
}
</script>

<style scoped>

</style>
