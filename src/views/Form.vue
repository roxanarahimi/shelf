<template>
  <div class="text-start px-3">
    <b class="mb-4 text-start d-block ">فرم شلف مانیتورینگ</b>
    <div v-if="form.id">
      <div class="d-flex justify-content-end mb-3">
        <b>تاریخ:</b>
        <p class="d-inline-block">{{ form.created_at }}</p>
      </div>
      <customer-info v-if="customer.id" :customer="customer"/>
      <!--      <div class="mt-3 " v-if="form.id">-->
      <!--        <b> برند های موجود</b>-->
      <!--        <form-section v-for="(item,index) in form.sections " :section="item" :index="index"/>-->
      <!--      </div>-->
      <!--     <div class="mt-3 border rounded" style="overflow:hidden" v-if="form.id">-->
      <!--       <div v-for="(section,index) in form.sections" :key="index">-->
      <!--         <table class="table mb-0">-->
      <!--           <thead class="bgHead">-->
      <!--           <tr >-->
      <!--             <th class="py-3" >نوع محصول</th>-->
      <!--             <th class="py-3 text-center" >برند</th>-->
      <!--             <th class="py-3 text-center" >فضای تبلیغاتی</th>-->
      <!--             <th class="py-3 text-center" >چیدمان</th>-->
      <!--           </tr>-->
      <!--           </thead>-->
      <!--           <tbody>-->
      <!--           <tr>-->
      <!--             <td>{{ section.skuCategory.title}}</td>-->
      <!--             <td class="text-center">{{ section.brand.title }}</td>-->
      <!--             <td class="text-center">{{ section.space}}</td>-->
      <!--             <td class="text-center">{{ section.layout }}</td>-->
      <!--           </tr>-->
      <!--           </tbody>-->
      <!--         </table>-->

      <!--         <table class="table mb-0">-->
      <!--           <thead>-->
      <!--           <tr class="bg-light">-->
      <!--             <th class="" >sku</th>-->
      <!--             <th class="text-center" >تعداد در دیدرس</th>-->
      <!--             <th class="text-center" >شدت حضور</th>-->
      <!--             <th class="en" >تاریخ انقضا</th>-->
      <!--             <th class="en" >قیمت بسته</th>-->
      <!--             <th class="en" >قیمت فروش</th>-->
      <!--             <th class="en" >قیمت پخش</th>-->
      <!--           </tr>-->
      <!--           </thead>-->
      <!--           <tbody>-->
      <!--           <tr v-for="(item,i) in section.skus" :key="i">-->
      <!--             <td style="width: 50px !important">{{ item.sku.title }}</td>-->
      <!--             <td class="text-center" >{{ item.face }}</td>-->
      <!--             <td class="text-center">{{ item.presence }}</td>-->
      <!--             <td class="en" style="width: 60px !important">{{ item.expire_date }}</td>-->
      <!--             <td class="en">{{ item.label_price }}</td>-->
      <!--             <td class="en">{{ item.sale_price }}</td>-->
      <!--             <td class="en">{{ item.distribute_price }}</td>-->
      <!--           </tr>-->
      <!--           </tbody>-->
      <!--         </table>-->

      <!--       </div>-->
      <!--      </div>-->

      <div class="mt-3 border rounded border-bottom-0" style="overflow-y: scroll" v-if="form.id">
        <!--        <div v-for="(section,index) in form.sections" :key="index">-->

        <table class="table table-responsive rounded mb-0">
          <thead>
          <tr class="bgHead">
            <th class="" >sku</th>
            <th class="text-center" >تعداد در دیدرس</th>
            <th class="text-center" >شدت حضور</th>
            <th class="en">تاریخ انقضا</th>
            <th class="en" >قیمت بسته</th>
            <th class="en" >قیمت فروش</th>
            <th class="en" >قیمت پخش</th>
            <th class="text-center">فضای تبلیغاتی</th>
            <th class="text-center" >چید مان</th>
<!--            <th class="text-center" >تصویر چیدمان</th>-->
          </tr>
          </thead>
          <tbody v-for="(section,index) in form.sections" :key="index">
          <tr v-for="(item,i) in section.skus" :key="i">
            <td class="text-nowrap">{{ item.sku.title }}</td>
            <td class="text-center text-nowrap">{{ item.face }}</td>
            <td class="text-center text-nowrap">{{ item.presence }}</td>
            <td class="en text-nowrap">{{ item.expire_date }}</td>
            <td class="en text-nowrap">{{ item.label_price }}</td>
            <td class="en text-nowrap">{{ item.sale_price }}</td>
            <td class="en text-nowrap">{{ item.distribute_price }}</td>
            <td class="text-center align-middle text-nowrap" v-if="i===0" :rowspan="section.skus.length">{{ section.space }}</td>
            <td class="text-center align-middle text-nowrap" v-if="i===0" :rowspan="section.skus.length">{{ section.layout }}</td>
<!--            <td class="text-center align-middle text-nowrap" v-if="i===0" :rowspan="section.skus.length">-->
<!--              <img v-if="section.image" :src="storageUrl+section.image" width="80px">-->
<!--            </td>-->

          </tr>
          </tbody>
        </table>

        <!--        </div>-->
      </div>

      <div class="px-0 py-3">
        <b>توضیحات</b>
        <p>{{ form.description }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App";
import {useRoute, useRouter} from "vue-router";
import FormSection from "@/components/FormSection";
import CustomerInfo from "@/components/CustomerInfo";

export default {
  name: "Form",
  components: {CustomerInfo, FormSection},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const panelUrl = App.setup().panelUrl;
    const storageUrl = App.setup().storageUrl;
    const visitor = JSON.parse(localStorage.getItem('user'));
    const emptyFieldsCount = ref(0);
    const customer = ref({});
    const form = ref({})
    const findCustomer = (id) => {
      axios.get(panelUrl + 'api/customer/' + id)
          .then((response) => {
            customer.value = response.data;
          }).catch((error) => {
        console.error(error)
      });
    }
    const loadForm = () => {
      axios.get(panelUrl + 'api/form/' + route.params.id)
          .then((response) => {
            form.value = response.data;
          }).then((response) => {
        findCustomer(form.value.customer.id);
      }).catch((error) => {
        console.error(error)
      });
    }
    onBeforeMount(() => {
      App.setup().checkUser();
      loadForm();
    });

    return {
      visitor, router, route, emptyFieldsCount, loadForm, form, customer, findCustomer,panelUrl,storageUrl
    }
  }
}
</script>

<style scoped>
label {
  font-size: 12px;
}

/*th {*/
/*  font-size: 12px;*/
/*}*/

/*td {*/
/*  font-size: 14px;*/

/*}*/

.table, rt, td, th {
  background-color: transparent;
}

.bgHead {
  border: solid rgba(231, 0, 0, 0.1) 1px;
  background-color: rgba(231, 0, 0, 0.05)
}

</style>