(function (window, document){
  const docEl = document.documentElement

  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  // orientationchange事件在设备的纵横方向改变时触发。

  const recalc = () => {
    const clientWidth = docEl.clientWidth
    docEl.style.fontSize = (100 / (clientWidth * 2)) * 100 + 'vw'
  }

  window.addEventListener(resizeEvt, recalc , false)
  window.addEventListener('DOMContentLoaded', recalc , false)
})(window, document)