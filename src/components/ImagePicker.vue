<template>

<!--  style="color: #e70000; height: 200px; background-color: rgba(231,0,0,0.05)">-->

  <div class="rounded d-grid text-center cursor-pointer" @click="selectFile"
       style="border: dashed #e70000 1px; height: 200px; color: #e70000">
    <div class="align-self-center mx-auto" style="color: rgba(231,0,0,0.69);">
      <i style="font-size: 35px" class="bi bi-image"></i>
      <p style="font-size: 15px">بارگذاری تصویر</p>
    </div>
  </div>
<!--  <input type="file" id="image" @change="fileChanged" accept=".jpg, .png" >-->
  <input type="file" id="image0" @change="fileChanged" accept=".jpg, .png;capture=camera" >
  <input type="file" id="image1" @change="fileChanged" accept=".jpg, .png" >
  <input type="file" id="image2" @change="fileChanged" accept="image/*;capture=camera" >
</template>

<script>
export default {
  name: "ImagePicker",
  setup(){
    const selectFile = ()=>{
      document.querySelector('#image').click();
    }
    const fileChanged = ()=>{

    }

    return{
      selectFile, fileChanged,
    }
  }
}
</script>

<style scoped>

</style>