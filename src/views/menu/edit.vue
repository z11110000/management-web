<template>
  <div>

    <el-form :model="editMenuForm" ref="editMenuForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="id">
        <el-input v-model="editMenuForm.id" disabled></el-input>
      </el-form-item>

      <el-form-item
        label="菜单名称"
        prop="name"
        :rules="[
          { required: true, message: '菜单名称不能为空'},
        ]"
      >
        <el-input type="name" v-model="editMenuForm.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="路径" prop="path">
        <el-input type="path" v-model="editMenuForm.path" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="等级" prop="level">
        <el-input type="level" v-model="editMenuForm.level" autocomplete="off" disabled></el-input>
      </el-form-item>

      <el-form-item label="排序" prop="sort">
        <el-input type="sort" v-model="editMenuForm.sort" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="父级id" prop="parentId">
        <el-input type="parentId" v-model="editMenuForm.parentId" autocomplete="off" disabled></el-input>
      </el-form-item>

      <el-form-item label="是否展示" :label-width="formLabelWidth">
        <el-switch
          v-model="editMenuForm.status"
          :active-value="1"
          :inactive-value="0"
          active-color="#13ce66"
          inactive-color="gray">
        </el-switch>
      </el-form-item>

      <el-form-item>
        <el-button @click="resetForm('editMenuForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('editMenuForm')">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import {fetchGet} from "@/api/menu";

export default {

  props: ['id'],
  data() {
    return {
      formLabelWidth: '100px',
      editMenuForm: {
        id: null,
        name: '',
        path: '',
        status: 1,
        level: 1,
        sort: 1,
        parentId: 0,
      }
    }
  },
  created() {
    this.getMenu(this.id)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getMenu(id) {
      fetchGet({"id" : id}).then(response => {
        if (response.code == 0) {
          this.editMenuForm = response.data
        } else {
          this.$message.error(response.msg)
        }
      })
    }


  }
}
</script>
