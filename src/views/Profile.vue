<template>
  <div class="d-grid h-100 px-4" style="">
    <b class=" text-start d-block px-3 align-self-start">پروفایل من</b>

    <div class="row p-0 m-0 justify-content-center align-self-start h-auto">
      <i class="bi bi-person-circle text-center avatar"></i>
      <div class="d-flex justify-content-between">
        <b>نام کارشناس</b>
        <p>رکسانا رحیمی</p>
      </div>
      <div class="d-flex justify-content-between">
        <b>تلفن</b>
        <p>09121111111</p>
      </div>
      <div class="d-flex justify-content-between">
        <b>ایمیل</b>
        <p>afdsfdfs@a.com</p>
      </div>

      <div class="mt-4 text-center">
        <button @click="logout" class="btn btn-secondary">خروج از حساب</button>
      </div>

    </div>
  </div>

</template>

<script>
import {onBeforeMount} from "vue";
import App from "@/App";
import {useRouter} from "vue-router";

export default {
  name: "Profile",
  setup(){
    const router = useRouter()
    const logout = ()=>{
      document.querySelector('#visitor-name').innerHTML = '';
      localStorage.removeItem('user');
      router.push({name: 'login'});
    }
    onBeforeMount(()=>{
      App.setup().checkUser();
    })
  return{
      logout,router
  }
  },
}
</script>

<style scoped>
.avatar {
  font-size: 50px;
  color: #e70000 !important;

}
</style>