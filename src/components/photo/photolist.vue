<template>
  <div class="photoTpl">
    <div id="slider" class="mui-slider mui-fullscreen">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator   mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in list" :key="item.id" @click='changeList(item.id)'>
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul>
      <li v-for="item in category" :key="item.id" @click="goPhotoInfo(item.id)">
        <img v-lazy="imgBaseUrl + item.img_url">
        <div class="info">
          <h4>{{item.title}}</h4>
          {{item.zhaiyao}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js';
import config from '../../js/globalconfig.js';
export default {
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  data() {
    return {
      list: [],
      categoryId: 0,
      category: [],
      imgBaseUrl: config.imgBaseUrl
    }
  },
  methods: {
    getnav() {
      this.$http.get('api/getimgcategory').then(res => {
        if (res.body.status === 0) {
          this.list = res.body.message;
          this.list.unshift({ id: 0, title: '全部' });
        }
      })
    },
    getPhotiList() {
      this.$http.get('api/getimages/' + this.categoryId).then(res => {
        if (res.body.status === 0) {
          this.category = res.body.message;
        }
      })
    },
    changeList(id) {
      this.categoryId = id;
      this.getPhotiList();
    },
    goPhotoInfo(id){
      this.$router.push('/home/photoinfo/' + id);
    }
  },
  created() {
    this.getnav();
    this.getPhotiList();
  }
}
</script>
<style lang="less">
.mui-fullscreen {
  position: static;
}

* {
  touch-action: none;
}

.photoTpl {
  background-color: #eee;
}

img[lazy=loading] {
  width: 40px;
  height: 300px;
  display: block;
  margin: 0 auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 10px;
  li {
    margin: 10px 0;
    box-shadow: 0 0 15px #999;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
    .info {
      position: absolute;
      bottom: 0;
      color: #fff;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      h4 {
        font-size: 13px;
      }
    }
  }
}
</style>

