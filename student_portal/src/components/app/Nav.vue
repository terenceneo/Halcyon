<template>
	<div id='appNav'>
		<h1>Nav bar???</h1>
		<p v-if="user">User "{{ user }}" is logged in.</p>
		<p>This is just a dummy component to confirm that routing works. This should later be removed and router links should be incorporated into individual page components. Maybe consider putting routing in the header? Then the available links in each page component can be toggled based on props passed by the components</p>
		<router-link to="/login">Login</router-link>
		<br>
		<router-link to="/register">Register</router-link>
		<br>
		<router-link to="/user">User</router-link>
	</div>
</template>

<script>
export default {
  name: 'AppNav',
  props: ['user'],
  components: {},
}
</script>

<style lang="css" scoped>
#appNav {
	margin: 5px;
	border: solid black 1px;
}
</style>