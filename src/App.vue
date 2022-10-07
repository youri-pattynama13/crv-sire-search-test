<template>
  <select v-model="$i18n.locale">
    <option
      v-for="(o, i) in LayoutLanguages"
      :key="i"
      :value="o.param"
      :selected="o.param === defaultLocale"
    >
      {{ o.title }}
    </option>
  </select>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" src="./scss/_global.scss">
</style>

<script lang="ts">
import { LayoutLanguages } from "./i18n/config/locales";
import { defaultLocale } from "./i18n/config";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data: () => ({ LayoutLanguages, defaultLocale }),
});

</script>