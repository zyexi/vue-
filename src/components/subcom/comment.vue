<template>
  <div>
    <h4>发表评论</h4>
    <hr>
    <textarea rows="3" placeholder="请输入评论内容，最多输入120字" maxlength="120" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <!-- 显示评论 -->
    <div class="cmt-list">
      <div v-for="(item, i) in list" :key="i">
        <div class="cmt-info">
          <span>第{{i+1}}楼</span>&nbsp;&nbsp;
          <span>用户：{{item.user_name}}</span>&nbsp;&nbsp;
          <span>发表时间：{{item.add_time | dateFormat}}</span>&nbsp;&nbsp;
        </div>
        <div class="cmt-content">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      content: '',
      pageindex: 1,
      list: []
    }
  },
  methods: {
    getComment() {
      this.$http.get('api/getcomments/' + this.artId + '?pageindex=' + this.pageindex).then(res => {
        if (res.body.status === 0) {
          // console.log(res.body);
          this.list = this.list.concat(res.body.message);
        } else {
          Toast('获取评论失败');
        }
      })
    },
    postComment() {
      if (this.content.trim().length === 0) {
        return Toast('评论不能为空');
      }
      this.$http.post('api/postcomment/' + this.artId, { content: this.content }, { emulateJSON: true }).then(res => {
        if (res.body.status === 0) {
          Toast('评论成功');
          this.list.unshift({ user_name: '匿名用户', add_time: new Date(), content: this.content });
          this.content = '';
        }
      })
    },
    getMore() {
      this.pageindex++;
      this.getComment();
    }
  },
  created() {
    this.getComment();
  },
  props: ['artId']
}

</script>

<style scoped>
textarea {
  margin: 0;
  font-size: 14px;
}

.cmt-list {
  margin: 5px 0;
}

.cmt-info {
  font-size: 13px;
  background-color: #ccc;
  line-height: 30px;
}

.cmt-content {
  line-height: 40px;
  font-size: 14px;
  text-indent: 2em;
}
</style>

