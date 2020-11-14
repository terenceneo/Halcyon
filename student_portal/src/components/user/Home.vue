<template>
	<div id='home'>
		<h1>Home Page</h1>
		<div>
			<h2>Alerts</h2>
			<ul class="list-group list-group-flush" v-for="lesson in timetable" :key="lesson.moduleCode">
				<li class="list-group-item">{{ lesson.startTime }} - {{ lesson.moduleCode }} {{ lesson.lessonType }} </li>
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
}
</script>

<style lang="css" scoped>
#home {
	margin: 5px;
	border: solid black 1px;
}

</style>