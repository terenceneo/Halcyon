<template>
	<div id='appNav'>
		<p v-if="user">User "{{ user }}" is logged in.</p>
		<ul class="nav justify-content-end">
			<li class="nav-item">
				<router-link to="/login">Login</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/register">Register</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/user">User</router-link>
			</li>

		</ul>
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

}

li {
	padding-right: 10px;
	margin: 10px 0;
}
</style>