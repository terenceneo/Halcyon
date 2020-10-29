<template>
	<div id="login">
		<AppHeader></AppHeader>
		<AppNav></AppNav>
		<h2>I am the login page</h2>
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppNav from './app/Nav.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'Login',
	components: {
		AppHeader,
		AppNav,
		AppFooter,
	}
}
</script>

<style lang="css" scoped>
</style>