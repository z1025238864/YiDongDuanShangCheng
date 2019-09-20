<template>
  <div class="goodsbuy">
    <div class="pic">
         <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item 
            v-for="(image, index) in images" 
            :key="index" 
            @click="handlePreview(index)">
          <img :src="image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="info">
      <span class="newprice">￥{{price}}起</span>
      <span class="oldprice">5999</span>
      <p class="title">小米笔记本15.6" 2019款 独显版</p>
      <van-divider />
      <p class="ems">
        <span>退货包运费·</span>
        <span>七天无退换·</span>
        <span>极速退款·</span>
        <span>全场包邮·</span>
      </p>
      <div class="goodsbuy">
        <span class="num">购买数量</span>
        <p class="goodsadd">
          <van-button type="default" @click="reduce">-</van-button>
          <van-button type="default">{{num}}</van-button>
          <van-button type="default" @click="add">+</van-button>
        </p>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="home-o" text="首页" @click="onClickIndex" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  name: "goodsbuy",
  data() {
    return {
      num: 0,
      price:4999,
      images:[
          '/static/images/c3.jpg',
          '/static/images/c33.png',
          '/static/images/c4.png',
      ]
    };
  },
  methods: {

        handlePreview(index) {
            ImagePreview({
                images: this.images,
                startPosition: index,
                onClose() {}
            });
        },

   
    onClickIndex(){
        this.$router.push({
            name:'home'
        })
    },
     reduce() {
      this.num && this.num--;
    },
    add(){
        this.num++
    },
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      this.$router.push({
          name:'cart'
      })
    },
    
    
  },
  computed:{
      total(){
          return this.num * this.price
      }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.goodsbuy {
  .pic {
    width: 750px;
    height: 750px;
    img {
      width: 100%;
    }
  }
  .info {
    padding: 0 20px;
    font-size: 32px;

    .newprice {
      color: red;
      font-size: 45px;
      font-weight: bold;
    }
    .oldprice {
      color: #ccc;
      text-decoration: line-through;
      font-size: 30px;
    }
  }
  .title {
    margin-top: 25px;
    font-size: 28px;
    font-weight: bold;
  }
  .ems {
    font-size: 28px;
    color: #ccc;
  }
  .goodsbuy {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .num{
        font-size: 30px;
    }
  }
  .van-goods-action{
      position: relative;
  }
}
</style>
