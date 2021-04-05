import { Vue, Component } from "vue-property-decorator"
import { links, title, author } from "./config"

// navbar
@Component
export class NavbarMixin extends Vue {
  // data
  darkMode = false
  clipped = false
  drawer = false
  fixed = false
  miniVariant = false
  right = false
  rightDrawer = false
  title = title
  links = links

  // methodfs
  switchTheme(): void {
    this.$vuetify.theme.dark = this.darkMode = !this.$vuetify.theme.dark
    console.log("dark mode: " + this.darkMode)
  }

  // hooks
  beforeMount(): void {
    // miximize sidebar on large screens
    this.drawer = window.innerWidth > 1200 ? true : false
  }

  // computed
  get xs(): boolean {
    return this.$vuetify.breakpoint.name === "xs"
  }
}

// footer
@Component
export class FooterMixin extends Vue {
  fixed = false
  title = title
  links = links
  author = author || "no author"
}
