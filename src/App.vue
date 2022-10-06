<template>
 <select
      v-model="$i18n.locale"
    >
      <option
        v-for="(o, i) in LayoutLanguages"
        :key="i"
        :value="o.param"
        :selected="o.param === defaultLocale"
        >{{ o.title }}</option
      >
    </select>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">
import { LayoutLanguages } from "./i18n/config/locales";
import { defaultLocale } from "./i18n/config";

import { defineComponent } from "vue";

export default defineComponent({
   name: "App",
  components: {},
data: () => ({ LayoutLanguages, defaultLocale }),
  // methods: {
  //   updateLanguage(lang: Locales) {
  //     this.$store.commit("SET_LANGUAGE", lang);
  //   }
  // }
})

// export default Vue.extend({
//   name: "App",
//   components: {
//     HelloWorld
//   },
//   data: () => ({ LOCALES, defaultLocale }),
//   methods: {
//     updateLanguage(lang: Locales) {
//       this.$store.commit("SET_LANGUAGE", lang);
//     }
//   }
// });
</script>