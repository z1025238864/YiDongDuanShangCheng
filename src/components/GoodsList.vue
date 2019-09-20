<template>
  <div class="goodslist">
    <NavBarPublic />
    <ul>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/a1.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">智能音箱小艾，最智能的音箱</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥299</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/c3.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">极致优雅办公笔记本</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥3999</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/a1.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">智能音箱小艾，最智能的音箱</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥299</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/c1.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">智能音箱小艾，最智能的音箱</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥299</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/c1.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">智能音箱小艾，最智能的音箱</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥299</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/c1.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">智能音箱小艾，最智能的音箱</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥299</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/c1.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">智能音箱小艾，最智能的音箱</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥299</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pic" @click="buy">
          <img src="/static/images/c1.jpg" width="100%" alt />
        </div>
        <div class="info">
          <p class="title">智能音箱小艾，最智能的音箱</p>
          <p class="tap">
            <span>特卖</span>|
            <span>活动价</span>
          </p>
          <div class="description">
            <span class="price">￥299</span>
            <span @click="buy">点我购买</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "goodslist",
  data() {
    return {};
  },
  methods:{
    buy(){
       this.$router.push({
          name:'goodsbuy'})
      }
    },
   
 
  components: {}
};
</script>

<style scoped lang="less">
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 372px;
    height: 640px;
    margin-bottom: 6px;
    .pic {
      width: 100%;
    }
    .info {
      font-size: 28px;
      text-overflow: ellipsic;
      white-space: nowrap;
      overflow: hidden;
    }
    .tap {
      color: white;
      margin-top: 20px;
      margin-left: 25px;
      span {
        text-align: center;
        background-color: red;
      }
    }
    .description {
      margin-top: 30px;
      color: red;
      display: flex;
      justify-content: space-between;
      span {
        padding-left: 20px;
      }
    }
  }
}
</style>
