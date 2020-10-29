<template>
	<div id="user">
		<AppHeader></AppHeader>
		<AppNav></AppNav>	
		<h2>I am the user page</h2>
		<p>This is a container component that performs a one-time update for headers and whatnot with user information upon a successful login.</p>
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppNav from './app/Nav.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'User',
	components: {
		AppHeader,
		AppNav,
		AppFooter,
	}
}
</script>

<style lang="css" scoped>
</style>