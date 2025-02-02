import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import fa from 'vuetify/es5/locale/fa'
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify);

export default new Vuetify({
    silent: false,
    lang: {
        locales: {en, fa},
        current: en
    },
    theme: {
        dark: false
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
});
