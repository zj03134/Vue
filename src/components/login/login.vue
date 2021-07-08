<template>
  <div class="login-wrap">
    <el-form class="login-form" :label-position="formdata.position" label-width="80px" :model="formdata">
      <h1>用户登录</h1>
      <el-form-item label="账户">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formdata: {
          position: 'top',
          username: '',
          password: ''
        }
      }
    },
    methods: {
      // 登录请求
      handleLogin() {
        this.$http.post('login', this.formdata).then((res) => {
          //如果登录成功就跳转,提示登录成功，
          //不成功的话就提示登录失败
          //对象的结构赋值 
          const {
            data,
            meta: {
              msg,
              status
            }
          } = res.data
          //   {msg,status}={msg:"11",status:200}
          if (status === 200) {
            this.$router.push({
                name: 'home'
              }),
              this.$message.success(msg);

          } else {
            this.$message.error(msg);

          }
        })
      }
    }
  }

</script>
<style lang='' scoped>
  .login-wrap {
    height: 100%;
    background: #324152;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
  }

  .login-btn {
    width: 100%;
  }

</style>
