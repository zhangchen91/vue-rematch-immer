<template>
  <Provider
    :store="store"
    :mapStateToProps="mapStateToProps"
    :mapDispatchToProps="mapDispatchToProps">
    <Count slot-scope="props"
      :count="props.count"
      :increment="props.increment"
      :incrementAsync="props.incrementAsync" />
  </Provider>
</template>

<script>
import Provider from "vuejs-redux";
import store from "../rematch";
import Count from "../components/Count.vue";

const mapStateToProps = state => ({
  count: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: dispatch.counter.increment,
  incrementAsync: dispatch.counter.incrementAsync
});

export default {
  components: {
    Count,
    Provider
  },

  data: () => ({
    store
  }),

  methods: {
    mapStateToProps,
    mapDispatchToProps
  }
};
</script>
