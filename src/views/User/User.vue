<template>
  <div class="user">
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="登录">
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field 
          v-model="password" 
          type="password" 
          label="密码" 
          placeholder="请输入密码" 
          required />
      <van-button type="primary" size="large" @click="handleLogin">登录</van-button>
      </van-tab>
      <van-tab title="注册">
         <van-field
          v-model="username"
          required
          clearable
          label="用户名"

          placeholder="请输入用户名"
        />
        <van-field 
          v-model="password" 
          type="password" 
          label="密码" 
          placeholder="请输入密码" 
          required />
        <van-field 
          v-model="password" 
          type="password" 
          label="密码" 
          placeholder="请再次输入密码" 
          required />
          <van-button type="primary" size="large" @click="handleRegister">注册</van-button>
      </van-tab>
</van-tabs>
   
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      username: "",
      password: "",
      sms:'',
      active:1
    };
  },
  methods:{
    usernameValidate(){
        const username = this.username
        if( username ==='' ){
            return this.$toast("请输入用户名")
        }
       
    },
    passwordValidate(){
         const password = this.password
          if( password ==='' ){
            return this.$toast("密码不能为空")
        }
    },
    handleLogin(){
       this.usernameValidate()
    },
    handleRegister(){
       this.passwordValidate()
    },
  },
  components: {}
};
</script>
<style scoped lang="less">
  .user {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-tabs{
      height: 320px;
    }
  }
</style>
