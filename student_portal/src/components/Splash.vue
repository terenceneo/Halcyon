<template>
	<div id="splash">
		<AppNav></AppNav>	
		<AppHeader></AppHeader>
		<div>
			<img v-img :src="require('@/assets/calendar.png')" width="250">
			<img v-img :src="require('@/assets/graduation.png')" width="250">
			<img v-img :src="require('@/assets/send.png')" width="250">
			<img v-img :src="require('@/assets/workspace.png')" width="250">
		</div>
		<h2>I am the splash page</h2>	
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppNav from './app/Nav.vue'
import AppHeader from './app/Header.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'Splash',
	components: {
		AppNav,
		AppHeader,
		AppFooter,
	},
}
</script>

<style lang="css" scoped>
img {
	padding-right: 100px;
	margin: 10px 0;
}
</style>