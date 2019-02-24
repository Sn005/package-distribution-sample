import Vue from 'vue'
import MyToDoModule from './lib/my-to-do-module.common'
import mockHttp from './mock/http'

Vue.config.productionTip = false


$(() => {
  $('#jquery').text('use-webpack1')

  // componentにpropsで渡す値をajaxを模したmockから値を渡している
  mockHttp.get('/api/todo').then( result => {
    new Vue({
      render: createElement => {
        return createElement(MyToDoModule,{
          props: {
            list: result
          }
        })
      }
    }).$mount('#todo')
  })
})