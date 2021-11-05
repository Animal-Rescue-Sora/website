// -------------------------------
//
//  Import SCSS files
//
// -------------------------------
import 'modern-css-reset/dist/reset.min.css';
import './app/common/scss/style.scss';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import components from './app/common/components/vue.components.js';
import store from './app/common/components/vue.store.js';

// Date Format https://day.js.org/
import dayjs from 'dayjs';

Vue.prototype.$dayjs = (val) => {
  return dayjs(val);
};

// https://www.npmjs.com/package/vue-mq
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    s: 641,
    t: 899,
    d: Infinity,
  },
  defaultBreakpoint: 'd',
});

// https://www.npmjs.com/package/vue-fragment
import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

// https://vuetifyjs.com/en/features/treeshaking/#manually-importing
import Vuetify from 'vuetify/lib';
import {Ripple} from 'vuetify/lib/directives';
Vue.use(Vuetify, {
  directives: {
    Ripple,
  },
});

// https://www.npmjs.com/package/vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

// https://www.npmjs.com/package/v-scroll-lock
import VScrollLock from 'v-scroll-lock';
Vue.use(VScrollLock);

// https://github.com/nicolasbeauvais/vue-social-sharing
import VueSocialSharing from 'vue-social-sharing';
Vue.use(VueSocialSharing);

// https://jp.vuejs.org/v2/api/index.html#productionTip
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      disable: true,
    },
  }),
  store,
  components,
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {});
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {},
});
