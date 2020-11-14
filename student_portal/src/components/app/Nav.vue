<template>
	<div id='appNav'>
		<ul v-if="user" class="nav justify-content-end">
			<li class="nav-item">
				<router-link to="/">Logout</router-link>
			</li>
		</ul>
		<ul v-else class="nav justify-content-end">
			<li class="nav-item">
				<router-link to="/login">Login</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/register">Register</router-link>
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

router-link {
	color: white;
}
</style>