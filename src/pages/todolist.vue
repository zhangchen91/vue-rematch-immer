
<template>
  <div>
    <router-link :to="{ path: '/counter' }">goto counter</router-link>
    <Todos></Todos>
  </div>
</template>

<script>
  import Todos from '../provider/Todos.vue';

  export default {
    components: {
      Todos
    }
  }
</script>
