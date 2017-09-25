<template>
  <div>
    <!-- 轮播图模块 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in list" :key="i">
        <img :src="baseUrl+item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格部分 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <span><img src="../../images/menu3.png" alt=""></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <span><img src="../../images/menu4.png" alt=""></span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <span>
            <img src="../../images/menu5.png" alt="">
          </span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span><img src="../../images/menu6.png" alt=""></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span><img src="../../images/menu9.png" alt=""></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span><img src="../../images/menu10.png" alt=""></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '../../js/globalconfig.js';
export default {
  data() {
    return {
      list: [],
      baseUrl: config.baseUrl
    }
  },
  methods: {
    getpics() {
      this.$http.get(config.baseUrl + '/api/getlunbo').then(res => {
        if (res.body.status === 0) {
          this.list = res.body.message;
          console.log(this.list);
        }
      })
    }
  },
  created() {
    this.getpics();
  }
}
</script>
<style>
.mint-swipe {
  height: 220px;
}

.mint-swipe img {
  height: 100%;
  width: 100%;
}
.mui-content>.mui-table-view:first-child{
  margin-top: 0px;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: 0;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.mui-content .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 img{
  width: 60px;
}
</style>


