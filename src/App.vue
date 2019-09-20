<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>
<script>
import TabBar from './components/TabBar'
export default {
  components:{
    TabBar
  }
};
</script>
<style lang="less">
</style>
