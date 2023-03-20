<template>
  <div class="loginbg">
    <div class="login_card">
      <div class="login_card_title">Have an account?</div>
      <el-form ref="ruleFormRef" :model="numberValidateForm" label-width="0">
        <el-form-item
          label=""
          prop="Username"
          :rules="[{ required: true, message: 'Username is required' }]"
          class="login_card_input"
        >
          <el-input
            v-model="numberValidateForm.Username"
            type="text"
            placeholder="Username"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label=""
          prop="Password"
          :rules="[{ required: true, message: 'Password is required' }]"
          class="login_card_input"
        >
          <el-input
            v-model="numberValidateForm.Password"
            type="password"
            placeholder="Password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login_card_SIGNIN"
            @click="submitForm(ruleFormRef)"
            >SIGN IN</el-button
          >
        </el-form-item>
        <el-form-item class="login_card_color">
          <el-checkbox
            v-model="numberValidateForm.checked"
            label="Remember Me"
            size="large"
          />
          <span class="createAccound"
            >Create new account<el-icon><Right /></el-icon
          ></span>
        </el-form-item>
      </el-form>
      <div class="forgotPassword">
        <div class="forgotPassword_top">Forgot Password</div>
        <div class="forgotPassword_sign">— Or Sign In With —</div>
      </div>
      <div class="button_list">
        <el-button class="button_list_item">Facebook</el-button>
        <el-button class="button_list_item">Twitter</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { JSEncrypt } from 'jsencrypt';
import { doLogin, getPublicKey } from '@/api/';
import { useUserStore } from '@/store/user';

let numberValidateForm = reactive({
  Username: '',
  checked: false,
  Password: '',
});
let ruleFormRef = ref();

/**@function 密码加密 */
const setEncrypt = (publicKey, str) => {
  const jsencrypt = new JSEncrypt();
  jsencrypt.setPublicKey(publicKey);
  return jsencrypt.encrypt(str);
};

const submitForm = (ruleFormRef) => {
  ruleFormRef.validate(async (val) => {
    if (val) {
      const publicKey = await getPublicKey();
      let { code, data } = await doLogin({
        userName: numberValidateForm.Username,
        passWord: setEncrypt(publicKey, numberValidateForm.Password),
      });
      if (code === 200) {
        let { setUserinfo, getUserinfo } = useUserStore();
        setUserinfo(data);
        console.log(getUserinfo());
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.loginbg {
  --el-color-primary: #fbceb5;

  height: calc(100% - 100px);
  width: 100%;
  background: url(../images/bg.jpg) no-repeat;
  background-size: 100%;
  background-position: center center;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba($color: #000000, $alpha: 0.3);
    z-index: -1;
  }
  .login_card {
    max-width: 350px;
    height: 25%;
    .login_card_title {
      font-size: 28px;
      font-weight: 300;
      color: #fff;
      text-align: center;
      margin-bottom: 15px;
    }
    .login_card_input {
      :deep(.el-input__wrapper) {
        box-shadow: none;
      }
      :deep(.el-input__wrapper) {
        background: transparent;
        border: none;
        height: 50px;
        color: white !important;
        border: 1px solid transparent;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 40px;
        padding-left: 20px;
        padding-right: 20px;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
      }

      :deep(.el-input__wrapper:hover, .el-input__wrapper:focus) {
        background: transparent;
        outline: none;
        -webkit-box-shadow: none;
        border-color: rgba(255, 255, 255, 0.4);
      }
      :deep(input::placeholder) {
        color: #fff;
      }
      :deep(.el-input__inner) {
        color: #fff;
      }
    }
    .login_card_SIGNIN {
      width: 100%;
      background: var(--el-color-primary);
      border: 1px solid var(--el-color-primary);
      color: #000;
      cursor: pointer;
      border-radius: 40px;
      -webkit-box-shadow: none;
      box-shadow: none;
      font-size: 15px;
      text-transform: uppercase;
      height: 50px;
    }
    .login_card_color {
      :deep(.el-form-item__content) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      :deep(.el-checkbox__label) {
        color: var(--el-color-primary);
      }
      :deep(.el-checkbox__inner) {
        --el-checkbox-bg-color: rgba(255, 255, 255, 0.1);
        --el-checkbox-input-border: transparent;
      }
      :deep(.el-checkbox.el-checkbox--large .el-checkbox__inner) {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        transition: none;
      }
      :deep(.el-checkbox__inner::after) {
        transition: none;
        height: 11px;
        left: 6px;
        width: 5px;
        border: 3px solid var(--el-checkbox-checked-icon-color);
        border-left: 0;
        border-top: 0;
      }
    }
    .createAccound {
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #0056b3;
      }
    }
  }
  .forgotPassword {
    display: flex;
    flex-direction: column;
    .forgotPassword_top {
      cursor: pointer;
    }
    & > div {
      text-align: center;
      color: #fff;
    }
  }
  .button_list {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    .button_list_item {
      width: 170px;
      height: 47px;
      background: #fff;
      color: #000;
      transform: 0.3s all ease;
      &:hover {
        background: #000;
        border: #000;
        color: #fff;
      }
    }
  }
}
</style>
