<template lang="html">
  <div class="recommendedContainer">
      <div class="title">
        猜你喜欢
      </div>
      <ul>
        <router-link
          tag="li"
          class="item border-bottom"
          v-for="item in list"
          :key="item.id"
          :to="'/detail/' + item.id"
        >
          <img :src="item.imgUrl">
          <div class="itemInfo">
            <p class="itemTitle">{{item.title}}</p>
            <p class="itemText">{{item.desc}}</p>
            <button type="button" name="button" class="itemBtn">查看详情</button>
          </div>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommended',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/packageStyle.styl'
.title
  background: #eee;
  line-height: .8rem;
  text-indent: .2rem;
  margin-top: .2rem;
.item
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  img
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  .itemInfo
    flex: 1;
    padding: .1rem;
    .itemTitle
      line-height: .54rem;
      font-size: .32rem;
      ellipsis()
    .itemText
      line-height: .4rem;
      color: #ccc;
      ellipsis()
    .itemBtn
      background: #ff9300;
      padding: 0 .2rem;
      margin-top: .16rem;
      border-radius: .06rem;
      color: #fff;
      line-height: .44rem;

</style>
