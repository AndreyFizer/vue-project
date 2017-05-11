import Vue from 'vue';
import Vuex from 'vuex';

import common from './modules/common';

import * as actions from './actions';

Vue.use(Vuex);

const vueStore = new Vuex.Store({
  actions,
  modules: {
    common,
  }
});

export default vueStore;