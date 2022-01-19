<template>
  <el-row class="row-bg" justify="center">
    <el-col :span="6">
        <div>后台管理系统</div>
        <el-image :src="require('@/assets/wx.png')"></el-image>
    </el-col>
    <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6">
      <div>
        用户名：<input type="text"> <br>
        密  码：<input type="password">
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>