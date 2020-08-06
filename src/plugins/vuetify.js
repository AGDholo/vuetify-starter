import Vue from "vue";
import Vuetify from "vuetify/lib";
import { en, zhHans } from "vuetify/es5/locale";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#1890ff",
        secondary: "#096dd9",
        accent: "#0050b3",
        error: "#f5222d",
        info: "#2f54eb",
        success: "#52c41a",
        warning: "#fa8c16"
      }
    },
    lang: {
      locales: { en, zhHans },
      current: "zhHans"
    }
  }
});
