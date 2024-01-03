import productsStore from "../store/productsStore.js"
// 加入 cartStore 的方法
import cartStore from "../store/cartStore.js"
// mapState 取得 store 多個資料狀態
// mapActions 取得 store 多個方法
const { mapState, mapActions } = Pinia

export default {
    template: `
    <div class="row row-cols-3 my-4 g-4">
        <div class="col" v-for="product in sortProducts" :key="product.id">
            <div class="card">
                <img :src="product.imageUrl" class="card-img-top" alt="">
                <div class="card-body">
                    <h6 class="card-title">{{ product.title }}
                        <span class="float-end">$ {{ product.price }}</span>
                    </h6>
                    <a href="#" class="btn btn-outline-success w-100" @click.prevent="addToCart(product.id)">加入購物車</a>
                </div>
            </div>
        </div>
    </div>`,
    // state 資料
    computed: {
        // ['所有 getters 之名稱']
        ...mapState(productsStore, ['sortProducts'])
    },
    // actions 方法
    methods: {
        // ['方法之名稱']
        ...mapActions(cartStore, ['addToCart'])
    },
}