<template>
  <LoginAndRegister>
    <template v-slot="slotProps">
      <div class="wrapper__btn" @click="handleLogin(slotProps)">登录</div>
      <div class="wrapper__link">立即注册</div>
    </template>
  </LoginAndRegister>
  <Toast :show="show" :msg="msg" />
</template>

<script>
import LoginAndRegister from '../../components/LoginAndRegister'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request.js'
import { reactive, toRefs } from 'vue'
import Toast from '../../components/ToastComponent'

export default {
  components: {
    LoginAndRegister,
    Toast
  },
  setup () {
    const router = useRouter()
    const toastData = reactive({ show: false, msg: '' })
    const { show, msg } = toRefs(toastData)
    const handleLogin = async (data) => {
      try {
        const result = await post('/api/user/login8',
          {
            usrname: data.username,
            password: data.password
          })
        if (result.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'home' })
        } else {
          toastData.show = true
          toastData.msg = result.desc
          setTimeout(() => {
            toastData.show = false
            toastData.msg = ''
          }, 2000)
        }
      } catch {
        toastData.show = true
        toastData.msg = '请求失败'
        setTimeout(() => {
          toastData.show = false
          toastData.msg = ''
        }, 2000)
      }
    }
    return {
      handleLogin,
      show,
      msg
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/viriables.scss';
  .wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);

    &__img {
      display: block;
      margin: 0 auto .4rem auto;
      width: .66rem;
      height: .66rem;
    }

    &__div {
      height: .48rem;
      margin: 0 .4rem .16rem .4rem;
      padding: 0 .16rem;
      background-color: #F9F9F9;
      border: 1px solid rgba(0,0,0,0.10);
      border-radius: .6rem;

      &__input {
        width: 100%;
        line-height: .48rem;
        border: none;
        outline: none;
        background: none;
        font-size: .16rem;
        color: $content-notice-fontcolor;

        &::placeholder {
          color: $content-notice-fontcolor;
        }
      }
    }

    &__btn {
      margin: .32rem .4rem .16rem .4rem;
      line-height: .48rem;
      background: #0091FF;
      box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
      border-radius: .04rem;
      color: $bgColor;
      font-size: .16rem;
      text-align: center;
    }

    .wrapper__link {
      text-align: center;
      font-size: .14rem;
      color: $content-notice-fontcolor;
    }
  }
</style>
