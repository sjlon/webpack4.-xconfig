window.onload = function () {
  document.getElementById('ul').onclick = function () {
    // import('jquery').then(({ default: $ }) => {
    // $('<h1>动态导入</h1>').appendTo('body')
    // })
    getComponent().then(res => {
      res.appendTo('body')
    })
  }
}
function getComponent() {
  return import('jquery').then(({ default: $ }) => $('<h1></h1>').html('动态导入1'))
}
