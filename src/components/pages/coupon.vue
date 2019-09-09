<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-dark" @click="opencoupon(true)">
          
        <span>建立新優惠券</span>
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <th width="250">名稱</th>
        <th width="100">折扣百分比</th>
        <th width="120">到期日</th>
        <th width="70">是否啟用</th>
        <th width="70">編輯</th>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.percent}}</td>
          <td>{{item.due_date}}</td>
          <td>
            <label class="text-success" v-if="item.is_enabled===1">啟用</label>
            <label class="text-danger" v-if="item.is_enabled===0">未啟用</label>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="opencoupon(false,item)"
            style="margin-right:10px;">編輯</button>
            <button
                  class="btn btn-outline-danger"
                  @click="delcoupon(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新優惠券</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="tempcoupon.title"
                  id="recipient-name"
                />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">優惠碼</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="tempcoupon.code"
                  id="recipient-name"
                />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">到期日</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="tempcoupon.due_date"
                  id="date"
                />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">折扣百分比</label>
                <b-form-input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  class=""
                  v-model="tempcoupon.percent"
                  id="recipient-name"
                ></b-form-input>
                <span>{{tempcoupon.percent}}</span>
              </div>
              <div class="form-group">
                <b-checkbox
                
                  v-model="tempcoupon.is_enabled"
                  :value='1'
                  :unchecked-value='0'
                  name
                  id
                >
                <label for="recipient-name" class="col-form-label">是否啟用</label>
                </b-checkbox>
                
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="newcoupon">送出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      coupons: [],
      tempcoupon: {
      },
      isLoading: false,
      isNew: '',
      newDate:0,
      test:"2019-07-30"
      
    };
  },
  methods: {
    opencoupon(isNew, item) {
      if (isNew) {
        this.tempcoupon = {};
        this.isNew = true;
      } else {
        this.tempcoupon = Object.assign({}, item);
        this.isNew = false;
      }
      $("#exampleModal").modal("show");
    },
    getcoupon(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        console.log(response.data);
        vm.coupons = response.data.coupons;
      });
    },
    newcoupon() {
      const vm = this;
      vm.isLoading = true;
      if (!vm.isNew) {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempcoupon.id}`;
        this.$http.put(api, { data: vm.tempcoupon }).then(res => {
          if (res.data.success) {
            $("#exampleModal").modal("hide");
          }
          vm.getcoupon();
          console.log(res.data);
          vm.isLoading = false;
        });
      }
    else{
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      this.$http.post(api, { data: vm.tempcoupon }).then(response => {
        $("#exampleModal").modal("hide");
        vm.isLoading = false;
        vm.getcoupon();
        console.log(response.data);
      });

        }
    },
    delcoupon(id){
        const vm=this;
        const api=`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
        vm.isLoading=true
        this.$http.delete(api).then((res)=>{
            if(res.data.success){
                vm.isLoading=false
                vm.getcoupon();
            }
        })
    }
  },
  created() {
    this.getcoupon();
  }
};
</script>

<style>
</style>
