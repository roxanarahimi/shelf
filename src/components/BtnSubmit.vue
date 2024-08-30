<template>
    <div class="d-inline-block mb-3">
      <button id="submit" class="btn  d-flex justify-content-between" style="background-color: #e70000; color: white" @click="submitForm">
            <slot/>
            <loader-sm class="loader-sm d-none"/>
        </button>
    </div>
</template>

<script>
import LoaderSm from '../components/Loader-sm'

export default {
    components: {LoaderSm},
    name: "BtnSubmit",
    setup() {
        const submitForm = () => {
                document.querySelector('#submit').setAttribute('disabled', 'disabled');
                document.querySelector('.loader-sm').classList.remove('d-none');
                // setTimeout(()=>{
                //   document.querySelector('#submit').removeAttribute('disabled');
                //   document.querySelector('.loader-sm').classList.add('d-none');
                // },3000)
        }
        return {
            submitForm,
        }

    }
}
</script>

<style scoped>

</style>
