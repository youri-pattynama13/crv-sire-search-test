<template>
  <div class="">
    <input
      v-model="search"
      @keydown.enter="isOpen = false"
      @keydown.esc="isOpen = false"
      @input="onChange"
      placeholder="Zoek"
    />
    <p>{{ $t("index.title") }}</p>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Naam</th>
          <th>Beschrijving</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in filteredPosts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      search: "",
      filteredPosts: [{}],
      posts: [
        {
          id: 1,
          title: "Woody",
          body: "Grote stier",
        },
        {
          id: 2,
          title: "Torito",
          body: "Kleine stier",
        },
      ],
    };
  },
  methods: {
    onChange() {
      if (this.search.length >= 3) {
      console.log("Now searching for", this.search);
      // do something with this.search
       this.filteredPosts = this.posts.filter((post) => {
          return post.title.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return
      }
    },
  },

});
</script>