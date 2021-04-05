<template>
  <v-footer :fixed="fixed" app>
    <v-row class="text-capitalize text-center">
      <v-col cols="12" md="6">
        <v-icon primary class="mr-2">far fa-copyright</v-icon>
        {{ new Date().getFullYear() }} - {{ title }}
      </v-col>
      <v-col cols="12" md="6">
        Created by <b>{{ author }}</b>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { mixins } from "vue-class-component"
import { Component } from "vue-property-decorator"
import { FooterMixin } from "../mixins"

@Component
export default class Footer extends mixins(FooterMixin) {}
</script>
