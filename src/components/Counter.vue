<template>
	<div class="hello">
		<button @click='increment'>+1</button>
		<button @click='incrementAsync'>+1 async</button>
		<h3>Count: {{ count }}</h3>
	</div>
</template>

<script>
export default {
  props: ["increment", "incrementAsync", "count"]
};
</script>
