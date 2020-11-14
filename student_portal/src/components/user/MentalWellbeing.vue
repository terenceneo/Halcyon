<template>
	<div id='mentalWellbeing'>
		<h1>Time for a break</h1>
		<p>User "{{ user }}" is logged in.</p>
	</div>
</template>

<script>
export default {
	name: 'mentalWellbeing',
	props: ['user', 'username', 'moduleList'],
	components: {},
}
</script>

<style lang="css" scoped>
</style>