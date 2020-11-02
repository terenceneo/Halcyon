<template>
	<div id='modules'>
		<h1>I am a module list</h1>
		<p>User "{{ user }}" is logged in.</p>
	</div>
</template>

<script>
export default {
	name: 'Modules',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
</style>