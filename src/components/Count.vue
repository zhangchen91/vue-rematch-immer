<template functional>
	<div>
		<button @click="props.increment">+1</button>
		<button @click="props.incrementAsync">+1 async</button>
		<h3>Count: {{ props.count }}</h3>
	</div>
</template>

<script>
export default {
  props: ['increment', 'incrementAsync', 'count']
};
</script>
