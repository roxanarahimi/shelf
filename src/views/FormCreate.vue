<template>
  <div class="text-start px-4">
    <b class="mb-4 text-start d-block ">فرم شلف مانیتورینگ</b>
    <div class="d-flex justify-content-end mb-3">
      <b>تاریخ:</b>
      <p class="d-inline-block">1403/05/10</p>
    </div>
    <customer-info v-if="customer.id" :customer="customer"/>
    <div class="mt-3 ">
      <b> برند های موجود</b>
      <form-section-form v-for="(item,index) in brands " :info="item" :index="index"/>
    </div>
    <b @click="addBrand" class="cursor-pointer">افزودن <i class="bi bi-plus-circle-fill"></i></b>
    <div class="px-0">
      <label for="description">توضیحات</label>
      <textarea id="description" class="form-control form-control-sm" rows="3"></textarea>
    </div>
    <div class="px-0 my-4">
      <p v-if="emptyFieldsCount" class="error">لطفا همه فیلدها را پر کنید</p>
      <button class="btn" style="background-color: #e70000; color: white" @click="saveForm">ذخیره</button>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute, useRouter} from "vue-router";
import FormSectionForm from "@/components/FormSectionForm";
import CustomerInfo from "@/components/CustomerInfo";

export default {
  name: "Form",
  components: {CustomerInfo, FormSectionForm},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const customer = ref({})
    const visitor = JSON.parse(localStorage.getItem('user'));
    const form = ref({})
    const emptyFieldsCount = ref(0);
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
    const brands = ref([]);
    const addBrand = () => {
      let obj = {
        'sku_category_id': '',
        'brand_id': '',
        'space': '',
        'layout': '',
        'sku_ids': '',
        'face': '',
        'presence': '',
        'expire_day': '',
        'expire_month': '',
        'expire_year': '',
        'label_price': '',
        'sale_price': '',
        'distribute_price': ''
      };
      brands.value.push(obj);
    }
    const removeBrand = (index) => {
      brands.value.splice(index, 1);
    }

    const saveForm = () => {
      emptyFieldsCount.value = App.setup().EmptyFieldsCount();
      let info = [];
      if (emptyFieldsCount.value === 0) {
        for (let i = 0; i < document.getElementsByName('sku_category').length; i++) {
          let cat_id = document.getElementsByName('sku_category')[i].getAttribute('data-value-id');
          let sku_ids = [];
          document.querySelectorAll("[name='skus_of_cat__" + cat_id + "']:checked").forEach((element) => {
            sku_ids.push(parseInt(element.value));
          });
          info.push({
            sku_category_id: parseInt(cat_id),
            brand_id: document.getElementsByName('brand')[i].getAttribute('data-value-id'),
            sku_ids: sku_ids,
            face: document.getElementsByName('face')[i].value,
            presence: document.getElementsByName('presence')[i].value,
            space: document.getElementsByName('space')[i].value,
            layout: document.getElementsByName('layout')[i].value,
            expire_date: document.getElementsByName('expire_year')[i].value + '-' + document.getElementsByName('expire_month')[i].value + '-' + document.getElementsByName('expire_day')[i].value,
            label_price: document.getElementsByName('label_price')[i].value,
            sale_price: document.getElementsByName('sale_price')[i].value,
            distribute_price: document.getElementsByName('distribute_price')[i].value
          });
        }
        axios.post(panelUrl+'form', {
          visitor_id: visitor.id,
          customer_id: route.params.id,
          description: document.querySelector('#description').value,
          form: info,
        })
        .then((response)=>{
          if (response.status === 201 || response.status === 200) {
            App.setup().reloadVisitor();
            setTimeout(() => {
              router.push({name: 'forms'});
            }, 1000);
          }
        }).catch((error)=>{ console.error(error)});
      }
    }
    return {
      brands, addBrand, customer,visitor, findCustomer, router,route, form, removeBrand, saveForm, emptyFieldsCount
    }
  }
}
</script>

<style scoped>
label {
  font-size: 12px;
}
</style>