<template>
  <div class="hot">
    <!-- 轮播预览图 -->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item 
          v-for="(image, index) in images" 
          :key="index" 
          @click="handlePreview(index)">
          <img :src="image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类宫格 -->
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" 
          v-for="(ite,index) in categroys" 
          :key="index">
          <van-grid clickable :column-num="5">
            <van-grid-item
              v-for="(item,index) in ite"
              :key="index"
              :icon="item.icon"
              :text="item.title"
               @click="goodsBuy"
            />
          </van-grid>
        </div>
      </div>

      <!--滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>

    <div class="gift">
      <img src="/static/images/ad-001.png" width="100%" alt />
    </div>
    <div class="advertising flexbox">
      <div class="left" @click="goodsBuy">
        <img src="/static/images/ad-002.png" alt />
      </div>
      <div class="right" @click="goodsBuy">
        <div @click="goodsBuy">
          <img src="/static/images/ad-003.png" alt />
        </div>
        <div @click="goodsBuy">
          <img src="/static/images/ad-004.png" alt />
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divheight"></div>
    <!-- 精选好物 -->
    <div class="shopstitle flexbox">
      <h3>
        精选好物
        <em>选你所选</em>
      </h3>
      <div class="description">
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-006.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-007.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-005.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divheight"></div>
    <!-- 商品小分类 -->
    <div class="shopstitle flexbox">
      <h3>
        特色频道
        <em>专属定制</em>
      </h3>
      <div class="picbox flexbox">
        <div class="singlepic" @click="goodsBuy">
          <img src="/static/images/ad-008.png" alt />
        </div>
        <div class="singlepic" @click="goodsBuy">
          <img src="/static/images/ad-009.png" alt />
        </div>
        <div class="singlepic" @click="goodsBuy">
          <img src="/static/images/ad-010.png" alt />
        </div>
        <div class="singlepic" @click="goodsBuy">
          <img src="/static/images/ad-011.png" alt />
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="divheight"></div>
    <div class="shopitem">
      <div class="pictitle flexbox" @click="goodsBuy">
        <img src="/static/images/ad-012.png" alt />
      </div>
      <div class="description">
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-013.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-014.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-015.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="shopitem">
      <div class="pictitle flexbox" @click="goodsBuy">
        <img src="/static/images/ad-020.png" alt />
      </div>
      <div class="description">
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-021.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-022.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-023.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="shopitem">
      <div class="pictitle flexbox" @click="goodsBuy">
        <img src="/static/images/ad-024.png" alt />
      </div>
      <div class="description">
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-025.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-026.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-027.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
    </div>
    </div>
    <div class="shopitem">
      <div class="pictitle flexbox" @click="goodsBuy">
        <img src="/static/images/ad-028.png" alt />
      </div>
      <div class="description">
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-029.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-030.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
        <div class="bodydescription">
          <div class="pic" @click="goodsBuy">
            <img src="/static/images/ad-031.png" width="100%" alt />
            <p class="price">
              积分兑换贝亲宽奶瓶6-12个月<br/>
              <span>
                <em>￥1</em>X4.9万积分
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";

export default {
  name: "hot",
  data() {
    return {
      images: [
        "/static/images/banner.png",
        "/static/images/banner.png",
        "/static/images/banner.png",
        "/static/images/banner.png"
      ],
      categroys: {
        page1: [
          {
            title: "热卖榜单",
            icon: "/static/images/nav-001.png"
          },
          {
            title: "24期",
            icon: "/static/images/nav-002.png"
          },
          {
            title: "积分专区",
            icon: "/static/images/nav-003.png"
          },

          {
            title: "试用中心",
            icon: "/static/images/nav-004.png"
          },
          {
            title: "爱上新",
            icon: "/static/images/nav-005.png"
          },
          {
            title: "洗护用品",
            icon: "/static/images/nav-006.png"
          },
          {
            title: "平安中心",
            icon: "/static/images/nav-007.png"
          },
          {
            title: "特卖专区",
            icon: "/static/images/nav-008.png"
          },
          {
            title: "车主生活",
            icon: "/static/images/nav-009.png"
          },
          {
            title: "车主保险",
            icon: "/static/images/nav-010.png"
          }
        ],
        page2: [
          {
            title: "洗护用品",
            icon: "/static/images/nav-006.png"
          },
          {
            title: "平安中心",
            icon: "/static/images/nav-007.png"
          },
          {
            title: "特卖专区",
            icon: "/static/images/nav-008.png"
          },
          {
            title: "车主生活",
            icon: "/static/images/nav-009.png"
          },
          {
            title: "车主保险",
            icon: "/static/images/nav-010.png"
          }
        ]
      }
    };
  },
  mounted() {
    const el = this.$refs.swiper;
    const mySwiper = new Swiper(el, {
      freeMode: true,
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
    //获取滚动条的HTML元素，还可通过$el获取DOM7。
    mySwiper.scrollbar.$el.css("width", "100px");
    mySwiper.scrollbar.$dragEl.css("background", "#ff6600");
    //更新滚动条
    mySwiper.scrollbar.updateSize();
  },
  methods: {
    handlePreview(index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
        onClose() {}
      });
    },
     goodsBuy(){
      this.$router.push({
        name:"goodsbuy"
      })
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.hot {
  .banner {
    height: 280px;
    .van-swipe {
      height: 100%;
    }
  }
  .swiper-scrollbar {
    left: calc(49% - 50px);
  }
  .gift {
    height: 200px;
    background-color: #eee;
  }
  .flexbox {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .advertising {
    height: 400px;
    .left {
      margin-left: 10px;
      margin-top: 20px;
      border-radius: 8px;
      overflow: hidden;
      height: 315px;
      width: 330px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      margin-left: 13px;
      div {
        width: 350px;
        height: 140px;
        margin-top: 15px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .divheight {
    height: 20px;
    width: 100%;
    background-color: #eee;
  }
  .shopstitle {
    position: relative;
    height: 400px;
    h3 {
      position: absolute;
      top: 20px;
      font-size: 35px;
      em {
        margin-left: 18px;
        color: #b9b9b9;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
      }
    }
    .description {
      position: absolute;
      top: 80px;
      .bodydescription {
        float: left;
        margin-left: 15px;
        .pic {
          width: 220px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .price {
          font-size: 20px;
          overflow: hidden;
          word-break: normal;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            display: inline-block;
            margin-top: 20px;
            em {
              color: red;
              font-style: normal;
              font-weight: normal;
            }
          }
        }
      }
    }
    .picbox {
      margin-top: 50px;
      .singlepic {
        width: 320px;
        img {
          width: 100%;
        }
      }
    }
  }
  .shopitem {
    height: 700px;
    position: relative;
    .pictitle {
      height: 200px;
      padding-top: 20px;
      img {
        height: 100%;
      }
    }
    .description {
      position: absolute;
      top: 260px;
      left: 10px;
      .bodydescription {
        float: left;
        margin-left: 15px;
        .pic {
          width: 220px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .price {
          font-size: 20px;
          overflow: hidden;
          word-break: normal;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            display: inline-block;
            margin-top: 20px;
            em {
              color: red;
              font-style: normal;
              font-weight: normal;
            }
          }
        }
      }
    }
  }
}
</style>
