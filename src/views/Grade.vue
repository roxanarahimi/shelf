<template>
  <div class="d-grid text-start h-100 px-4">
    <b class="mb-4 text-start d-block  ">گرید بندی فروشگاه</b>
    <div  v-if="customer.id" class="bg-light rounded p-3 mb-4 ">
      <div class="px-1 text-start">
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
         <div><b>تلفن </b><p class="d-inline-block">{{ customer.phone }} <span v-if="customer.mobile && customer.phone" >-</span>  {{ customer.mobile }}</p></div>
          <div> <b>گرید </b><p class="d-inline-block">{{ customer.scores?.grade }}</p></div>
        </div>

      </div>
    </div>

    <div class="row p-0 m-0">
      <div class="col-6 px-1 ">
        <label for="meterage">متراژ سوپر مارکت</label>
        <select class="form-select form-select-sm" id="meterage">
          <option :selected="customer.scores && customer.scores.meterage == 1" value="1">کمتر از 12</option>
          <option :selected="customer.scores && customer.scores.meterage == 2" value="2">12 تا 25</option>
          <option :selected="customer.scores && customer.scores.meterage == 3" value="3">25 تا 45</option>
          <option :selected="customer.scores && customer.scores.meterage == 4" value="4">45 تا 60</option>
          <option :selected="customer.scores && customer.scores.meterage == 5" value="5">بیش از 60</option>
        </select>
      </div>
      <div class="col-6 px-1 ">
        <label for="product_variety">تنوع محصولات</label>
        <select class="form-select form-select-sm" id="product_variety">
          <option :selected="customer.scores && customer.scores.product_variety == 1" value="1">1</option>
          <option :selected="customer.scores && customer.scores.product_variety == 2" value="2">2</option>
          <option :selected="customer.scores && customer.scores.product_variety == 3" value="3">3</option>
          <option :selected="customer.scores && customer.scores.product_variety == 4" value="4">4</option>
          <option :selected="customer.scores && customer.scores.product_variety == 5" value="5">5</option>
        </select>
      </div>
      <div class="col-6 px-1 ">
        <label for="product_layout">چیدمان محصولات</label>
        <select class="form-select form-select-sm" id="product_layout">
          <option :selected="customer.scores && customer.scores.product_layout == 1" value="1">1</option>
          <option :selected="customer.scores && customer.scores.product_layout == 2" value="2">2</option>
          <option :selected="customer.scores && customer.scores.product_layout == 3" value="3">3</option>
          <option :selected="customer.scores && customer.scores.product_layout == 4" value="4">4</option>
          <option :selected="customer.scores && customer.scores.product_layout == 5" value="5">5</option>
        </select>
      </div>
      <div class="col-6 px-1 ">
        <label for="equipment">تجهیزات سوپر مارکت</label>
        <select class="form-select form-select-sm" id="equipment">
          <option :selected="customer.scores && customer.scores.equipment == 1" value="1">1</option>
          <option :selected="customer.scores && customer.scores.equipment == 2" value="2">2</option>
          <option :selected="customer.scores && customer.scores.equipment == 3" value="3">3</option>
          <option :selected="customer.scores && customer.scores.equipment == 4" value="4">4</option>
          <option :selected="customer.scores && customer.scores.equipment == 5" value="5">5</option>
        </select>
      </div>
      <div class="col-12 px-1 ">
        <label for="sector_id">محله</label>
        <select  class="form-select form-select-sm" id="sector_id">
          <option :selected="customer.scores && customer.scores.sector.id == item.id" v-for="item in sectors" :key="item.id" :value="item.id">{{ item.title }}</option>
        </select>
      </div>


      <div class="px-1">
        <label for="image">تصویر سردر سوپر مارکت</label>
        <div class="rounded" id="image" style="border: dashed #c9c9c9 1px; height: 100px; ">

        </div>
      </div>
    </div>

    <!--    <div class="col-12">-->
    <!--      <label for="customer_code"></label>-->
    <!--      <input type="text" class="form-control form-control-sm " id="customer_code">-->
    <!--    </div>-->


    <div class="align-self-end my-2 ">
      <button @click="saveScores" class="btn bg">ذخیره</button>
    </div>


  </div>

</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import customer from "@/views/Customer";
import {useRoute} from "vue-router";
import router from "@/router";

export default {
  name: "Grade",
  setup() {
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const customer = ref({});
    const sectors = ref([]);
    const findCustomer = () => {
      axios.get(panelUrl + 'customer/' + route.params.id)
          .then((response) => {
            customer.value = response.data;
          })
          .then(() => {
            loadSectors();
          })
          .catch((error) => {
            console.error(error)
          });
    }

    const loadSectors = () => {
      axios.get(panelUrl + 'sector?city_id=' + customer.value.city.id)
          .then((response) => {
            sectors.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
    const saveScores = () => {
      axios.post(panelUrl + 'score', {
        customer_id: customer.value.id,
        sector_id: document.querySelector('#sector_id').value,
        meterage: document.querySelector('#meterage').value,
        product_variety: document.querySelector('#product_variety').value,
        product_layout: document.querySelector('#product_layout').value,
        equipment: document.querySelector('#equipment').value,
      })
          .then((response) => {
            router.push({path:'/customer',query:{code: customer.value.code}})
          }).catch((error) => {
        console.error(error)
      });
    }
    onBeforeMount(() => {
      App.setup().checkUser();
      findCustomer();
    })

    return {
      panelUrl, loadSectors, sectors, customer, route, findCustomer,saveScores
    }
  },
}
</script>

<style scoped>

</style>