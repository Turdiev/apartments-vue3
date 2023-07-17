<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="custom-form"
    label-position="top"
  >
    <el-form-item
      label="Ваш email"
      prop="email"
    >
      <el-input
        v-model="ruleForm.email"
      />
    </el-form-item>
    <el-form-item
      label="Ваш телефон"
      prop="phone"
    >
      <el-input
        v-model="ruleForm.phone"
        @input="formatPhoneNumber"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm(ruleFormRef)"
      >
        Отправить
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {ref, reactive} from "vue";
import {useApartment} from "@/store";

const store = useApartment()
const ruleFormRef = ref(null)
const ruleForm = reactive({
  email: '',
  phone: ''
})


const validateEmail = (rule, value, callback) => {
  const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (!value.match(regExp)) {
    callback(new Error('Введен не верный формат адреса'))
  } else {
    callback()
  }
}
const validatePhone = (rule, value, callback) => {
  const regExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/

  if (!value.match(regExp)) {
    callback(new Error('Введен не верный номер'))
  } else {
    callback()
  }
}

const rules = reactive({
  email: [
    { required: true, message: 'Введите email', trigger: 'blur' },
    {validator: validateEmail, trigger: 'blur'},
  ],
  phone: [
    { required: true, message: 'Введите номер телефона', trigger: 'blur' },
    {validator: validatePhone, trigger: 'blur'},
  ],
})

const formatPhoneNumber = () => {
  // Удаление всех символов, кроме цифр
  let cleanedNumber = ruleForm.phone.replace(/\D/g, '');

  if (cleanedNumber.length > 0 && cleanedNumber.charAt(0) === '7') {
    cleanedNumber = cleanedNumber.substring(1);
  }

  // Форматирование номера в требуемый формат
  let formattedNumber = '';
  if (cleanedNumber.length > 0) {
    formattedNumber += '+7 (' + cleanedNumber.substring(0, 3) + ')';
  }
  if (cleanedNumber.length > 3) {
    formattedNumber += ' ' + cleanedNumber.substring(3, 6);
  }
  if (cleanedNumber.length > 6) {
    formattedNumber += '-' + cleanedNumber.substring(6, 8);
  }
  if (cleanedNumber.length > 8) {
    formattedNumber += '-' + cleanedNumber.substring(8, 10);
  }

  // Присваивание отформатированного номера переменной
  ruleForm.phone = formattedNumber;
}

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      store.setStatusForm(true)
    } else {
      console.log('error submit!', fields)
      store.setStatusForm(false)
    }
  })
}

</script>

<style lang="scss">
.custom-form {
  & .el-form-item__label {
    font-size: 12px;
    font-weight: 400;
    color: $gray-700;
  }

  & .el-button {
    width: 412px;
    height: 40px;
    padding: 13px 34px 13px 34px;
    border-radius: 30px;
    background: $yellow;
    border: $yellow;
    margin-top: 12px;
  }
}
</style>