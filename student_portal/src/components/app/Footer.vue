<template>
	<div id="appFooter">
		<!-- <h1>I am a footer</h1>
		<p v-if="user">User "{{ user }}" is logged in.</p> -->
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'AppFooter',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
#appFooter {
}
</style>