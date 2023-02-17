<script setup lang='ts'>
// import { useUser } from './stores/modules/user';
import { useUser } from './stores/export.global';
import type { User } from './types/user';
import { request } from '@/api'
const userStore = useUser()
const btn = () => {
  const userItem: User = {
    token: '22222',
    id: '11',
    account: '234',
    mobile: '234',
    avatar: '234234'
  }
  userStore.setUser(userItem)
  // userStore.removeUser()
}

const getUserInfo = async () => {
  const res = await request('/patient/myUser')
  console.log(res)
}

// 测试，响应拦截器，出现非10000的情况，和返回剥离后的数据
const login = async () => {
  const res = await request<User>('/login/password', 'POST', {
    mobile: '13211112222',
    // 密码 abc123456 测试：出现非10000的情况
    password: 'abc12345'
  })
  console.log(res);

  userStore.setUser(res.data)
}
</script>
<template>
  <div>
    御剑乘风来,除魔天地间!===vue3
    <van-button type="primary" @click="btn">主要按钮</van-button>
    <van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
    <van-button type="primary" @click="login">登录</van-button>
  </div>
</template>
<style lang='scss'  scoped></style>