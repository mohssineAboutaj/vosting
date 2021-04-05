import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
import en from "vuetify/src/locale/en"

// fontawesome
import "@fortawesome/fontawesome-free/css/all.css"

// import vuetify colors
import colors from "vuetify/es5/util/colors"

Vue.use(Vuetify)

// set global shared colors palette
export const globalColorsPalette = {
  primary: colors.blue.darken3,
  secondary: colors.green.darken4,
  accent: colors.blue.accent1,
  error: colors.red.darken2,
  info: colors.green.lighten1,
  success: colors.green.accent4,
  warning: colors.yellow.darken3,
}

// export Vuetify instance
export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        ...globalColorsPalette,
        bg: colors.grey.lighten3,
      },
      dark: {
        ...globalColorsPalette,
        bg: colors.grey.darken3,
      },
    },
  },
  lang: {
    locales: { en },
    current: "en",
  },
  icons: {
    iconfont: "fa",
  },
})
