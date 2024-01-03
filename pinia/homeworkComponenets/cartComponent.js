// 加入 cartStore
import cartStore from "../store/cartStore.js"
// pinia 方法
const { mapState, mapActions } = Pinia

export default {
    template: `
    <div class="bg-light my-4 p-4">
        <!-- v-if -->
        <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
        <!-- v-else -->
        <table v-else class="table align-middle">
            <!-- 品項 -->
            <tbody>
                <tr v-for="item in cartList.carts" :key="item.id">
                    <td>
                        <a href="" class="text-dark text-decoration-none"
                        @click.prevent="removeCartItem(item.id)"
                        >x</a>
                    </td>
                    <td>
                        <img :src="item.product.imageUrl" class="table-image" alt="">
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td>
                        <select name="" id="" class="form-select" :value="item.qty" @change="(evt) => setCartQty(item.id, evt)">
                            <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                        </select>
                    </td>
                    <td class="text-end">
                        $ {{ item.subtotal }}
                    </td>
                </tr>
            </tbody>
            <!-- 小計 -->
            <tfoot>
                <tr>
                    <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
                </tr>
            </tfoot>
        </table>
    </div>`,
    // state 資料
    computed: {
        // ['所有 getters 之名稱']
        ...mapState(cartStore, ['cartList'])
    },
    // actions 方法
    methods: {
        ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
    }
}