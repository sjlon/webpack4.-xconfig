// import $ from 'jquery'
// import _ from 'lodash'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
// moment.locale('zh-cn')

// console.log(moment().subtract(1, 'days').calendar())
// window.onload = function () {
//   document.getElementById('ul').onclick = function () {
//     // import('jquery').then(({ default: $ }) => {
//     // $('<h1>动态导入</h1>').appendTo('body')
//     // })
//     getComponent().then(res => {
//       res.appendTo('body')
//     })
//   }
// }
// function getComponent() {
//   return import('jquery').then(({ default: $ }) => $('<h1></h1>').html('动态导入1'))
// }

// window.onload = function () {
//   document.getElementById('ul').onclick = function () {
//     $('<h1></h1>').html('静态导入').appendTo('body')
//   }
// }

import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
Vue.config.productionTip = false
new Vue({
  router,
  data: {
    msg: 'hello world!',
  },
  methods: {
    cl() {
      console.log(this.msg)
    },
  },
  render: h => h(App),
}).$mount('#app')
