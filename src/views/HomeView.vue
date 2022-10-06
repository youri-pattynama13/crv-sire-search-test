<template>
  <div class="">
    <input v-model="search" />
    {{ filteredPosts.map((post) => post.body) }}
        <table class="table">
      <thead>
        <tr>
          <th>Movie ID</th>
          <th>Title</th>
          <th>body</th>
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
      posts: [
        {
          id: 1,
          title: "Post 1",
          body: "Vue.js is cool",
        },
        {
          id: 2,
          title: "Post 2",
          body: "Javascript is cool",
        },
      ],
    };
  },
  computed: {
    filteredPosts(): Array<{ id: number; title: string; body: string }> {
      console.log(this.posts.map((post) => post.body));
      if (this.search.length >= 3) {
        return this.posts.filter((post) => {
          return post.body.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return [];
      }
    },
  },
});
</script>
