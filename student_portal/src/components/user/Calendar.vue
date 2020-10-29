<template>
	<div id='calendar'>
		<h1>I am a calendar</h1>
		<p>User "{{ user }}" is logged in.</p>
	</div>
</template>

<script>
export default {
	name: 'Calendar',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
</style>