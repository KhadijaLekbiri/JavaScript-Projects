<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Library></Library>
</div>
</template>

<script>
// @ is an alias to /src
import Library from './Library.vue';

export default {
  name: 'HomeView',
  components: {
    Library
  }
}
</script>
