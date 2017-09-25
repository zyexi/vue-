<template>
  <div class="tmpl">
    <h4>{{info.title}}</h4>

    <p class="info">
      <span>发表时间：{{info.add_time | dateFormat}}</span>
      <span>浏览次数：{{info.click}}</span>
    </p>

    <hr>
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="index">
    </div>
    <!-- 图片的详细介绍 -->
    <div class="content" v-html="info.content"></div>
    <!-- 评论框组件 -->
    <comment :artId="id"></comment>
  </div>
</template>
<script>
import comment from '../subcom/comment.vue'
import { Toast } from 'mint-ui'
import config from '../../js/globalconfig.js'
export default {
  data(){
    return {
      id:this.$route.params.id,
      info:{},
      list:[]
    }
    
  },
  methods:{
    getinfo(){
      this.$http.get('api/getimageInfo/' + this.id).then(res => {
        if(res.body.status === 0){
          this.info=res.body.message[0]
        }else{
          Toast('获取失败')
        }
      })
    },
     getThumbsList() { // 获取缩略图的方法
      this.$http.get('api/getthumimages/' + this.id).then(res => {
        var result = res.body;
        if (result.status === 0) {
          // console.log(result);
          // 循环 每一个 图片数据，把 图片组织成 Vue-Preview 规定的数据格式
          var imgList = result.message.map(item => {
            item.w = 600;
            item.h = 400;
            item.src = config.imgBaseUrl + item.src;
            return item;
          });
          this.list = imgList;
        } else {
          console.log('获取缩略图失败！');
        }
      });
    }
  },
  created(){
    this.getinfo();
    this.getThumbsList();
  },
  components:{comment:comment}
}
</script>
<style lang="scss" >
.tmpl {
  padding: 3px;
}

h4 {
  color: #26A2FF;
  text-align: center;
  font-size: 17px;
  margin: 15px 0;
}

.info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.content {
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
}

.thumbs{
  img{
    margin: 5px;
    box-shadow: 0 0 15px #999;
  }
}
</style>


