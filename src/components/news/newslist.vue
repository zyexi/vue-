<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h4>{{item.title}}</h4>
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    getnews() {
      this.$http.get('api/getnewslist').then(res => {
        var result = res.body;
        if (result.status === 0) {
          Toast('加载成功');
          this.list = result.message;
        } else {
          Toast('加载失败');
        }
        console.log(result);

      })
    },
  },
  created() {
    this.getnews();
  }
}
</script>
<style lang="less" scoped>
h4{
  font-size: 14px;
}
.mui-ellipsis{
  display: flex;
  justify-content:space-between;
}
</style>




