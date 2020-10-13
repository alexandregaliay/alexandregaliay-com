import Vue from 'vue';
import App from './App.vue';
import PrismicVue from '@prismicio/vue'
import linkResolver from './js/link-resolver.js';
import htmlSerializer from './js/html-serializer.js';

const accessToken = 'MC5YNFhQS3hFQUFDWUFIWG1m.77-977-9a0MM77-977-9JQ_vv71mUyJ5DRQk77-977-977-9K--_vRQr77-977-9Q--_vW82L--_vQ';

Vue.use(PrismicVue, {
  endpoint: "https://alexandregaliay-com.cdn.prismic.io/api/v2",
  linkResolver: linkResolver,
  htmlSerializer: htmlSerializer,
  apiOptions: { accessToken }
});

new Vue({ render: createElement => createElement(App) }).$mount('#app');
