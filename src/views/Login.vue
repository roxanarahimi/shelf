<template>
  <div class="d-grid h-100 px-3">
    <div class="row text-start px-2 align-self-center">
      <b class="text-center">ورود کارشناس</b>
      <div class="col-12 px-1 ">
        <label for="mobile">شماره موبایل</label>
        <input type="text" class="form-control form-control-sm en" name="date" id="mobile" required>
      </div>
      <div class="col-12 px-1 ">
        <label for="password">رمز ورود</label>
        <input type="password" class="form-control form-control-sm en" name="date" id="password" required>
      </div>
      <div class="col-12  px-1 text-center mt-4">
        <BtnSubmit @click.prevent="login">
          ورود
        </BtnSubmit>
      </div>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, onMounted, ref} from "vue";
import App from "@/App";
import {useRouter} from "vue-router";
import BtnSubmit from "@/components/BtnSubmit";

export default {
  name: "Login",
  components: {BtnSubmit},
  setup(){
    const router = useRouter()
    const user = ref({});
    const visitor = ref({});
    const login = () => {
      // App.setup().EmptyFieldsCount()
      let emptyFieldsCount = App.setup().EmptyFieldsCount();
      if(emptyFieldsCount === 0){
        axios.post(App.setup().panelUrl+'api/visitor/login',{
          username: document.querySelector('#mobile').value,
          password: document.querySelector('#password').value,
        })
        .then((response)=>{
          console.log(response);
          localStorage.setItem('user',JSON.stringify(response.data.user));
          router.push({name: 'home'});
        })
        .catch((error)=>{console.error(error);})

      }
    }
    onMounted(()=>{
      if (JSON.parse(localStorage.getItem('user'))?.id){
        user.value = JSON.parse(localStorage.getItem('user'));
        visitor.value = JSON.parse(localStorage.getItem('user'));
        router.push({name: 'home'});
      }else{
        App.setup().visitor.value = {};
        localStorage.removeItem('user')
      }
    });

    return{
      user,login,router,visitor
    }
  },
}
</script>

<style scoped>

</style>