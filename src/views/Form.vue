<template>
  <div class="text-start px-4">
    <b class="mb-4 text-start d-block ">فرم شلف مانیتورینگ</b>
    <div class="d-flex justify-content-end mb-3">
      <b>تاریخ:</b>
      <p class="d-inline-block">1403/05/10</p>
    </div>
    <customer-info v-if="customer.id" :customer="customer" />
    <div class="mt-3 ">
      <b> برند های موجود</b>
      <form-section v-for="(item,index) in brands " :info="item" :index="index" />
    </div>
    <b @click="addBrand" class="cursor-pointer">افزودن <i class="bi bi-plus-circle-fill"></i></b>
    <div class="px-0">
      <label for="description">توضیحات</label>
      <textarea id="description" class="form-control form-control-sm" rows="3"></textarea>
    </div>
    <div class="px-0 my-4">
      <button class="btn" style="background-color: #e70000; color: white">ذخیره</button>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute} from "vue-router";
import FormSection from "@/components/FormSection";
import CustomerInfo from "@/components/CustomerInfo";

export default {
  name: "Form",
  components: {CustomerInfo, FormSection},
  setup() {
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const customer = ref({})
    const form = ref({})
    const findCustomer = () => {
      axios.get(panelUrl + 'customer/' + route.params.id)
          .then((response) => {
            customer.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }

    onBeforeMount(() => {
      App.setup().checkUser();
      findCustomer();
    });
    const brands = ref(1);
    const addBrand = () => {
      brands.value += 1;
    }
    const removeBrand = (index) => {
      // brands.value += 1;
    }


    return {
      brands, addBrand, customer, findCustomer, route, form, removeBrand,

    }
  }
}
</script>

<style scoped>
label {
  font-size: 12px;
}
</style>