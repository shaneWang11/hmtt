<template>
<div>
    <!-- 导航栏 -->
  <van-nav-bar title="登录"/>

    <!-- 表单部分 -->
    <!-- 
        sumit 事件：当提交表单时触发
        满足：1、点击提交按钮，2、还要满足表单验证通过
     -->
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
    <van-button :loading ="isloading" loading-text="加载中..." round block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>

</div>
</template>

<script>
import { loginAPI } from "@/api";

export default {
    data(){
        return {
            //控制加载状态
            isloading:false,

            //双向绑定输入框
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
       async onSubmit(){
           // 一点击就要显示加载状态
           this.isloading = true

           // 当这个方法一旦触发就意味着点击登录且验证通过了，克直接发请求做登录
           try{
               // this info = {mobile:this.info.mobile,code:this.info.code}
           let res = await loginAPI(this.info)

           this.$store.commit('changeToken',res.data.data)

        //    alert('登录成功')
            this.$toast.success('登录成功')

            //登录成功后跳转到layout页面
            this.$router.replace('/layout/home')


           }catch{
            //    alert('验证码错误')
            this.$toast.fail('验证码错误')

           }

           this.isloading = false

       } 
    }

}
</script>

<style>

</style>