<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
        <h2>后台管理系统</h2>
        <el-image  style="width: 180px; height: 180px" :src="require('@/assets/login_wx.png')"></el-image>
        <p>欢迎添加个人微信进行交流</p>
    </el-col>
    <el-col :span="1">
      <el-divider class="divider" direction="vertical"></el-divider>
    </el-col>
    <el-col :span="6">
      <el-form
          :model="loginForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username" style="width: 380px;">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px;">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" style="width: 380px;">
          <el-input v-model="loginForm.code" style="width: 172px; float: left"></el-input>
          <el-image :src="captchaImg" class="captchImg"></el-image>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>

import axios from "../utils/axios";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        token:'',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          {
            min: 5,
            max: 5,
            message: '长度为5个字符',
            trigger: 'blur',
          },
        ],
      },
      captchaImg:null,
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/login',this.loginForm).then(res=>{
            console.log(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    getCaptcha(){
      axios.get('/captcha').then(res=>{

        console.log(res)
        this.loginForm.token=res.data.token
        this.captchaImg=res.data.captchaImg
      })
    },
  },
  created() {
    this.getCaptcha()
  }

}
</script>

<style scoped>
  .el-divider{
    height: 200px;
  }
  .row-bg {
    background-color: #fafafa;
    height: 100%;
    display: flex;
    align-items: center;   /*上下居中*/
    text-align: center;
  }
  .captchImg{
    float: left;
    margin-left: 8px;
    border-radius: 4px;
  }
</style>
