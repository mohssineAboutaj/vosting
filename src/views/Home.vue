<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height="700"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-4 font-weight-thin">
          Vosting
        </h1>
        <h4 class="subheading mb-8 mt-6">
          Build your application today!
        </h4>
        <v-btn to="/login" router exact rounded color="white primary--text">
          get started
        </v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Home extends Vue {}
</script>
