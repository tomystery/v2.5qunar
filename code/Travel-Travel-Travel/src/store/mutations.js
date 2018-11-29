export default {
  changeCity (theState, cityName) {
    // 不仅在store里面更新数据，还保存到localstorage里面去，这样之后，刷新也不怕！
    theState.city = cityName
    try {
      localStorage.city = cityName
    } catch (e) {}
  }
}
