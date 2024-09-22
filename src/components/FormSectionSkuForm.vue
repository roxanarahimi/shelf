<template>
  <div class="row m-0 mb-2 p-2 rounded mb-3 position-relative crdSku">
    <div v-show="price" id="price">
      <h1 v-show="price !== null"  id="priceVal" class="align-self-center text-center"></h1>
    </div>
    <div @click="$parent.removeSectionSku(number)" class="crdSkuClose"><i class="bi bi-x-circle-fill"></i></div>

    <div class="col-12 px-1">
      <label :for="'sku_id_'+index+'_'+number">sku</label>
      <select class="form-select form-select-sm" :id="'sku_id_'+index+'_'+number"
              :name="'sku_of_category_'+$parent.selectedSkuCategory.id+'_brand_'+$parent.selectedBrand.id" required>
        <option value=""></option>
        <option v-for="item in $parent.skus" :value="item.id">{{ item.title }}</option>
      </select>
    </div>

    <div class="col-3 px-1">
      <label :for="'face_'+index+'_'+number">تعداد‌ در‌ ‌دیدرس</label>
      <input type="number" min="0" class="form-control form-control-sm en" name="face" :id="'face_'+index+'_'+number">
    </div>
    <div class="col-3 ps-0 pe-1">
      <label :for="'presence_'+index+'_'+number">شدت حضور</label>
      <input type="number" min="0" class="form-control form-control-sm en"  name="presence" :id="'presence_'+index+'_'+number">
    </div>
    <div class="col-2 ps-0 pe-1">
      <label :for="'expire_day_'+index+'_'+number">تاریخ انقضا</label>
      <select class="form-select form-select-sm" name="expire_day" :id="'expire_day_'+index+'_'+number">
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
      <label :for="'expire_month_'+index+'_'+number">&nbsp</label>
      <select class="form-select form-select-sm" name="expire_month" :id="'expire_month_'+index+'_'+number">
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
      <label :for="'expire_year_'+index+'_'+number">&nbsp</label>
      <input type="number" class="form-control form-control-sm en price" value="1403" name="expire_year" :id="'expire_year_'+index+'_'+number">
    </div>

    <div class="col-4 px-1">
      <label :for="'label_price_'+index+'_'+number">قیمت کالا</label>
      <input type="number" value="" min="0" @focus="showSeparated('label_price_'+index+'_'+number)" @input="checkPrice('label_price_'+index+'_'+number)" class="form-control form-control-sm en price" name="label_price" :id="'label_price_'+index+'_'+number">
    </div>
    <div class="col-4 ps-0 pe-1">
      <label :for="'sale_price_'+index+'_'+number">قیمت فروشگاه</label>
      <input type="number" value="" min="0" @focus="showSeparated('sale_price_'+index+'_'+number)" @input="checkPrice('sale_price_'+index+'_'+number)" class="form-control form-control-sm en price" name="sale_price" :id="'sale_price_'+index+'_'+number">
    </div>
    <div class="col-4 ps-0 pe-1">
      <label :for="'distribute_price_'+index+'_'+number">قیمت پخش</label>
      <input type="number" value="" min="0" @focus="showSeparated('distribute_price_'+index+'_'+number)" @input="checkPrice('distribute_price_'+index+'_'+number)" class="form-control form-control-sm en price" name="distribute_price" :id="'distribute_price_'+index+'_'+number">
    </div>

  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "FormSectionSkuForm",
  props: ['sku', 'number','index'],
  setup(){
    const selectedSku = ref({})
    const price = ref();

    const checkPrice=(id)=>{

      price.value = parseInt(document.querySelector('#'+id).value).toLocaleString();
      document.querySelector('#priceVal').innerText= price.value;
      document.querySelector('#price').style.opacity = 1;
      setTimeout(()=>{
        document.querySelector('#price').style.opacity = 0;
      },3000)
    }
    const showSeparated = (id)=>{
      price.value = parseInt(document.querySelector('#'+id).value).toLocaleString();
      document.querySelector('#priceVal').innerText= price.value;
      if (isNaN(parseInt(document.querySelector('#'+id).value))){
        document.querySelector('#priceVal').innerText= '';
        document.querySelector('#price').style.opacity = 0;

      }else{
        document.querySelector('#price').style.opacity = 1;
        setTimeout(()=>{
          document.querySelector('#price').style.opacity = 0;
        },3000)
      }

    }
    return {selectedSku,checkPrice,price,showSeparated}
  }
}
</script>

<style scoped>
label {
  font-size: 11px;
}

.crdSku {
  border: solid rgba(231, 0, 0, 0.1) 1px;
  background-color: rgba(231, 0, 0, 0.05)
}

.crdSkuClose {
  position: absolute;
  top: -10px;
  right: -20px;
  cursor: pointer;
  font-size: 15px
}
#price{
  position: absolute;
  top: 20px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.70);
  border: white 1px solid;
  border-radius: 5px;
  width: 380px;
  height: 100px;
  line-height: 100px;
  color: black;
  display: grid;
  opacity: 0;
}
</style>