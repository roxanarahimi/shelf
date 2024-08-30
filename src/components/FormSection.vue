<template>
  <div :id="'form-section-'+index" class="row mx-0 px-2 rounded  position-relative pt-2 pb-3 my-4" style="border: solid  rgba(231,0,0,0.1) 1px;background-color:  rgba(231,0,0,0.05)">
    <div class="col-3 px-1 ">
      <label>نوع محصول</label>
        <p>{{ section.skuCategory.title }}</p>
    </div>
    <div class="col-3 ps-0 pe-1 ">
      <label>برند</label>
      <p>{{ section.brand.title }}</p>
    </div>
    <div class="col-4 ps-0 pe-1 ">
      <label>فضای تبلیغاتی</label>
      <p>{{ section.space }}</p>
    </div>
    <div class="col-2 ps-0 pe-1 ">
      <label>چیدمان</label>
      <p>{{ section.layout }}</p>
    </div>

    <div class="col-12 px-1 ">
      <label>sku ها</label>
      <div class="d-flex justify-content-start flex-wrap mb-2">
        <p v-for="item in section.skus" class="form-check me-2">{{ item.sku.title }}</p>
      </div>
    </div>

    <div class="col-4 px-1">
      <label>تعداد‌ در‌ ‌دیدرس</label>
      <p>{{ section.face }}</p>
    </div>
    <div class="col-4 ps-0 pe-1">
      <label>شدت حضور</label>
      <p>{{ section.presence }}</p>
    </div>
    <div class="col-4 ps-0 pe-1">
      <label class="">تاریخ انقضا</label>
      <p>{{ section.expire_date }}</p>
    </div>

    <div class="col-4 px-1">
      <label>قیمت بسته بندی</label>
      <p>{{ section.label_price }}</p>
    </div>
    <div class="col-4 ps-0 pe-1">
      <label>قیمت فروش</label>
      <p>{{ section.sale_price }}</p>
    </div>
    <div class="col-4 ps-0 pe-1">
      <label>قیمت پخش</label>
      <p>{{ section.distribute_price }}</p>
    </div>

    <div v-if="section.image" class="col-12 px-1 mt-2">
      <label>تصویر چیدمان</label>
      <div class="rounded d-grid text-center p-1"  style="border: dashed #c5c8cb 1px; min-height: 200px;">
        <img :src="section.image" class="w-100" style="border-radius: 5px;">
      </div>
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
  name: "FormSection",
  components:{ImagePicker},
  props:['index','section'],
  setup(){
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const skuCategories = ref([])
    const selectedSkuCategory = ref({})
    const selectedBrand = ref({})
    const skus = ref([])

    const loadSkuCategories = () => {
      axios.get(panelUrl + 'api/category/sku')
          .then((response) => {
            skuCategories.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
    const loadSkus = () => {
      console.log(selectedSkuCategory.value,selectedBrand.value);
      if(selectedSkuCategory.value && selectedBrand.value){
        axios.get(panelUrl + 'api/sku?sku_category_id=' + selectedSkuCategory.value.id + '&brand_id=' + selectedBrand.value.id)
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
    });
    return{
      skuCategories,  selectedSkuCategory, skus, loadSkus, route, panelUrl,selectedBrand
    }
  }
}
</script>

<style scoped>
label {
  font-size: 11px;
}
</style>