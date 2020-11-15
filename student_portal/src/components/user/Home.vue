<template>
	<div id='home'>
		<h1>Home Page</h1>
		<div>
			<h2>Alerts</h2>
			<p><i>Note: for testing purposes, we will assume that the sem has not ended and lessons are as timetabled</i></p>
			<ul class="list-group list-group-flush" v-for="lesson in timetable" :key="lesson.moduleCode">
				<li class="list-group-item">
					{{ lesson.startTime }} - {{ lesson.moduleCode }} {{ lesson.lessonType }}
				</li>
				<!-- <li class="list-group-item">GES1010 Assignment 1 Due</li> -->
				<!-- <li class="list-group-item">DBA 2705 Assignment 2 Due</li> -->
			</ul>
			<ul class="list-group list-group-flush" v-for="exam in exams" :key="exam.moduleCode">
				<li class="list-group-item">
					{{ exam.examDate }} - {{ exam.moduleCode }} {{ exam.title }}
				</li>
				<!-- <li class="list-group-item">GES1010 Assignment 1 Due</li> -->
				<!-- <li class="list-group-item">DBA 2705 Assignment 2 Due</li> -->
			</ul>
		</div>
	</div>
	
</template>

<script>
export default {
	name: 'Home',
	props: ['user', 'username', 'moduleList', 'timetable'],
	components: {},
	computed: {
		exams: function() {
			let exams = [];
			this.moduleList.forEach(mod => {
				mod.semesterData
					.filter(sem => sem.semester == '2')
					.filter(sem => sem.examDate != null)
					.forEach(sem => {
						exams.push({
							moduleCode: mod.moduleCode,
							title: mod.title,
							examDate: sem.examDate,
							examDuration: sem.examDuration
						});
					});
				});
			return exams;
		}
	},
}
</script>

<style lang="css" scoped>
#home {
	margin: 5px;
	border: solid black 1px;
}

</style>