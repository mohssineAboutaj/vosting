<template>
  <v-app>
    <NavbarComponent></NavbarComponent>

    <v-main>
      <router-view></router-view>
    </v-main>

    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import NavbarComponent from "./components/navbar.component.vue"
import FooterComponent from "./components/footer.component.vue"

@Component({
  components: { NavbarComponent, FooterComponent },
})
export default class App extends Vue {}
</script>
