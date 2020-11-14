<template>
	<div id="splash">
		<AppHeader show-image=True></AppHeader>
		<div>
			<img v-img :src="require('@/assets/calendar.png')" width="250">
			<img v-img :src="require('@/assets/graduation.png')" width="250">
			<img v-img :src="require('@/assets/send.png')" width="250">
			<img v-img :src="require('@/assets/workspace.png')" width="250">
		</div>	
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