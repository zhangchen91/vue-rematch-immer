<template functional>
  <ul>
    <li v-for="todo in props.todosArray" :key="todo.id">
      <span
        :style="{
          cursor: 'pointer',
          textDecoration: todo.done ? 'line-through' : 'none'
        }"
        @click="props.toggleDone(todo.id)"
      >{{todo.text}}</span>
      {{' '}}
      <button @click="props.remove(todo.id)">delete</button>
      {{' '}}
      <button @click="props.asyncRemove(todo.id)">async delete (1 second delay)</button>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['todosArray', 'toggleDone', 'remove', 'asyncRemove']
  };
</script>
