<template>
	<div id='home'>
		<h1>Home Page</h1>
		<div>
			<h2>Alerts</h2>
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">Days Remaining</th>
						<th scope="col">Date</th>
						<th scope="col">Activity</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(alert, index) in alerts.slice(0, numAlerts)" :key="index">
						<td>{{ alert.countdown }}</td>
						<td>{{ alert.deadline  }}</td>
						<td>{{ alert.moduleCode }} {{ alert.alertText }}</td>
					</tr>
				</tbody>
			</table>
			<br>
			{{ examsList }}
			<br>
			<br>
			{{alerts}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: ['user', 'username', 'alerts', 'examsList'],
	components: {},
	data: function() {
		return {
			numAlerts: 50,
		}
	},
}
</script>

<style lang="css" scoped>
</style>