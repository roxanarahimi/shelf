<template>
  <div class="d-grid h-100 px-3">
    <div class="row p-0 m-0 mx-auto text-center align-self-center h-auto">
        <router-link class="btn btn-home text-light mb-2" style="background-color: #e70000" to="/customer">مشتری ها</router-link>
        <router-link class="btn btn-home text-light mb-2" style="background-color: #cc2323" to="/forms">فرم های من</router-link>
        <router-link class="btn btn-home text-light mb-2" style="background-color: #914242" to="/profile">پروفایل</router-link>
<!--        <router-link class="btn btn-home text-light mb-2" style="background-color: #6c757d" to="/login">خروج</router-link>-->
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import {onBeforeMount, onMounted} from "vue";
import App from "@/App";

export default {
  name: 'HomeView',
  setup(){
    onBeforeMount(()=>{
      App.setup().checkUser();
    })
  },
}
</script>
<style>
.btn-home {
  height: 50px;
  line-height: 35px;
  text-align: center;
  margin-top: 5px;

}

.btn-home a {
  text-align: center;


}
</style>