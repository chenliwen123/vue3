<template>
  <div class="login">
    <div class="login_card">
      <div class="login_card_title">Have an account?</div>
      <el-form
          ref="formRef"
          :model="numberValidateForm"
          label-width="0"
        >
          <el-form-item
            label=""
            prop="Username"
            :rules="[
              { required: true, message: 'age is required' },
              { type: 'number', message: 'age must be a number' },
            ]"
          >
            <el-input
              v-model="numberValidateForm.Username"
              type="text"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script setup>

import { reactive } from 'vue';
let numberValidateForm = reactive({Username:'',})

</script>

<style lang="scss" scoped>
.login{
  height: 100%;
  width: 100%;
  background: url(../images/bg.jpg);
  display: flex;
  align-items: center;
  justify-content: center;
  .login_card{
    width: 350px;
    .login_card_title{
      font-size:28px;
      font-family: "Lato", Arial, sans-serif;
      font-weight: 300;
      color: #fff;
    }
  }
}
</style>