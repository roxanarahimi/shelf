<template>
  <div class="d-grid h-100 px-3" style="">
    <b class=" text-start d-block px-3 align-self-start">پروفایل من</b>

    <div class="row p-0 m-0 justify-content-center align-self-start h-auto px-5">
      <i class="bi bi-person-circle text-center avatar"></i>
      <div class="d-flex justify-content-between my-2">
        <b>نام کارشناس</b>
        <p>{{ visitor.name }}</p>
      </div>
      <div class="d-flex justify-content-between my-2">
        <b>تلفن</b>
        <p>{{ visitor.mobile }}</p>
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
    const visitor = JSON.parse(localStorage.getItem('user'));

    onBeforeMount(()=>{
      App.setup().checkUser();
    })
  return{
      logout,router, visitor
  }
  },
}
</script>

<style scoped>
.avatar {
  font-size: 60px;
  color: #e70000 !important;

}
</style>