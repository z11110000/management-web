<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png"/>
      </div>

      <el-form label-width='0px' ref="loginFormRef" class="login_form" :model="user">
        <el-form-item
          prop="username"
          :rules="[
          {require: true, message: '用户名不能为空'}
        ]">
          <el-input prefix-icon="el-icon-user-solid" v-model="user.username"/>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[
          {require: true, message: '密码不能为空'}
        ]">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="user.password"/>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login('loginFormRef')">登录</el-button>
          <el-button type="info" @click="resetUser('loginFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginPassword } from "@/api/user";

export default {
  data() {
    return {
      user: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    resetUser(formName) {
      this.$refs[formName].resetFields();
    },
    login: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginPassword(this.user).then(response => {
            if (response.data.code == 0) {
              this.$router.push("/home");
            }else {
              this.$message.error(response.data.msg);
            }
          });
        } else {
          return false;
        }
      });
    }
  },
}
</script>

<style lang="less" scoped>
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
  }
  .login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar_box{
      height: 130px;
      width: 130px;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #eee;
      }

    }
    .login_form{
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .btns{
      display: flex;
      justify-content: center;
    }
  }
</style>
