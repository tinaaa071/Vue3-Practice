// 預設匯出
// 可直接於 default 後加入要匯出的內容
export default {
    data: [ // 資料
      '這是第一句話',
      '這是第二句話',
      '這是第三句話'
    ],
    removeData(id) { // 事件觸發：移除資料方法
      // 使用 splice(欲刪除之 id, 數量)
      this.data.splice(id, 1);
      // 觸發刪除其他項目之 render
      this.render();
    },
    render() { // 渲染方法
      // 抓出 component 下的 ul 結構
      const list = document.querySelector('.component ul');
      // 作為 li 結構使用
      let content = '';
      // item 為每一筆資料
      this.data.forEach((item, i) => {
        content = `${content}<li>${item} <button type="button" class="btn" data-id="${i}">移除</button></li>`
      });
      // 縮寫優化
      // const content = component.data.map(item => `<li>${item}</li>`).join('');
  
      // 將資料加回畫面上
      list.innerHTML = content;
  
      // 加入監聽
      const btns = document.querySelectorAll('.btn'); // 選取按鈕
      // 加入觸發事件
      btns.forEach(btn => btn.addEventListener('click', (e)=> {
        // #2 重點，移除項目是先移除資料，而不是直接移除 DOM
        // 如果要進行 AJAX 或更複雜行為，不會因為 DOM 與資料混合而難以運作
        const id = e.target.dataset.id;
        this.removeData(id)
      }))
    },
    // 生命週期
    // 進入畫面時，第一次會觸發的方法
    init() {
      this.render();
    }
  }