<template>
	<div id="splash">
		<AppNav></AppNav>	
		<AppHeader></AppHeader>
		
		<h2>I am the splash page</h2>	
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppNav from './app/Nav.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'Splash',
	components: {
		AppHeader,
		AppNav,
		AppFooter,
	}
}
</script>

<style lang="css" scoped>
</style>