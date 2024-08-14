<template>
  <div :id="'form-section-'+index" class="row mx-0 px-2 rounded  position-relative pt-2 pb-3 my-4" style="border: solid  rgba(231,0,0,0.1) 1px;background-color:  rgba(231,0,0,0.05)">
    <div @click="$parent.removeBrand(index)" style="position: absolute; top:-10px; right:-20px; cursor:pointer; font-size: 18px"><i class="bi bi-x-circle-fill"></i></div>
    <div class="col-3 px-1 ">
      <label for="sku_category_id">نوع محصول</label>
      <select  v-model="selectedSkuCategory" :data-value-id="selectedSkuCategory.id" name="sku_category" class="form-select form-select-sm" id="sku_category_id" required>
        <option value=""></option>
        <option v-for="item in skuCategories" :value="item">{{ item.title }}</option>
      </select>
    </div>
    <div class="col-3 ps-0 pe-1 ">
      <label for="brand">برند</label>
      <select v-model="selectedBrand"  :data-value-id="selectedBrand.id" @change="loadSkus" name="brand" class="form-select form-select-sm" id="brand" required>
        <option value=""></option>
        <option v-for="item in selectedSkuCategory.brands" :value="item.brand">{{ item.brand.title }}</option>
      </select>
    </div>
    <div class="col-4 ps-0 pe-1 ">
      <label>فضای تبلیغاتی</label>
      <select class="form-select form-select-sm" name="space" >
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
    <div class="col-2 ps-0 pe-1 ">
      <label>چیدمان</label>
      <select class="form-select form-select-sm" name="layout" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div class="col-12 px-1 ">
      <label>sku ها</label>
      <div class="d-flex justify-content-start flex-wrap mb-2">
        <div v-for="item in skus" class="form-check me-2">
          <input class="form-check-input" type="checkbox" :value="item.id" :name="'skus_of_cat__'+selectedSkuCategory.id+'__brand'+selectedBrand.id" :id="'sku_'+item.id">
          <label class="form-check-label" :for="'sku_'+item.id">
            {{ item.title }}
          </label>
        </div>
      </div>
    </div>

    <div class="col-3 px-1">
      <label>تعداد‌ در‌ ‌دیدرس</label>
      <input type="number" class="form-control form-control-sm en" name="face">
    </div>
    <div class="col-3 ps-0 pe-1">
      <label>شدت حضور</label>
      <select class="form-select form-select-sm" name="presence" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="col-2 ps-0 pe-1">
      <label class="">تاریخ انقضا</label>
      <select class="form-select form-select-sm" name="expire_day" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
    </div>
    <div class="col-2 ps-0 pe-1">
      <label>&nbsp</label>
       <select class="form-select form-select-sm" name="expire_month" >
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
       </select>
     </div>
    <div class="col-2 ps-0 pe-1">
      <label>&nbsp</label>
       <input type="number" class="form-control form-control-sm en" value="1403" name="expire_year">
     </div>

    <div class="col-4 px-1">
      <label>قیمت بسته بندی</label>
      <input type="number" min="0" class="form-control form-control-sm en" name="label_price">
    </div>
    <div class="col-4 ps-0 pe-1">
      <label>قیمت فروش</label>
      <input type="number" min="0" class="form-control form-control-sm en" name="sale_price">
    </div>
    <div class="col-4 ps-0 pe-1">
      <label>قیمت پخش</label>
      <input type="number" min="0" class="form-control form-control-sm en"  name="distribute_price">
    </div>

    <div class="col-12 px-1 mt-2">
      <label>تصویر چیدمان</label>
      <image-picker :index="index" />
    </div>
    <!--        <hr class="my-4 " style="border:  dashed #e70000 1px;opacity: 0.8; ">-->

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute} from "vue-router";
import ImagePicker from "@/components/ImagePicker";
export default {
  name: "FormSectionForm",
  components:{ImagePicker},
  props:['index'],
  setup(){
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const skuCategories = ref([])
    const selectedSkuCategory = ref({})
    const selectedBrand = ref({})
    const skus = ref([])
    const loadSkuCategories = () => {
      axios.get(panelUrl + 'category/sku')
          .then((response) => {
            skuCategories.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
    const loadSkus = () => {
      console.log(selectedSkuCategory.value,selectedBrand.value);
      if(selectedSkuCategory.value && selectedBrand.value){
        axios.get(panelUrl + 'sku?sku_category_id=' + selectedSkuCategory.value.id + '&brand_id=' + selectedBrand.value.id)
            .then((response) => {
              skus.value = response.data;
              console.log(skus.value)
            }).catch((error) => {
          console.error(error)
        });
      }
    }
    onBeforeMount(() => {
      App.setup().checkUser();
      loadSkuCategories();
    });
    return{
      skuCategories, loadSkuCategories, selectedSkuCategory, skus, loadSkus, route, panelUrl,selectedBrand,
    }
  }
}
</script>

<style scoped>
label {
  font-size: 11px;
}
</style>