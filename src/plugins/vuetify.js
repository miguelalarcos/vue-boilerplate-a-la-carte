import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VForm,
  VNavigationDrawer,
  VFooter,
  VTextField,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VForm,
    VNavigationDrawer,
    VFooter,
    VTextField,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  iconfont: 'md',
})
