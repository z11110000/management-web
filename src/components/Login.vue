<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png"/>
      </div>

      <el-form label-width='0px' ref="loginFormRef" class="login_form" :model="user">
        <el-form-item>
          <el-input prefix-icon="el-icon-user-solid" v-model="user.username"/>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock" type="password" v-model="user.password"/>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info" @click="resetUser">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    resetUser() {
      this.$nextTick(() => {
        this.user.username = '';
        this.user.password = '';
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
