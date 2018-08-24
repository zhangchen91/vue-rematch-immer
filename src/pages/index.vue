
<template>
  <div>
    <router-link :to="{ path: '/counter' }">goto counter</router-link>
    <Todos></Todos>
  </div>
</template>

<script>
  import Todos from './Todos.vue';

  export default {
    components: {
      Todos
    }
  }
</script>
