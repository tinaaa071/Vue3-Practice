export default {
    template: `
    <div class="bg-light my-4 p-4">
    <!-- v-if -->
    <div>購物車沒有任何品項</div>
    <!-- v-else -->
        <table class="table align-middle">
            <!-- 品項 -->
            <tbody>
                <tr>
                    <td>
                        <a href="" class="text-dark text-decoration-none">x</a>
                    </td>
                    <td>
                        <img src="https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="table-image" alt="">
                    </td>
                    <td>好吃的餅乾</td>
                    <td>
                        <select name="" id="" class="form-select">
                            <option value="">1</option>
                        </select>
                    </td>
                    <td class="text-end">
                        $900
                    </td>
                </tr>
            </tbody>
            <!-- 小計 -->
            <tfoot>
                <tr>
                    <td colspan="5" class="text-end">總金額 NT$ 900</td>
                </tr>
            </tfoot>
        </table>
    </div>`
}