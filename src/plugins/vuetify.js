import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green.base,
        secondary: colors.purple.base,
        accent: colors.lime.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.cyan.base,
        success: colors.green.base
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
