<template>
	<div id='home'>
		<h1>I am a home page</h1>
		<p>User "{{ user }}" is logged in.</p>
		<div>
			<h2>Alerts</h2>
			<ul class="list-group">
				<li class="list-group-item">Cras justo odio</li>
				<li class="list-group-item">Dapibus ac facilisis in</li>
				<li class="list-group-item">Morbi leo risus</li>
				<li class="list-group-item">Porta ac consectetur ac</li>
				<li class="list-group-item">Vestibulum at eros</li>
			</ul>
		</div>
		<div>
			<input type="image" id="image" alt="Calendar" src="/student_portal/src/assets/graduation.png" />
			<input type="image" id="image" alt="Calendar" src="/student_portal/src/assets/graduation.png" />
			<input type="image" id="image" alt="Calendar" src="/student_portal/src/assets/graduation.png" />
			<input type="image" id="image" alt="Calendar" src="/student_portal/src/assets/graduation.png" />
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