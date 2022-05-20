<template>
<div>
    <!-- 导航栏 -->
  <van-nav-bar title="登录"/>

    <!-- 表单部分 -->
  <van-form @submit="onSubmit">
  <van-field
    v-model="info.mobile"
    label="手机号"
    placeholder="请输入手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
  <van-field
    v-model="info.code"
    label="验证码"
    placeholder="请输入验证码"
    :rules="[{ required: true, message: '请填写验证码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>

</div>
</template>

<script>
export default {
    data(){
        return {
            info:{
                mobile:"",
                code:""
            }
        }
    },
    methods:{
       onSubmit(){} 
    }

}
</script>

<style>

</style>