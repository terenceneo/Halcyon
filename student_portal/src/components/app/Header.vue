<template>
	<div id="appHeader">
		<h1>I am a header</h1>
		<p v-if="user">User "{{ user }}" is logged in.</p>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'AppHeader',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
#appHeader {
	margin: 5px;
	border: solid black 1px;
}
</style>