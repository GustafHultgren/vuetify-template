import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#8bc34a",
        secondary: "#9c27b0",
        accent: "#cddc39",
        error: "#f44336",
        warning: "#ff9800",
        info: "#00bcd4",
        success: "#4caf50"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});

// {
//   primary: colors.light - green.base,
//     secondary: colors.purple.base,
//       accent: colors.lime.base,
//         error: colors.red.base,
//           warning: colors.orange.base,
//             info: colors.cyan.base,
//               success: colors.green.base
// }
