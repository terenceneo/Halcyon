<template>
	<div id="user-container">
		<AppHeader v-bind:user="$route.params.id"></AppHeader>
		<AppNav v-bind:user="$route.params.id"></AppNav>
		
		<h1>User "{{ $route.params.id }}"</h1>
		<p>This is a container component that performs a one-time update for headers and whatnot with user information upon a successful login.</p>
		
		<router-view v-bind:user="$route.params.id"></router-view>
		<AppFooter v-bind:user="$route.params.id"></AppFooter>	
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