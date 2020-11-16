<template>
	<div id='home'>
		<h1>Home Page</h1>
		<div>
			<h2>Alerts</h2>
			<p><i>Note: for testing purposes, we will assume that the sem has not ended and lessons are as timetabled</i></p>
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">Days Remaining</th>
						<th scope="col">Activity</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(alert, index) in alerts.slice(0, numAlerts)" :key="index">
						<td>{{ alert.countdown }}</td>
						<td>{{ alert.alertText }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: ['user', 'username', 'alerts'],
	components: {},
	data: function() {
		return {
			numAlerts: 5,
		}
	},
	// computed: {
	// 	exams: function() {
	// 		let exams = [];
	// 		this.moduleList.forEach(mod => {
	// 			mod.semesterData
	// 				.filter(sem => sem.semester == '2')
	// 				.filter(sem => sem.examDate != null)
	// 				.forEach(sem => {
	// 					exams.push({
	// 						moduleCode: mod.moduleCode,
	// 						title: mod.title,
	// 						examDate: sem.examDate,
	// 						examDuration: sem.examDuration,
	// 						type: "exam"
	// 					});
	// 				});
	// 			});
	// 		return exams;
	// 	},
	// },
}
</script>

<style lang="css" scoped>
</style>