<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#409BFF"
              :unique-opened="true"
              :router="true"
              :default-active="activePath">
              <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item
                  :index="child.path"
                  v-for="child in item.children"
                  @click="saveActivePath(child.path)">
                  <template slot="title">
                    <i class="el-icon-menu" />
                    <span>{{child.name}}</span>

                  </template>
                </el-menu-item>
              </el-submenu>
            </el-menu>

      </el-aside>
      <el-main>
        <Bread></Bread>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {fetchList, fetchListAndChildren} from "@/api/menu";
import Bread from "@/components/Bread";

export default {
  data() {
    return {
      menuList : [],
      activePath: '',
    }
  },
  created() {
    this.getMenuList();
  },
  components: {
    Bread
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    getMenuList() {
      fetchListAndChildren().then(response => {
        this.menuList = response.data;
      })
    },
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    saveActivePath(activePath) {
      this.activePath = activePath;
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    font-size: 20px;
    color: #fff;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }
  .el-aside{
    background-color: #333744;
    .el-menu{
      border-right: none;
    }
  }
  .el-main{
    background-color: #eaedf1;
  }
  .home-container{
    height: 100%;
  }
  .el-card{
    margin-bottom: 10px;
  }
</style>
