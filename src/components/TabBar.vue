<template>
  <div class="tabbar">
    <van-tabbar v-model="active" @change="handleSwitch">
      <van-tabbar-item
        v-for="(item,index) in navList"
        :key="index"
        :name="item.linkTo"
        :icon="item.icon"
        :info="index === 3 ? 3:''"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: "home",
      navList: [
        {
          text: "首页",
          linkTo: "home",
          icon: "home-o"
        },
        {
          text: "推荐",
          linkTo: "recomend",
          icon: "hot-o"
        },
        {
          text: "搜索",
          linkTo: "search",
          icon: "search"
        },
        {
          text: "购物车",
          linkTo: "cart",
          icon: "shopping-cart-o"
        },
        {
          text: "个人中心",
          linkTo: "user",
          icon: "user-circle-o"
        }
      ]
    };
  },
  methods:{
      handleSwitch(active){
         this.$router.push({
           name:active
         })
      }
  },
  components: {}
};
</script>

<style scoped>
</style>
