<template>
  <div>
     <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="newbtn" @click="openModal(true)"><span>建立新產品</span></button>
    </div>
    <table class="table mt-4">
      <thead>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120" class="text-right">原價</th>
        <th width="120" class="text-right">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯刪除</th>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">{{item.origin_price | currency}}</td>
          <td class="text-right">{{item.price | currency}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
            <button
              class="btn btn-outline-danger btn-sm"
              style="margin-left:2px;"
              @click="delModal(false,item)"
            >刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{'disabled':!pagination.has_pre}">
      <a class="page-link" href="#" @click.prevent="getProducts(pagination.current_page-1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active':pagination.current_page===page}">
      <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a></li>
    <li class="page-item" :class="{'disabled':!pagination.has_next}">
      <a class="page-link" href="#" @click.prevent="getProducts(pagination.current_page+1)" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    v-model="tempProduct.imageUrl"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-spinner fa-pulse" v-if="status.fileupload"></i>
                  </label>
                  <input type="file" id="customFile" @change="uploadimg" class="form-control" ref="files">
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  :src="tempProduct.imageUrl"
                  alt
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    v-model="tempProduct.title"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      v-model="tempProduct.category"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      v-model="tempProduct.unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      v-model="tempProduct.origin_price"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      v-model="tempProduct.price"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    v-model="tempProduct.description"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    v-model="tempProduct.content"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      type="checkbox"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{tempProduct.title}}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct()">確認刪除</button>
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
      products: [],
      pagination:{},
      tempProduct: {},
      isNew: false,
      // isLoading:false,
      status:{
        fileupload:false
      }
    };
  },
  computed:{
    isLoading(){
      return this.$store.state.isLoading;
    }
  },
  methods: {
    openModal(isNew, item) {
      if (isNew) {
        //如果isNew為true就是要新增產品
        this.tempProduct = {};
        this.isNew = true;
      } else {
        //如果是false則是編輯然後帶入欲修改item參數
        this.tempProduct = Object.assign({}, item); //Object assign防止物件傳參考
        this.isNew = false;
      }
      $("#productModal").modal("show");
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let httpMethod = "post";
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide");
        }
        vm.getProducts();
      });
    },
    getProducts(page = 1) //預設值
     {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      // vm.isLoading =true;
      vm.$store.state.isLoading=true;
      this.$http.get(api).then(response => {
        // vm.isLoading =false;
        vm.$store.state.isLoading=false;
        console.log(response.data);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    delProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          console.log(response.data);
          $("#delProductModal").modal("hide");
        }
        vm.getProducts();
      });
    },
    delModal(isNew, item) {
      $("#delProductModal").modal("show");
      this.tempProduct = Object.assign({}, item);
      console.log(item); //Object assign防止物件傳參考
      this.isNew = false;
    },
    uploadimg(){
      console.log(this);
      const uplodedimg = this.$refs.files.files[0];
      const vm =this;
      const formdata = new FormData();
      formdata.append("file-to-upload",uplodedimg);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      vm.status.fileupload=true;
      this.$http.post(url,formdata,{
        
        headers:{
          'Content-Type':"multipart/form-data"
        }
      }).then((res)=>{
        vm.status.fileupload=false;
        console.log(res.data);
        if(res.data.success){
          // vm.tempProduct.imageUrl = res.data.imageUrl
          // console.log(vm.tempProduct);
          vm.$set(vm.tempProduct,"imageUrl",res.data.imageUrl)
        }
      })
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
<style>
.newbtn{
   border-radius: 10px;
  background-color: purple;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  padding: 5px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.newbtn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.newbtn:hover{
  background-color: rgb(21, 36, 247);
}

.newbtn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.newbtn:hover span {
  padding-right: 15px;
}

.newbtn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>


