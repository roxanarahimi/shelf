<template>
  <div class="">
    <b class="mb-5 text-start d-block px-3">فرمهای من</b>
    <div class="d-flex justify-content-between px-4 mb-3">
      <b>شماره مشتری</b>
      <b>تاریخ</b>
    </div>
    <div v-for="(item,index) in visitor.forms" :class="{'bg-light': index%2 == 0}" class="d-flex justify-content-between">
      <router-link :to="'/form/'+item.id" class="w-100 d-flex justify-content-between p-4">
        <div>12345678910</div>
        <div>1403/05/10</div>
      </router-link>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute} from "vue-router";

export default {
  name: "Forms",
  setup(){
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const visitor = ref({});//JSON.parse(localStorage.getItem('user'))
    const reloadVisitor = () => {
      axios.get(panelUrl + 'visitor/' + JSON.parse(localStorage.getItem('user')).id)
          .then((response) => {
            visitor.value = response.data;
            localStorage.setItem('user',JSON.stringify(response.data));
          }).catch((error) => {
        console.error(error)
      });
    }

    onBeforeMount(()=>{
      App.setup().checkUser();
      reloadVisitor();
    });
    return{
      visitor,route, panelUrl, reloadVisitor
    }
  },
}
</script>

<style scoped>

</style>