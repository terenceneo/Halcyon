<template>
	<div id="appFooter">
		<div>
			<img v-img :src="require('@/assets/calendar.png')" width="250"/>
			<img v-img :src="require('@/assets/graduation.png')" width="250"/>
			<img v-img :src="require('@/assets/send.png')" width="250"/>
			<img v-img :src="require('@/assets/workspace.png')" width="250"/>
		</div>	
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'AppFooter',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
img {
	padding: 0px 50px;
	margin: 10px 0;
}
</style>