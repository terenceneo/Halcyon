<template>
	<div id='home'>
		<h1>Home Page</h1>
		<p>User "{{ user }}" is logged in.</p>
		<div>
			<h2>Alerts</h2>
			<ul class="list-group list-group-flush">
				<li class="list-group-item disabled">1pm - BT3101 Lecture </li>
				<li class="list-group-item active">3pm - CS3245 Lecture</li>
				<li class="list-group-item">5pm - CS4231 Tutorial</li>
				<li class="list-group-item">GES1010 Assignment 1 Due</li>
				<li class="list-group-item">DBA 2705 Assignment 2 Due</li>
			</ul>
		</div>
		<div>
			<input type="image" id="image" alt="Calendar" src="../../assets/graduation.png" />
			<input type="image" id="image" alt="Calendar" src="../../assets/graduation.png" />
			<input type="image" id="image" alt="Calendar" src="../../assets/graduation.png" />
			<input type="image" id="image" alt="Calendar" src="../../assets/graduation.png" />
		</div>
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