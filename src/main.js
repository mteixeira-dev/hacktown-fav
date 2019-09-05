import Vue from 'vue'
import App from './App.vue'


import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

Vue.use(VueOnsen);

Vue.config.productionTip = true
new Vue({
  el: '#app',
  template:"#main",

  render: h => h(App),
  renderError (h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  },
});