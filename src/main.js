import Vue from 'vue'
import App from './App.vue'

// highlight.js代码高亮指令
import Highlight from './utils/highlight.js';

Vue.use(Highlight);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
