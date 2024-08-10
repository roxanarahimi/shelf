<template>
  <div class="d-grid h-100 px-4 w-100">
    <div class="row text-start px-2 align-self-start">
      <b class="mb-5 text-start d-block  ">جستجوی مشتری</b>
      <div class="col-12 px-1 ">

        <label for="code">کد مشتری</label>
        <div class="input-group mb-3 px-1">
          <input type="number" class="form-control form-control-sm en" id="code">
          <button class="btn bg rounded-end rounded-end-5 px-5 " @click="findCustomer"
                  id="button-addon">جستجو
          </button>
        </div>
        <!--          <input type="text" class="form-control form-control-sm en" name="date" id="code" required>-->
      </div>
      <!--      <div class="col-6 px-1 ">-->
      <!--        <label for="province_id">استان</label>-->
      <!--        <select class="form-select form-select-sm" id="province_id" aria-label="Default select example">-->
      <!--          <option value="1">تهران</option>-->
      <!--        </select>-->
      <!--      </div>-->
      <!--      <div class="col-6 px-1 ">-->
      <!--        <label for="city_id">شهر</label>-->
      <!--        <select class="form-select form-select-sm" id="city_id" aria-label="Default select example">-->
      <!--          <option value="1">تهران</option>-->
      <!--        </select>-->
      <!--      </div>-->
      <!--      <div class="col-6 px-1 ">-->
      <!--        <label for="region_id">منطقه</label>-->
      <!--        <select class="form-select form-select-sm" id="region_id" aria-label="Default select example">-->
      <!--          <option value="1">1</option>-->
      <!--        </select>-->
      <!--      </div>-->
      <!--      <div class="col-6 px-1 ">-->
      <!--        <label for="sector_id">محله</label>-->
      <!--        <select class="form-select form-select-sm" id="sector_id" aria-label="Default select example">-->
      <!--          <option value="1">الهیه</option>-->
      <!--        </select>-->
      <!--      </div>-->
      <!--      <div class="col-12 px-1 ">-->
      <!--        <label for="customer_code">شماره مشتری</label>-->
      <!--        <select class="form-select form-select form-select-sm" id="customer_code" aria-label="Default select example">-->
      <!--          <option value="64565645645">123456789789</option>-->
      <!--        </select>-->
      <!--      </div>-->
      <div v-if="customer.id" class=" mt-4 text-start bg-light rounded p-3">
        <input type="hidden" id="customer_id" :value="customer.id">
        <b class="d-block  mb-3">اطلاعات مشتری:</b>
        <p>{{ customer.name }}</p>
        <p>{{ customer.address }}</p>
        <b>استان </b>
        <p class="d-inline-block">{{ customer.province.title }}</p>
        <b> شهر </b>
        <p class="d-inline-block">{{ customer.city.title }}</p>
        <br>

        <b> منطقه </b>
        <p class="d-inline-block">{{ customer.region.title }}</p>
        <b> مسیر </b>
        <p class="d-inline-block">{{ customer.path }}</p>
        <b> کد مسیر </b>
        <p class="d-inline-block">{{ customer.path_code }}</p>
        <p>{{ customer.path_description }}</p>
        <b>تلفن </b><p class="d-inline-block">{{ customer.phone }} <span v-if="customer.mobile && customer.phone" >-</span>  {{ customer.mobile }}</p><br>
        <b>گرید </b><p class="d-inline-block">{{ customer.scores?.grade }}</p>

      </div>
    </div>

    <div class="px-1 d-flex justify-content-between align-self-end">
      <router-link v-show="customer.id" :to="'/form/'+customer.id" class="btn"
                   style="background-color: #e70000; color: white">ایجاد فرم
      </router-link>
      <router-link :to="'/grade/'+customer.id" v-show="customer.id" class="btn btn-secondary">گرید بندی</router-link>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, onMounted, ref} from "vue";
import App from "@/App";
import {useRoute} from "vue-router";

export default {
  name: "Customer",
  setup() {
    const panelUrl = App.setup().panelUrl;
    const route = useRoute();
    const customer = ref({})
    const findCustomer = () => {
      axios.get(panelUrl + 'customer/by/code/' + document.querySelector('#code').value)
          .then((response) => {
            customer.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
    onBeforeMount(() => {
      App.setup().checkUser();
    })

    onMounted(()=>{
      if (route.query.code){
        document.querySelector('#code').value =  route.query.code
        findCustomer();
      }
    })
    return {
      findCustomer, customer, panelUrl, route
    }
  },
}
</script>

<style scoped>

</style>