<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        
        <table class="table mt-4">
            <thead>
                <th width="150">購買時間</th>
                <th width="200">Email</th>
                <th width="200">購買款項</th>
                <th width="100" class="text-right">應付金額</th>
                <th width="150">是否付款</th>
            </thead>
            <tbody>
                <tr v-for="item in orders" :key="item.id">
                    <td>{{item.create_at| time}}</td>
                    <td>{{item.user.email}}</td>
                    <td >
                        <tr v-for="items in item.products " :key="items.id">
                            {{items.product.title}} 數量:{{items.qty}}{{items.product.unit}}
                        </tr>
                    </td>
                    <td class="text-right">{{item.total | currency}}</td>
                    <td>
                        <label class="text-success" v-if="item.is_paid">已付款</label>
                        <label class="text-danger" v-else>未付款</label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            orders:[
                
            ],
            user:{},
            isLoading:false,
        }
    },
    methods:{
        getoders(){
            const vm=this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders`;
            vm.isLoading=true
            this.$http.get(api).then((res)=>{
                vm.isLoading=false;
                vm.orders=res.data.orders;
                vm.user = res.data.orders.user
                console.log(vm.orders);
            })
        }
    },
    created(){
        this.getoders();
    }
}
</script>