<template>
  <div class="align-self-start text-start bg-light rounded rounded p-3">
    <div class="px-1 mb-4 text-start  ">
      <input type="hidden" id="customer_id" :value="customer.id">
      <p>{{ customer.name }}</p>
      <p>{{ customer.address }}</p>
      <b>استان </b>
      <p class="d-inline-block">{{ customer.province.title }}</p>
      <b> شهر </b>
      <p class="d-inline-block">{{ customer.city.title }}</p>
      <br>
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
</template>

<script>
export default {
  name: "CustomerInfo",
  props: ['customer'],
}
</script>

<style scoped>

</style>