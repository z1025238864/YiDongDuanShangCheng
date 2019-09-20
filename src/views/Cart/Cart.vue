<template>
  <div class="cart">
    <NavBarPublic />
    <ul class="cartlist">
      <li class="listitem" 
          v-for="(item,index) in goodslist" 
          :key="index">
        <div class="btn">
          <van-checkbox 
              v-model="item.checked" 
              checked-color="red"
              @click="selectedSingle"
             ></van-checkbox>
        </div>

        <div class="pic">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="message">
          <p class="title" v-text="item.title"></p>
          <p class="price">￥{{item.price*item.num}}</p>
          <p class="num">
            <van-button type="default" @click="reduce(index)">-</van-button>
            <van-button type="default">{{item.num}}</van-button>
            <van-button type="default" @click="add(index)">+</van-button>
          </p>
          <p class="delete" @click="handleRemove(index)">
            <van-icon name="delete" />
          </p>
        </div>
      </li>
    </ul>
    <div class="settle">
      <div class="btn">
        <van-checkbox 
            v-model="checked" 
            checked-color="red"
            @change="checkAll"></van-checkbox>
      </div>
      <p class="checkall" >全选</p>
      <p class="info">
        合计：￥
        <span>{{total}}</span>
      </p>
      <p class="buy">
        <van-button type="danger">结算</van-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: ["keyword"],
  data() {
    return {
      checked:false,
      goodslist: [
        {
          checked: false,
          imgUrl: "/static/images/c3.jpg",
          title: "性价比超高的笔记本，办公娱乐两不误。",
          id: 0,
          price: 4999,
          num: 1
        },
        {
          checked: false,
          imgUrl: "/static/images/a1.jpg",
          title: "性价比超高的笔记本，办公娱乐两不误。",
          id: 1,
          price: 299,
          num: 1
        },
        {
          checked: false,
          imgUrl: "/static/images/c3.jpg",
          title: "性价比超高的笔记本，办公娱乐两不误。",
          id: 2,
          price: 4999,
          num: 1
        },
        {
          checked: false,
          imgUrl: "/static/images/a1.jpg",
          title: "性价比超高的笔记本，办公娱乐两不误。",
          id: 3,
          price: 299,
          num: 1
        },
        {
          checked: false,
          imgUrl: "/static/images/c3.jpg",
          title: "性价比超高的笔记本，办公娱乐两不误。",
          id: 4,
          price: 4999,
          num: 1
        }
      ]
    };
  },
  computed: {
    //总价

    total() {
      let b = this.goodslist.filter(item=>item.checked)
      return b.reduce((pre, next) => {
        return pre + next.price * next.num;
      }, 0);
    },
    
  },
  methods: {
    reduce(index) {
      this.goodslist[index].num && this.goodslist[index].num--;
    },
    add(index) {
      this.goodslist[index].num++;
    },
    handleRemove(index) {
      this.goodslist.splice(index, 1);
    },
    checkAll(a){
      this.goodslist.forEach(item=>{
        item.checked = a
      })
    },
    selectedSingle(){
      this.checked = this.goodslist.every(item=>item.checked)
    }
  },
  components: {}
};
</script>
<style scoped lang="less">
.cart {
  height: 100vh;
  position: relative;
  .cartlist {
    margin-top: 100px;
    margin-left: 30px;
    .listitem::after {
      display: inline-block;
      content: "";
      clear: both;
    }
    .listitem {
      float: left;
      margin-top: 60px;
      position: relative;
      .btn {
        float: left;
        margin-top: 60px;
      }
     
      .pic {
        float: left;
        margin-left: 20px;
        width: 150px;
        height: 150px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .message {
        float: left;
        .title {
          float: left;
          font-size: 26px;
          padding-top: 20px;
          padding-left: 20px;
        }
        .price {
          color: red;
          font-size: 30px;
          margin-left: 70px;
        }
        .num {
          position: absolute;
          bottom: 0;
          left: 280px;
          button {
            height: 40px;
            text-align: center;
            line-height: 40px;
          }
        }
        .delete {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
  .settle::after {
    display: inline-block;
    content: "";
    clear: both;
  }
  .settle {
    position: absolute;
    width: 720px;
    bottom: 200px;
    left: 20px;
    font-size: 30px;
    .btn {
      float: left;
      margin-top: 20px;
      margin-left: 13px;
    }
    .checkall{
      float: left;
      margin-top: 20px;
      margin: 20px 20px;
    }
    .info {
      margin-top: 20px;
      float: left;
      span {
        color: red;
      }
    }
    .buy {
      float: right;
    }
  }
}
</style>
