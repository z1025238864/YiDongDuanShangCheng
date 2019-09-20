<template>
  <div class="home">
    <!-- 标签页 -->
    <van-tabs 
      animated
      sticky
      swipeable
      lazy-render
      @change="handleswitch">
      <van-tab 
        v-for="item in tagsBar" 
        :title="item.title "
        :key="item.id"
        :name="item.linkTo"	
       
        >
        <router-view></router-view>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tagsBar: [
        { id: 1, title: "热门", linkTo: "hot" },
        { id: 2, title: "女装", linkTo: "dress" },
        { id: 3, title: "百货", linkTo: "departmentstore" },
        { id: 4, title: "母婴", linkTo: "mom" },
        { id: 5, title: "手机", linkTo: "phone" },
        { id: 6, title: "鞋包", linkTo: "shoebag" },
        { id: 7, title: "电器", linkTo: "appliance" },
      
      ]
    };
  },
  methods:{
    handleswitch(name,title){
      this.$router.push({
        name
      })
    },
   
  },
  components: {}
};
</script>
<style scoped lang="less">
.home {
  height: 100vh;
}
</style>
