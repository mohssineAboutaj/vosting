<template>
  <div class="navbar-component">
    <v-navigation-drawer
      v-if="xs"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :clipped-right="clipped"
      :fixed="fixed"
      app
      :right="right"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in links"
          v-show="!item.hidden"
          :key="i"
          :to="item.path"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>fas fa-{{ item.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-content class="mx-2">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      :fixed="fixed"
      color="primary"
      dark
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="xs">
        <v-icon>fa-stream</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon v-else>
        <v-icon>fa-dot-circle</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <div>
        <v-tabs
          v-if="!xs"
          background-color="transparent"
          dark
          active-class="white--text"
          slider-color="white"
        >
          <v-tab
            v-for="(item, i) in links"
            v-show="!item.hidden"
            :key="i"
            :to="item.path"
            router
            exact
          >
            {{ item.title }}
          </v-tab>
          <v-spacer class="mx-16"></v-spacer>
          <v-tab to="/login" router exact>
            login
          </v-tab>
          <v-btn to="/login" router exact rounded color="white primary--text">
            get started
          </v-btn>
        </v-tabs>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="switchTheme()">
        <v-icon>{{ darkMode ? "fas" : "far" }} fa-moon</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component"
import { Component } from "vue-property-decorator"
import { NavbarMixin } from "../mixins"

@Component
export default class Navbar extends mixins(NavbarMixin) {}
</script>
