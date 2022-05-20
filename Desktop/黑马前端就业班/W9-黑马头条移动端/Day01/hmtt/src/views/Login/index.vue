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
    :rules="rules.mobile"
  />
  <van-field
    v-model="info.code"
    label="验证码"
    placeholder="请输入验证码"
    :rules="rules.code"
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
            },
            rules:{
                // 手机号验证规则
                mobile:[
                    { required: true, message: '请填写手机号' },
                    {pattern:/^1[2-9]\d{9}$/ ,message:'请输入正确的手机号'}
                    
                    ],
                // 验证码验证规则
                code:[
                    { required: true, message: '请填写验证码' },
                    {pattern: /^\d{6}$/,message:'请输入正确验证码'}
                    ]
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