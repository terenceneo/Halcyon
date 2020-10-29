<template>
	<div id="register">
		<AppHeader></AppHeader>
		<AppNav></AppNav>
		<h2>I am the registration page</h2>	
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppNav from './app/Nav.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'Register',
	components: {
		AppHeader,
		AppNav,
		AppFooter,
	}
}
</script>

<style lang="css" scoped>
</style>