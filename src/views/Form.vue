<template>
  <div class="text-start px-4">
    <b class="mb-4 text-start d-block ">فرم شلف مانیتورینگ</b>
    <div class="d-flex justify-content-end mb-3">
      <b>تاریخ:</b>
      <p class="d-inline-block">1403/05/10</p>
    </div>
    <div v-if="customer.id" class=" align-self-start text-start bg-light rounded rounded p-3">

      <div class="px-1 mb-4 text-start  ">
        <input type="hidden" id="customer_id" :value="customer.id">
        <p>{{ customer.name }}</p>
        <p>{{ customer.address }}</p>
        <b>استان </b>
        <p class="d-inline-block">{{ customer.province.title }}</p>
        <b> شهر </b>
        <p class="d-inline-block">{{ customer.city.title }}</p>

        <br>


        <div class="d-flex justify-content-between">
          <div>
            <b> منطقه </b>
            <p class="d-inline-block">{{ customer.region.title }}</p>
            <b> مسیر </b>
            <p class="d-inline-block">{{ customer.path }}</p>
            <b> کد مسیر </b>
            <p class="d-inline-block">{{ customer.path_code }}</p>
          </div>
          <div>
            <p>{{ customer.path_description }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <b>تلفن </b>
            <p class="d-inline-block">{{ customer.phone }} <span v-if="customer.mobile && customer.phone">-</span>
              {{ customer.mobile }}</p>
          </div>
          <div>
            <b>گرید </b>
            <p class="d-inline-block">{{ customer.scores?.grade }}</p>
          </div>
        </div>

      </div>

    </div>
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

export default {
  name: "Form",
  components: {FormSection},
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