<template>
  <div class="phone">
    <van-grid :column-num="4">
      <van-grid-item 
        v-for="item in categorys" 
        :key="item.id" 
        :icon="item.img" 
        :text="item.title"
        @click="goodsBuy" />
    </van-grid>
    <GoodsList />
  </div>
</template>
<script>
export default {
  name: "phone",
  data() {
    return {
      categorys: [
        {
          id: 1,
          title: "省钱月卡",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-02-17/930fb89401af1a746571234ae07dd524.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          id: 2,
          title: "充值中心",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-02-17/2cc4c23633254bcaa0b535f5efcb1978.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          id: 3,
          title: "百亿补贴",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-02-17/fbb13dd92e4d5be84e5b68f7162ac95c.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          id: 4,
          title: "现金签到",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-04-18/56da5704b225b202a88289bd9dcc5bb9.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          id: 5,
          title: "金猪赚大钱",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-02-17/6381f66e5aef0c9d91103f32c616aab7.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          id: 6,
          title: "电器城",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-02-17/28437fbf556782c8863ab1ed604dd90a.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          id: 7,
          title: "爱逛街",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-02-17/fe2e760c669c9d97d283ed7f7b5e8003.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp"
        },
        {
          id: 8,
          title: "每日好店",
          linkTo: "",
          img:
            "//t00img.yangkeduo.com/goods/images/2019-02-15/1ddd6e21a8281e794dec6ef736867290.png?imageMogr2/format/webp/quality/50"
        }
      ]
    };
  },
  methods:{
     goodsBuy(){
      this.$router.push({
        name:"goodsbuy"
      })
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
