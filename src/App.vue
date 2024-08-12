<template>
  <div class=" d-grid m-0 p-0 container-fluid main-wrapper max-width h-100">
    <div class="text-light mx-auto max-width m-0 p-0 top-nav-wrapper">
      <div class=" top-nav-wrapper-inner max-width">
        <nav dir="ltr" class="d-flex justify-content-between py-5 w-100 m-0 top-nav max-width">
          <div style="cursor: pointer" @click="$router.go(-1)"><i class="bi bi-caret-left-fill"></i></div>
          <b id="visitor-name" style="z-index: 1000"></b>
        </nav>
        <div class="header-styler"></div>
      </div>
    </div>
    <div class="container-fluid p-0 m-0 pb-3 align-self-center w-100 mx-auto router-view-wrapper">
      <input v-if="visitor" type="hidden" id="visitor_id" :value="visitor.id">
      <router-view/>
    </div>
    <nav class="d-flex justify-content-between p-0 m-0 w-100 mx-auto bottom-nav">
      <router-link to="/" class="bottom-nav-link py-2"><i class="bi bi-house-fill d-block"></i><small>خانه</small>
      </router-link>
      <router-link to="/customer" class="bottom-nav-link py-2 "><i class="bi bi-info-square-fill d-block"></i><small>مشتری</small>
      </router-link>
      <router-link to="/forms" class="bottom-nav-link py-2 "><i class="bi bi-file-text-fill d-block"></i><small>فرم
        ها</small></router-link>
      <router-link to="/profile" class="bottom-nav-link py-2 "><i
          class="bi bi-person-fill d-block"></i><small>پروفایل</small></router-link>
    </nav>
  </div>
</template>
<script>

import {onMounted, onUpdated, ref} from "vue";
import {useRouter} from "vue-router";

export default {
  setup() {
    const router = useRouter()
    const panelUrl = 'https://panel.shelf.webagent.ir/api/';
    // const panelUrl = 'http://localhost:8000/api/';
    const visitor = ref({});
    const user = ref({});
    const checkUser = () => {
      if (JSON.parse(localStorage.getItem('user'))?.id) {
        user.value = JSON.parse(localStorage.getItem('user'));
        visitor.value = JSON.parse(localStorage.getItem('user'));
        document.querySelector('#visitor-name').innerHTML = 'کارشناس '+visitor.value.name;

      } else {
        document.querySelector('#visitor-name').innerHTML = '';
        logout();
      }
    };
    onMounted(() => {
      visitor.value = JSON.parse(localStorage.getItem('user'));
      document.querySelector('#visitor-name').innerHTML = 'کارشناس '+visitor.value.name;
    })
    onUpdated(() => {
      visitor.value = JSON.parse(localStorage.getItem('user'));
      document.querySelector('#visitor-name').innerHTML = 'کارشناس '+visitor.value.name;
    })
    const EmptyFieldsCount = () => {
      let emptyFieldsCount = 0;
      let req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        if (element.value === "") {
          element.classList.add('hasError');
          // element.nextSibling.innerHTML = "فیلد اجباری";
          emptyFieldsCount++;
        } else {
          element.classList.remove('hasError');
          // element.nextSibling.innerHTML = "";
        }
      });
      return emptyFieldsCount;
    };
    const logout = () => {
      visitor.value = {};
      document.querySelector('#visitor-name').innerHTML = '';
      localStorage.removeItem('user');
      router.push({name: 'login'});
    }
    return {
      user, checkUser, logout, EmptyFieldsCount, panelUrl, visitor, router
    }
  },

}
</script>
<style>

.btn:not(#button-addon) {
  border-radius: 50px !important;
  padding-left: 30px;
  padding-right: 30px;
}

.bottom-nav-link {
  width: 25%;
  text-align: center;
  display: block;
}

.router-link-active + .bottom-nav-link {
  border-radius: 0 20px 0 0;
}

.bottom-nav-link:has(+ .router-link-active) {
  border-radius: 20px 0 0 0;
}

.bottom-nav {
  font-size: 20px;
  /*position: absolute;*/
  /*bottom: 0;*/
  border-radius: 20px 20px 0 0 !important;
  overflow: hidden;
  background-color: white;
  align-self: end;

}



.top-nav-wrapper {
  top: 0;
  line-height: 35px;
  background-color: #e70000 !important;
  align-self: start;

}


.top-nav {
  height: 180px;
  line-height: 160px;
}
.router-view-wrapper {
  height: calc(100vh - 275px);
  overflow-y: scroll;
  overflow-x: hidden !important;
  margin-top: 50px;
  background-color: white;

  align-self: center;

}
.top-nav-wrapper-inner {
  background: transparent url('assets/logo.png') center center no-repeat !important;
  background-size: cover;
}

.main-wrapper {
  overflow-x: hidden !important;
  background-color: white;

}


.header-styler {
  margin-top: -30px;
  width: 100%;
  height: 30px;
  border-radius: 20px 20px 0 0;
  background-color: white;
}



nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  background-color: #e70000;
}

nav a.router-link-exact-active {
  background-color: transparent;
  color: #e70000;
}

small {
  font-size: 10px !important;
  display: block;
}
.bg, .bg:hover{
  background-color: #e70000; color: white
}
.cursor-pointer{
  cursor: pointer !important;
}
</style>
