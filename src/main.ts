import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vueGtag from 'vue-gtag-next';

const app = createApp(App);

app.use(router);

// Google Analyticsの設定を追加
app.use(vueGtag, {
  property: {
    id: 'G-NS8FVF7K0V'
  }
});

app.mount('#app');
