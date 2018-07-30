<template>
  <Provider
    :store="store"
    :mapStateToProps="mapStateToProps"
    :mapDispatchToProps="mapDispatchToProps">
    <template slot-scope="{increment, incrementAsync, count}">
      <Counter
        :count="count"
        :increment="increment"
        :incrementAsync="incrementAsync" />
    </template>
  </Provider>
</template>

<script>
  import Provider from 'vuejs-redux';
  import store from "./rematch";
  import Counter from './components/Counter.vue';

  // It's recommended to declare mapState and mapDispatch outside the component (as pure function)
  // for easier tests.
  const mapStateToProps = state => ({
    count: state.count,
  });

  const mapDispatchToProps = dispatch => ({
    increment: dispatch.count.increment,
    incrementAsync: dispatch.count.incrementAsync,
  })

  export default {
    components: {
      Provider,
      Counter
    },

    data: () => ({
      store // make it accessible in the template
    }),

    methods: {
      mapStateToProps,
      mapDispatchToProps
    }
  }
</script>
