<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><div v-text="item.title" /></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title @click="appReload()"
        ><div v-text="title"
      /></v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} coomstoolbox</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-format-list-text',
          title: 'Movie List',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'List1',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'List2',
          to: '/list2',
        },
        {
          icon: 'mdi-cog',
          title: 'Settings',
          to: '/settings',
        },
      ],
      miniVariant: false,
      title: 'Movie Gather',
    }
  },
  methods: {
    appReload() {
      window.location.reload(true)
    },
  },
}
</script>
