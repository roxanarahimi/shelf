<template>
  <div class="">
    <b class="mb-5 text-start d-block px-3">فرمهای من</b>
    <div class="d-flex justify-content-between px-4 mb-3">
      <b>شماره مشتری</b>
      <b>تاریخ</b>
    </div>
    <div v-for="(item,index) in forms" :class="{'bg-light': index%2 == 0}" class="d-flex justify-content-between">
      <router-link :to="'/form/'+item.id" class="w-100 d-flex justify-content-between p-4">
        <div>{{ item.customer.code }}</div>
        <div>{{ item.created_at }}</div>
      </router-link>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "Forms",
  setup(){
    const route = useRoute();
    const router = useRouter();
    const panelUrl = App.setup().panelUrl;
    const visitor = JSON.parse(localStorage.getItem('user'));
    const forms = ref([]);

    onBeforeMount(()=>{
      App.setup().checkUser();
      axios.get(panelUrl+'api/forms/visitor/'+visitor.id)
      .then((response)=>{
        forms.value = response.data;
      }).catch((error)=>{console.error(error)})

    });
    return{
      visitor,route, panelUrl, router,forms
    }
  },
}
</script>

<style scoped>

</style>