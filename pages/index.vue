<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        Movie Gather
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Movie Gather app Set your sever settings.
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="apiserverurl"
            label="Server URL"
            :rules="rules"
            hide-details="auto"
          />
          <div class="text-xs-right">
            <em><small>&mdash; coomstoolbox</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      apiserverurl: '',
      rules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 6) || 'Min 6 characters',
      ],
    }
  },
  watch: {
    apiserverurl(newapiserverurl) {
      localStorage.apiserverurl = newapiserverurl
    },
  },
  mounted() {
    if (localStorage.apiserverurl) this.apiserverurl = localStorage.apiserverurl
  },
}
</script>
