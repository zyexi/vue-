<template>
  <div class="tmpl">
    <h4>{{info.title}}</h4>
    <p class="info">
      <span>发表时间：{{info.add_time | dateFormat}}</span>
      <span>点击了：{{info.click}}次</span>
    </p>
    <hr>

    <div class="content" v-html="info.content"></div>

    <!-- 引用了评论组件 -->
    <mysub :artId="$route.params.id"></mysub>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import comment from '../subcom/comment.vue';
export default {
  data() {
    return {
      info:{}
    }
  },
  methods: {
    getinfo() {
      this.$http.get('api/getnew/' + this.$route.params.id).then(res => {
        var result = res.body;
        if (result.status === 0){
          this.info=result.message[0];
          Toast('加载成功');
        }else{
          Toast('加载失败');
        }
          // console.log(this.info);
      })
    }
  },
  created() {
    this.getinfo();
  },
  components:{mysub:comment}
}
</script>
<style>
.tmpl{
  padding: 10px;
}
.info{
  display: flex;
  justify-content: space-between;
}
.content img{
  width: 100%;
}
</style>


