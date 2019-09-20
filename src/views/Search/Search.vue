<template>
  <div class="search">
    <div>
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
     
  </div>
</template>

<script>

export default {
  name: 'search',
  data(){
    return {
      value:''
    }
  },
  components: {

  }
}
</script>
<style scoped lang="less">
  .searche{
    height: 100vh;
    position: relative;
  }
</style>
