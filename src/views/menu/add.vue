<template>
  <div>

    <el-form :model="addMenuForm" ref="addMenuForm" label-width="100px" class="demo-ruleForm">
      <el-form-item
        label="菜单名称"
        prop="name"
        :rules="[
          { required: true, message: '菜单名称不能为空'},
        ]"
      >
        <el-input type="name" v-model="addMenuForm.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="路径" prop="path">
        <el-input type="path" v-model="addMenuForm.path" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="排序" prop="sort">
        <el-input type="sort" v-model="addMenuForm.sort" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="是否展示" :label-width="formLabelWidth">
        <el-switch
          v-model="addMenuForm.status"
          :active-value="1"
          :inactive-value="0"
          active-color="#13ce66"
          inactive-color="gray">
        </el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('addMenuForm')">提交</el-button>
        <el-button type="info" @click="resetForm('addMenuForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { add } from "@/api/menu";

export default {
  props:['id', 'level'],

  data() {
    return {
      formLabelWidth: '100px',
      addMenuForm: {
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
    this.addMenuForm.parentId = this.id;
    this.addMenuForm.level = this.level;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          add(this.addMenuForm).then(reponse => {
            if (reponse.code == 0) {
              this.$emit("closeDia");
              this.$emit("closeAdd");
            }else {
              this.$message.error(reponse.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
