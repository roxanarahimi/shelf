<template>

<!--  style="color: #e70000; height: 200px; background-color: rgba(231,0,0,0.05)">-->

  <div class="rounded d-grid text-center cursor-pointer" @click="selectFile" style="border: dashed #c5c8cb 1px; min-height: 200px;">
    <div v-if="!selectedFile" class="align-self-center mx-auto" style="color: #696969;">
      <i style="font-size: 55px" class="bi bi-camera-fill"></i>
      <p style="font-size: 15px; margin-top: -20px" >ثبت تصویر</p>
    </div>
    <div v-if="selectedFile" class="image-container p-1">
      <img v-if="imageSrc" class="img-fluid" style="width: 360px !important; border-radius: 5px; height: auto !important" :src="imageSrc">
    </div>
  </div>
<!--  <input type="file" id="image0" @change="fileChanged" accept=".jpg, .png" >-->
  <input type="hidden" :name="'image'" :id="'image_code_'+index" v-model="imageSrc">
  <input class="d-none" type="file"  :id="'image_'+index" @change="fileChanged" accept="image/*" capture="environment">
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
  name: "ImagePicker",
  props: ['index','name'],
  setup(_props){
    const selectFile = ()=>{
      document.querySelector('#image_'+_props.index).click();
    }
    const selectedFile = ref();
    const imageSrc = ref(null);
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      imageSrc.value = event.target.result;
    };
    const fileChanged = (e)=>{
      let files = e.target.files || e.dataTransfer.files;
      if (files.length) {
        selectedFile.value = files[0];
      }
      console.log('files',imageSrc.value);

    }
    watchEffect(() => {
      if (selectedFile.value) {
        fileReader.readAsDataURL(selectedFile.value);
      } else {
        imageSrc.value = null;
        // destination.value = null;
        // thumb.value = null;
      }
    });

    return{
      selectFile, fileChanged,selectedFile, imageSrc, fileReader
    }
  }
}
</script>

<style scoped>

</style>