<template>
  <Provider id="app" :store="store">
    <router-view/>
  </Provider>
</template>

<script>
  import Provider from './components/Provider.vue'
  import store from "./rematch"
	export default {
    name: 'app',
    components: {
      Provider
    },
    data: () => ({
      store
    })
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
