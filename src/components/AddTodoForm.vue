<template>
  <div>
    <input v-model="text"/>
    <button @click="handleSubmit">Add todo</button>
  </div>
</template>

<script>
  export default {
    props: ['addTodo'],

    data: () => ({
      text: ''
    }),

    methods: {
      handleSubmit (event) {
        event.preventDefault()
        this.addTodo(this.text)
        this.text = ''
      }
    }
  }
</script>
