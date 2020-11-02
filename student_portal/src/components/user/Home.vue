<template>
	<div id='home'>
		<h1>I am a home page</h1>
		<p>User "{{ user }}" is logged in.</p>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
#home {
	margin: 5px;
	border: solid black 1px;
}
</style>