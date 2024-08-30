<template>
  <div class="text-start px-3">
    <b class="mb-4 text-start d-block ">فرم شلف مانیتورینگ</b>
<!--    <div class="d-flex justify-content-end mb-3">-->
<!--      <b>تاریخ:</b>-->
<!--      <p class="d-inline-block">1403/05/10</p>-->
<!--    </div>-->
    <customer-info v-if="customer.id" :customer="customer"/>
    <div class="mt-3 ">
      <b> برند های موجود</b>
      <form-section-form v-for="(item,index) in formSections " :info="item" :index="index"/>
    </div>
    <b @click="addBrand" class="cursor-pointer">افزودن <i class="bi bi-plus-circle-fill"></i></b>
    <div class="px-0">
      <label for="description">توضیحات</label>
      <textarea id="description" class="form-control form-control-sm" rows="3"></textarea>
    </div>
    <div class="px-0 my-4">
      <p v-if="emptyFieldsCount" class="error">لطفا همه فیلدها را پر کنید</p>
      <BtnSubmit @click.prevent="saveForm">
        ثبت
      </BtnSubmit>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute, useRouter} from "vue-router";
import FormSectionForm from "@/components/FormSectionForm";
import CustomerInfo from "@/components/CustomerInfo";
import BtnSubmit from "@/components/BtnSubmit";

export default {
  name: "Form",
  components: {CustomerInfo, FormSectionForm, BtnSubmit},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const customer = ref({})
    const visitor = JSON.parse(localStorage.getItem('user'));
    const form = ref({})
    const emptyFieldsCount = ref(0);
    const findCustomer = () => {
      axios.get(panelUrl + 'api/customer/' + route.params.id)
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
    const formSections = ref([]);
    const addBrand = () => {
      let obj = {
        'sku_category_id': '',
        'brand_id': '',
        'space': '',
        'layout': '',
        'sku_ids': '',
        // 'face': '',
        // 'presence': '',
        // 'expire_day': '',
        // 'expire_month': '',
        // 'expire_year': '',
        // 'label_price': '',
        // 'sale_price': '',
        // 'distribute_price': ''
      };
      formSections.value.push(obj);
    }
    const removeBrand = (index) => {
      formSections.value.splice(index, 1);
    }

    const saveForm = () => {
      emptyFieldsCount.value = App.setup().EmptyFieldsCount();
      let info = [];
      if (emptyFieldsCount.value === 0) {
        for (let i = 0; i < document.getElementsByName('sku_category').length; i++) {
          let cat_id = document.getElementsByName('sku_category')[i].getAttribute('data-value-id');
          let brand_id = document.getElementsByName('brand')[i].getAttribute('data-value-id');
          let sectionSkus = [];
          let formSectionSkus =document.getElementsByName('sku_of_category_'+cat_id+'_brand_'+brand_id);
          for (let j = 0; j < formSectionSkus.length; j++) {
            sectionSkus.push({
              sku_id: formSectionSkus[j].value,
              face: document.getElementById('face_'+i+'_'+j).value,
              presence: document.getElementById('presence_'+i+'_'+j).value,
              expire_date: document.getElementById('expire_year_'+i+'_'+j).value + '-' + document.getElementById('expire_month_'+i+'_'+j).value + '-' + document.getElementById('expire_day_'+i+'_'+j).value,
              label_price: document.getElementById('label_price_'+i+'_'+j).value,
              sale_price: document.getElementById('sale_price_'+i+'_'+j).value,
              distribute_price: document.getElementById('distribute_price_'+i+'_'+j).value,
            });
          }
          info.push({
            sku_category_id: parseInt(cat_id),
            brand_id: brand_id,
            space: document.getElementsByName('space')[i].value,
            layout: document.getElementsByName('layout')[i].value,
            skus: sectionSkus,
            image: document.getElementsByName('image')[i].value
          });
        }

        // console.log('info',info)
        axios.post(panelUrl+'api/form', {
          visitor_id: visitor.id,
          customer_id: route.params.id,
          description: document.querySelector('#description').value,
          form: info,
        })
        .then((response)=>{
          if (response.status === 201 || response.status === 200) {
            App.setup().reloadVisitor();
            visitor.value = JSON.parse(localStorage.getItem('user'));

            setTimeout(() => {
              router.push({name: 'forms'});
            }, 2000);
          }
        }).catch((error)=>{ console.error(error)});
      }
    }
    return {
      formSections, addBrand, customer,visitor, findCustomer, router,route, form, removeBrand, saveForm, emptyFieldsCount
    }
  }
}
</script>

<style scoped>
label {
  font-size: 12px;
}
</style>