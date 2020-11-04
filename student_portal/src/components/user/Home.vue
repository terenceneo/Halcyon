<template>
	<div id='home'>
		<h5>Welcome Back {{ $route.params.id }}!!</h5>
		<br><br>
		<h4><b>Alerts</b></h4>
		<h8>BT3104 Assignment 2 Due (2359)</h8><br>
		<h8>2pm - IS4228 Tutorial </h8><br>
		<h8>7pm - BT4016 Tutorial </h8><br>
		<br>
		<img src="@/assets/logo.png" alt = "Calendar">
		<p>Thinking of including 5x images here as buttons to go today the 5 main different functions</p>
	</div>
	
</template>

<script>
export default {
	name: 'Home',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
#home {
	margin: 5px;
	border: solid black 1px;
}

</style>