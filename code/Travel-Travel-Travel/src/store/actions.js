export default {
  clickCityButton (context, cityName) {
    context.commit('changeCity', cityName)
  }
}
