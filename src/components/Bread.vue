<template>
  <div>
    <el-breadcrumb separator="/">
<!--      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->

      <el-breadcrumb-item
        v-for="(v, i) in breadcrumbList"
        :key = i
        :to = v.meta.path
      >
      {{v.meta.title}}
      </el-breadcrumb-item>

    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Bread",
  data() {
    return {
      breadcrumbList: []
    }
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      if (!this.isHome(matched[0])) {
        matched = [].concat(matched)
      }
      this.breadcrumbList = matched;
    }
  }

}
</script>

<style scoped>

</style>
