import '@babel/polyfill'
import './style/index.css'
import './style/index.less'
import './style/_index.scss'

const module = require('./main.js')
console.log(module)
window.onload = function () {
  document.querySelector('li').style.backgroundColor = 'red'
}

setTimeout(() => {
  console.log('箭头函数')
}, 10000000)
class Dog {
  name = '大黄'
  static color = 'yellow'
}
let d = new Dog()
class Cat extends Dog {}
console.log(d)

let promise1 = new Promise((resolve, reject) => {
  resolve('Promise调用')
})

function* fn() {
  yield 1
  yield 2
  yield 3
}
let newFn = fn()
console.log(newFn.next())
console.log(newFn.next())

let str = '12312'
console.log(str.includes('1'))
