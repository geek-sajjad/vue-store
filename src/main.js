import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    count(state) {
      return state.count++;
    },
  },
});

app.use(store);
app.mount('#app');
