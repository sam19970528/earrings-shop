<template>
  <div>
    <navbar3 />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <form @submit.prevent="signin" class="col-md-6 bg-light py-5">
          <h1 class="text-center">管理者登入</h1>
          <div class="form-group pl-10">
            <label for="username">帳號</label>
            <input
              
              :class="{'is-invalid':errors.has('username')}"
              v-validate="'required'"
              v-model="user.username"
              name="username"
              class="form-control w-75"
              id="username"
              type="text"
            />
            <span class="text-danger" v-if="errors.has('username')">請輸入帳號</span>
            <span v-if="wrong=== 'auth/invalid-email'" class="text-danger">無此帳號!!</span>
          </div>
          <div class="form-group pl-10">
            <label for="password">密碼</label>
            <input
              
              :class="{'is-invalid':errors.has('password')}"
              v-validate="'required'"
              v-model="user.password"
              class="form-control w-75"
              name="password"
              id="password"
              type="password"
            />
            <span class="text-danger" v-if="errors.has('password')">請輸入密碼</span>
            <span v-if="wrong=== 'auth/wrong-password'" class="text-danger">密碼錯誤!!</span>
          </div>
          <div class="pl-10 mt-4">
            <button class="btn btn-primary w-75">
              <i v-if="status.isloadingItem===true" class="fas fa-spinner fa-spin"></i>
              <span v-if="status.text===false">登入</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <indexFooter />
  </div>
</template>

<script>
import $ from "jquery";
import navbar3 from "../navbar3";
import indexFooter from "../index-footer";
export default {
  components: {
    navbar3,
    indexFooter
  },
  data() {
    return {
      //定義資料結構
      user: {
        username: "",
        password: ""
      },
      wrong: "",
      status: {
        isloadingItem: false,
        text: false
      }
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      vm.status.isloadingItem = true;
      vm.status.text = true;
      
      vm.$http.post(api, vm.user).then(response => {
        vm.status.isloadingItem = false;
        vm.status.text = false;
        console.log(response.data);
        if (response.data.success) {
          this.$router.push("/admin/products");
        }
        else if (response.data.error.code === "auth/invalid-email") {
          vm.wrong = response.data.error.code;
          console.log(vm.wrong);
        }

        else if (response.data.error.code === "auth/wrong-password") {
          vm.wrong = response.data.error.code;
          console.log(vm.wrong);
        }
      });
    }
  }
};
</script>
