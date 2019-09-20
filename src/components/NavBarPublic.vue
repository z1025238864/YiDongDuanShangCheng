<template>
  <div class="navbarpublic">
       <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        :z-index=99
        @click-left="onClickLeft"
    />
  </div>
</template>
<script>
export default {
  name: "navbarpublic",
  data() {
    return {};
  },

   methods: {
    onClickLeft() {
      this.$router.go(-1)
    },

  },
  components: {}
};
</script>

<style scoped>
</style>
