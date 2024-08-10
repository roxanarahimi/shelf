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
      <div v-for="(item,index) in brands " class="row mx-0 px-2 rounded  position-relative pb-4 my-4"
           style="background-color:  rgba(231,0,0,0.03)">
        <div @click="removeBrand(index)"
             style="position: absolute; top:-10px; right:-20px; cursor:pointer; font-size: 18px"><i
            class="bi bi-x-circle-fill"></i></div>
        <div class="col-3 px-1 ">
          <label for="sku_category_id">نوع محصول</label>
          <select @change="xx" v-model="selectedSkuCategory" class="form-select form-select-sm" id="sku_category_id">
            <option value=""></option>
            <option v-for="item in skuCategories" :value="item">{{ item.title }}</option>
          </select>
        </div>
        <div class="col-3 px-1 ">
          <label for="brand_id">برند</label>
          <select @change="loadSkus" class="form-select form-select-sm" id="brand_id" aria-label="Default select example">
            <option value=""></option>
            <option v-for="item in selectedSkuCategory.brands" :value="item.brand.id">{{ item.brand.title }}</option>
          </select>
        </div>
        <div class="col-4 px-1 ">
          <label for="space">فضای تبلیغاتی</label>
          <select class="form-select form-select-sm" id="space" aria-label="Default select example">
            <option value="استیکر">استیکر</option>
            <option value="تابلو فروشگاه">تابلو فروشگاه</option>
            <option value="سایه بان">سایه بان</option>
            <option value="پوستر">پوستر</option>
            <option value="استند">استند</option>
            <option value="دنگلر">دنگلر</option>
            <option value="لایت باکس">لایت باکس</option>
            <option value="وابلر">وابلر</option>
            <option value="شلف تاکر">شلف تاکر</option>
            <option value="پروموتر">پروموتر</option>
            <option value="پلی شلف">پلی شلف</option>
          </select>
        </div>
        <div class="col-2 px-1 ">
          <label for="layout">چیدمان</label>
          <select class="form-select form-select-sm" id="layout" aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div class="col-12 px-1 ">
          <label for="">sku ها</label>
          <div class="d-flex justify-content-start flex-wrap mb-2">
            <div v-for="(item, indexSku) in skus" class="form-check me-2">
              <input class="form-check-input" type="checkbox" value="" :id="'sku-1-'+indexSku">
              <label class="form-check-label" :for="'sku-1-'+indexSku">
                {{ item.title }}
              </label>
            </div>
          </div>
        </div>

        <div class="col-4 px-1">
          <label for="face">تعداد‌ در‌ ‌دیدرس‌face</label>
          <input type="number" class="form-control form-control-sm en" id="face">
        </div>
        <div class="col-4 px-1">
          <label for="presence">شدت حضور</label>
          <select class="form-select form-select-sm" id="presence" aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="col-4 px-1">
          <label for="expire_date">تاریخ انقضا</label>
          <input type="text" class="form-control form-control-sm en" id="expire_date">
        </div>
        <div class="col-4 px-1">
          <label for="label_price">قیمت بسته بندی</label>
          <input type="number" min="0" class="form-control form-control-sm en" name="date" id="label_price">
        </div>
        <div class="col-4 px-1">
          <label for="sale_price">قیمت فروش</label>
          <input type="number" min="0" class="form-control form-control-sm en" name="date" id="sale_price">
        </div>
        <div class="col-4 px-1">
          <label for="distribute_price">قیمت پخش</label>
          <input type="number" min="0" class="form-control form-control-sm en" name="date" id="distribute_price">
        </div>

        <div class="col-12 px-1 mt-2">
          <label for="image">تصویر چیدمان</label>
          <div class="rounded bg-white" id="image" style="border: dashed #c9c9c9 1px; height: 100px; ">

          </div>
        </div>
        <!--        <hr class="my-4 " style="border:  dashed #e70000 1px;opacity: 0.8; ">-->

      </div>
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

export default {
  name: "Form",
  setup() {
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const customer = ref({})
    const form = ref({})
    const skuCategories = ref([])
    const selectedSkuCategory = ref({})
    const skus = ref([])
    const loadSkuCategories = () => {
      axios.get(panelUrl + 'category/sku')
          .then((response) => {
            skuCategories.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
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
      loadSkuCategories();
    });
    const brands = ref(1);
    const addBrand = () => {
      brands.value += 1;
    }
    const removeBrand = (index) => {
      // brands.value += 1;
    }


    const loadSkus = () => {
      axios.get(panelUrl + 'sku?sku_category_id=' + selectedSkuCategory.value.id + '&brand_id=' + document.querySelector('#brand_id').value)
          .then((response) => {
            skus.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
    return {
      brands, addBrand, customer, findCustomer, route, form, removeBrand,
      skuCategories, loadSkuCategories, selectedSkuCategory, skus, loadSkus
    }
  }
}
</script>

<style scoped>
label {
  font-size: 12px;
}
</style>