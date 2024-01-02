import productsStore from "../store/productsStore.js"
// mapState 取得多個資料狀態
const { mapState } = Pinia

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
                    <a href="#" class="btn btn-outline-success w-100">加入購物車</a>
                </div>
            </div>
        </div>
    </div>`,
    computed: {
        // ['所有 getters 之名稱']
        ...mapState(productsStore, ['sortProducts'])
    }
}