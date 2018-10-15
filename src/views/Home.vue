<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile :to="{path: '/hello'}">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Hello</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{path: '/chat'}">
          <v-list-tile-action>
            <v-icon>chat</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Chat</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{path: '/chat-admin'}">
          <v-list-tile-action>
            <v-icon>chat</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ChatAdmin</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <div>hello ;)</div>
          </v-flex>
        </v-layout>
      </v-container>
      <router-view/>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: true
    }
  }
}
</script>

