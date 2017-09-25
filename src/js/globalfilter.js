import Vue from 'vue'
import moment from 'moment'
Vue.filter('dateFormat',function(val,pattern = 'YYYY-MM-DD HH:mm:ss'){
  // console.log(moment(new Date()).format('YYYY-MM-DD'));
  return moment(val).format(pattern);
})