<template>
  <div>
    <el-button type="primary"  @click="dialogVisible  = true">添加</el-button>
    <list></list>

    <el-dialog
      title="添加菜单"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">

      <add @closeDia="handlerCloseDia"></add>
    </el-dialog>
  </div>
</template>


<script>
  import list from "@/views/menu/list"
  import add from "@/views/menu/add"


  export default {
    components: {
      list,
      add
    },

    data() {
      return {
        dialogVisible : false,
      }
    },

    created() {
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
      },
      handlerCloseDia() {
        this.dialogVisible = false;
      }
    }
  }
</script>

<style>
.el-button{

}
</style>
