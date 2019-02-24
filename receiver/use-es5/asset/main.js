
window.Vue.config.productionTip = false


$(function() {
  $('#jquery').text('use-es5')
  // umdファイルでグローバルにカスタムコンポーネントが登録されている
  var MyToDoModule = window['my-to-do-module'].default
  // componentにpropsで渡す値をdata属性から取得
  var todoList = $('#todo').data('todo')
  new Vue({
    render: function(createElement) {
      return createElement(MyToDoModule,{
        props: {
          list: todoList
        }
      })
    }
  }).$mount('#todo')
})