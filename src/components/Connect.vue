<script>
export default {
  name: 'Connect',

  props: {
    mapDispatchToProps: {
      required: false,
      default: () => ({}),
      type: Function
    },

    mapStateToProps: {
      required: false,
      default: () => ({}),
      type: Function
    }
  },

  inject: ['$$store'],

  created () {
    this._unsubscribe = this.$$store.subscribe(() => {
      this.$forceUpdate()
    })
  },

  destroyed () {
    this._unsubscribe()
  },

  render () {
    const {
      $$store,
      $scopedSlots,
      mapStateToProps,
      mapDispatchToProps
    } = this
    const nodes = $scopedSlots.default({
      ...mapDispatchToProps($$store.dispatch),
      ...mapStateToProps($$store.getState())
    })
    if (Array.isArray(nodes)) {
      return nodes[0]
    } else {
      return nodes
    }
  }
}
</script>
