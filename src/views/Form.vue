<template>
  <div  class="text-start px-4">
    <b class="mb-4 text-start d-block ">فرم شلف مانیتورینگ</b>
    <div  v-if="form.id">
      <div class="d-flex justify-content-end mb-3">
        <b>تاریخ:</b>
        <p class="d-inline-block">{{ form.created_at }}</p>
      </div>
      <customer-info v-if="customer.id" :customer="customer"/>
      <div class="mt-3 " v-if="form.id">
        <b> برند های موجود</b>
        <form-section v-for="(item,index) in form.sections " :section="item" :index="index"/>
      </div>
      <div class="px-0">
        <label>توضیحات</label>
        <p>{{ form.description }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute, useRouter} from "vue-router";
import FormSection from "@/components/FormSection";
import CustomerInfo from "@/components/CustomerInfo";

export default {
  name: "Form",
  components: {CustomerInfo, FormSection},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const visitor = JSON.parse(localStorage.getItem('user'));
    const emptyFieldsCount = ref(0);
    const customer = ref({});
    const form = ref({})
    const findCustomer = (id) => {
      axios.get(panelUrl + 'customer/' + id)
          .then((response) => {
            customer.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
    const loadForm = () => {
      axios.get(panelUrl + 'form/'+route.params.id)
          .then((response) => {
            form.value = response.data;
          }).then((response) => {
        findCustomer(form.value.customer.id);
      }).catch((error) => {
        console.error(error)
      });
    }
    onBeforeMount(() => {
      App.setup().checkUser();
      loadForm();
    });

    return {
      visitor, router,route, emptyFieldsCount,loadForm, form,customer,findCustomer
    }
  }
}
</script>

<style scoped>
label {
  font-size: 12px;
}
</style>