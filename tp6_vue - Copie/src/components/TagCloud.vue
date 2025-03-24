<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <ul>
      <li v-for="tag in tags" :key="tag">
        <router-link :to="`/tags/${tag}`">{{ tag }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [], // Define the tags array
    };
  },
  mounted() {
    // Mock data for tags. This could be dynamically fetched
    this.tags = ['Vue', 'JavaScript', 'Programming', 'Frontend'];
  },
};
</script>

<style scoped>
.tag-cloud {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
}

.tag-cloud h3 {
  margin-bottom: 10px;
}

.tag-cloud ul {
  list-style-type: none;
  padding: 0;
}

.tag-cloud li {
  margin: 5px 0;
}

.tag-cloud a {
  color: #007bff;
}
</style>
