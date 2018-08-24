
<template>
  <Connect
    :mapStateToProps="mapStateToProps"
    :mapDispatchToProps="mapDispatchToProps">
    <div slot-scope="props">
      {{props.completedTodos}} of {{props.totalTodos}} todos are done!
      <TodoList
        :todosArray="props.todosArray"
        :toggleDone="props.toggleDone"
        :remove="props.remove"
        :asyncRemove="props.asyncRemove"/>
      <AddTodoForm :addTodo="props.addTodo" />
    </div>
  </Connect>
</template>

<script>
  import Connect from '../components/Connect.vue'
  import TodoList from '../components/TodoList.vue'
  import AddTodoForm from '../components/AddTodoForm.vue'

  const mapStateToProps = state => {
    const todosIds = Object.keys(state.todos)
    return {
      totalTodos: todosIds.length,
      completedTodos: todosIds.filter(id => state.todos[id].done).length,
      todosArray: todosIds.map(id => {
        let todo = state.todos[id]
        todo.id = id
        return todo
      })
    }
  }

  const mapDispatchToProps = dispatch => ({
    toggleDone: dispatch.todos.toggleDone,
    remove: dispatch.todos.remove,
    asyncRemove: dispatch.todos.asyncRemove,
    addTodo: dispatch.todos.add
  })

  export default {
    components: {
      Connect,
      TodoList,
      AddTodoForm
    },

    methods: {
      mapStateToProps,
      mapDispatchToProps
    }
  }
</script>
