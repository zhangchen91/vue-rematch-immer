
<template>
  <Provider
    :store="store"
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
  </Provider>
</template>

<script>
  import Provider from 'vuejs-redux';
  import store from "../rematch";
  import TodoList from '../components/TodoList.vue';
  import AddTodoForm from '../components/AddTodoForm.vue';

  const mapStateToProps = state => {
    const todosIds = Object.keys(state.todos)
    return {
      totalTodos: todosIds.length,
      completedTodos: todosIds.filter(id => state.todos[id].done).length,
      todosArray: todosIds.map(id => ({
        ...state.todos[id],
        id
      }))
    }
  }

  const mapDispatchToProps = dispatch => ({
    toggleDone: id => dispatch.todos.toggleDone(id),
    remove: id => dispatch.todos.remove(id),
    asyncRemove: id => dispatch.todos.asyncRemove(id),
    addTodo: dispatch.todos.add
  })

  export default {
    components: {
      Provider,
      TodoList,
      AddTodoForm
    },

    data: () => ({
      store
    }),

    methods: {
      mapStateToProps,
      mapDispatchToProps
    }
  }
</script>
