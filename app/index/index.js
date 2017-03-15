import Vue from 'Vue';
import ComponentExamp from './components/ComExample.vue';
Vue.config.debug = true;//开启错误提示
window.onload = function(){
  new Vue({
    el : "#app",
    components : {
      'my-com-example' : ComponentExamp
    }
  });
};
