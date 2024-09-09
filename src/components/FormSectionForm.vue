<template>
  <div :id="'form-section-'+index" class="row mx-0 px-2 rounded  position-relative pt-2 pb-3 my-4 crdSection">
    <div @click="$parent.removeBrand(index)" class="crdSectionClose"><i class="bi bi-x-circle-fill"></i></div>
    <div class="col-3 px-1 ">
      <label :for="'sku_category_id'+index">نوع محصول</label>
      <select v-model="selectedSkuCategory" :data-value-id="selectedSkuCategory.id" name="sku_category"
           @change="tt"   class="form-select form-select-sm" :id="'sku_category_id'+index" required>
        <option value=""></option>
        <option v-for="item in skuCategories" :value="item">{{ item.title }}</option>
      </select>
    </div>
    <div class="col-3 ps-0 pe-1 mb-3">
      <label :for="'brand'+index">برند</label>
      <select v-model="selectedBrand" :data-value-id="selectedBrand.id" @change="loadSkus" name="brand"
              class="form-select form-select-sm" :id="'brand'+index" required>
        <option value=""></option>
        <option v-for="item in selectedSkuCategory.brands" :value="item.brand">{{ item.brand.title }}</option>
      </select>
    </div>
    <div class="col-4 ps-0 pe-1 mb-3">
      <label :for="'space'+index">فضای تبلیغاتی</label>
      <select class="form-select form-select-sm" name="space" :id="'space'+index">
        <option value="هیچکدام">هیچکدام</option>
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
    <div class="col-2 ps-0 pe-1 mb-3">
      <label :for="'layout'+index">چیدمان</label>
      <select class="form-select form-select-sm" name="layout" :id="'layout'+index">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div class="col-12 px-1 mt-2">
      <div class="row m-0 p-0">
        <form-section-sku-form v-if="skus.length" v-for="(item,indexx) in sectionSkus" :key="indexx" :sku="item"
                               :skus="skus" :index="index" :number="indexx"/>
        <b v-if="skus.length" @click="addSectionSku" class="cursor-pointer"> افزودن sku <i
            class="bi bi-plus-circle-fill"></i></b>
      </div>
    </div>

    <div class="col-12 px-1 mt-2">
      <label>تصویر چیدمان</label>
      <image-picker :index="index"/>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute} from "vue-router";
import ImagePicker from "@/components/ImagePicker";
import FormSectionSkuForm from "@/components/FormSectionSkuForm";

export default {
  name: "FormSectionForm",
  components: {ImagePicker, FormSectionSkuForm},
  props: ['index'],
  setup() {
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
      console.log(selectedSkuCategory.value, selectedBrand.value);
      if (selectedSkuCategory.value && selectedBrand.value) {
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
      loadSkuCategories();
    });

    const sectionSkus = ref([]);
    const addSectionSku = () => {
      let obj = {
        'sku_id': '',
        'face': '',
        'presence': '',
        'expire_day': '',
        'expire_month': '',
        'expire_year': '',
        'label_price': '',
        'sale_price': '',
        'distribute_price': ''
      };
      sectionSkus.value.push(obj);
    }
    const removeSectionSku = (index) => {
      sectionSkus.value.splice(index, 1);
    }


    const tt= ()=>{
      console.log('ccc', selectedSkuCategory.value)
    }
    return {
      skuCategories, loadSkuCategories, selectedSkuCategory, skus, loadSkus, route, panelUrl, selectedBrand,
      sectionSkus, addSectionSku, removeSectionSku,tt
    }
  }
}
</script>

<style scoped>
label {
  font-size: 11px;
}

.crdSection {
  border: solid rgba(231, 0, 0, 0.1) 1px;
  background-color: rgba(231, 0, 0, 0.05)
}

.crdSectionClose {
  position: absolute;
  top: -10px;
  right: -20px;
  cursor: pointer;
  font-size: 18px
}
</style>