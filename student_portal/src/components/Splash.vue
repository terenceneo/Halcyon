<template>
	<div id="splash">
		<AppHeader show-image=True></AppHeader>
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'Splash',
	components: {
		AppHeader,
		AppFooter,
	},
}
</script>

<style lang="css" scoped>
img {
	padding: 0px 50px;
	margin: 10px 0;
}
</style>