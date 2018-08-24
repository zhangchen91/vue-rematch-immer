<template>
  <Connect
    :mapStateToProps="mapStateToProps"
    :mapDispatchToProps="mapDispatchToProps">
    <Count slot-scope="props"
      :count="props.count"
      :increment="props.increment"
      :incrementAsync="props.incrementAsync" />
  </Connect>
</template>

<script>
import Connect from '../components/Connect.vue'
import Count from "../components/Count.vue"

const mapStateToProps = state => ({
  count: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment: dispatch.counter.increment,
  incrementAsync: dispatch.counter.incrementAsync
})

export default {
  components: {
    Connect,
    Count
  },

  methods: {
    mapStateToProps,
    mapDispatchToProps
  }
}
</script>
