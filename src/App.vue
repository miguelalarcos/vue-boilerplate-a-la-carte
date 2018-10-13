<template>
  <v-app dark>
    <v-content>
      <transition name="fade-transition">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>