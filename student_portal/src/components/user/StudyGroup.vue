<template>
	<div id='studyGroup'>
		<h1>I am the study group page</h1>
		<p>User "{{ user }}" is logged in.</p>
		<p>This component may require another nested router.</p>
	</div>
</template>

<script>
export default {
	name: 'StudyGroup',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
</style>