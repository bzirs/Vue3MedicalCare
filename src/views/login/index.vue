<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { mobileRules, passwordRules } from '@/utils/rules'
import { showToast } from 'vant'

// 表单数据
const formData = ref<{
  mobile: number,
  password?: string,
  code?: number
}>({
  mobile: 13230000066,
  password: 'abc12345'
})

// 是否同意协议
const agree = ref(false)

// 登录选项
const passwdLogin = ref(true)

const handleSwitchLogin = () => {

  passwdLogin.value = !passwdLogin.value
  console.log(111, passwdLogin.value);

}

const handleSubmit = () => {
  console.log('登录');

  if (!agree.value) return showToast('请勾选我已同意')
}

const loginTitle = computed(() => passwdLogin.value ? '密码' : '验证码')
const loginValue = computed(() => passwdLogin.value ? '短信验证码' : '输入密码')
</script>

<template>
  <div class="login-page">
    <cp-nav-bar right-text="注册" @click-right="$router.push('/register')"></cp-nav-bar>
    <!-- 头部 -->
    <div class="login-head">
      <h3>{{ loginTitle }}登录</h3>
      <a href="javascript:;" @click="passwdLogin = !passwdLogin">
        <span>{{ loginValue }}登录</span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- 表单 -->
    <van-form class="van-form" autocomplete="off" @submit="handleSubmit">
      <van-field placeholder="请输入手机号" v-model="formData.mobile" :rules="mobileRules" type="tel"></van-field>
      <van-field v-if="passwdLogin" placeholder="请输入密码" v-model="formData.password" :rules="passwordRules"
        type="password"></van-field>
      <van-field v-else placeholder="短信验证码" v-model="formData.code">
        <template #button>
          <span class="btn-send">发送验证码</span>
        </template>
      </van-field>
      <div class="cp-cell">
        <van-checkbox class="van-checkbox" v-model="agree">
          <span>我已同意</span>
          <a href="javascript:;">用户协议</a>
          <span>及</span>
          <a href="javascript:;">隐私条款</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button block round type="primary" native-type="submit">登 录</van-button>
      </div>
      <div class="cp-cell">
        <a href="javascript:;">忘记密码？</a>
      </div>
    </van-form>
    <!-- 底部 -->
    <div class="login-other">
      <van-divider>第三方登录</van-divider>
      <div class="icon">
        <img src="https://cp.itheima.net/assets/qq.7e9221ab.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  &-page {
    padding-top: 46px;
  }

  &-head {
    display: flex;
    padding: 30px 30px 50px;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;

    h3 {
      font-weight: normal;
      font-size: 24px;
    }

    a {
      font-size: 15px;
    }
  }

  &-other {
    margin-top: 60px;
    padding: 0 30px;

    .icon {
      display: flex;
      justify-content: center;

      img {
        width: 36px;
        height: 36px;
        padding: 4px;
      }
    }
  }
}

.van-form {
  padding: 0 14px;

  .cp-cell {
    height: 52px;
    line-height: 24px;
    padding: 14px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .van-checkbox {
      a {
        color: var(--cp-primary);
        padding: 0 5px;
      }
    }
  }

  .btn-send {
    color: var(--cp-primary);

    &.active {
      color: rgba(22, 194, 163, 0.5);
    }
  }
}
</style>
