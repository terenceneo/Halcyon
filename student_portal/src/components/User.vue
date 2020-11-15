<template>
	<div id="user-container">
		<AppHeader
			v-bind:user="user"
			show-image=True
			v-bind:today="today">
		</AppHeader>
		<h1> Welcome {{ username }}!</h1>
		<AppNav v-bind:routes="routes" center=True></AppNav>
		<div class="col-sm-9 col-md-7 col-lg-7 mx-auto">
			<router-view 
				v-bind:user="user"
				v-bind:username="username"
				v-bind:module-list="moduleList"
				v-bind:task-list="taskList"
				v-bind:timetable="timetable"
				v-bind:alerts="alerts"
				v-bind:today="today"
			></router-view>
		</div>
		<AppFooter v-bind:user="user"></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppFooter from './app/Footer.vue'
import AppNav from './app/Nav.vue'
import db from '../firebase.js'

export default {
	name: 'User',
	components: {
		AppHeader,
		AppFooter,
		AppNav,
	},
	data: function() {
		return {
			today: new Date(),
			user: this.$route.params.id,
			username: null,
			moduleList: [],
			taskList: [],
			routes: [
				{path: 'home', text: 'Home'},
				{path: 'calendar', text: 'My Calendar'},
				{path: 'modules', text: 'My Modules'},
				{path: 'studygroup', text: 'Study Group'},
				{path: 'studyprogress', text: 'Study Progress'},
				{path: 'mentalwellbeing', text: 'Mental Wellbeing'},
			],
		}
	},
	computed: {
		timetable: function() {
			// Parses lessons from moduleList in a rendering friendly format
			let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			let today = this.today.getDay();
			let lessons = [];
			this.moduleList.forEach(mod => {
				mod.semesterData
					.filter(sem => sem.semester == '2')
					.forEach(sem => {
						sem.timetable.forEach(cls => {
							lessons.push({
								countdown: (days.indexOf(cls.day) - today + 7) % 7,
								alertText: mod.moduleCode+' '+cls.lessonType,
								moduleCode: mod.moduleCode,
								title: mod.title,
								...cls,
							});
						});
					});
				});

			return lessons.sort(this.byCountdown);
		},
		tasks: function() {
			let tasks = this.taskList.map(task => {
				return {
					countdown: Math.floor((new Date(task.deadline) - this.today) / (1000*60*60*24)),
					alertText: task.moduleCode+' '+task.taskName+' deadline',
					...task,
				}
			})
			return tasks.sort(this.byCountdown);
		},
		alerts: function() {
			// Sorts user's lessons and assignments by countdown
			return [...this.timetable, ...this.tasks].sort(this.byCountdown);
		}
	},
	methods: {
		byCountdown(item1, item2) {
			return item1.countdown - item2.countdown;
		},
		docToData(doc) {
			// Reads component data from a firebase document
			if (doc.exists) {
				this.username = doc.data().username;
				this.moduleList = doc.data().modules;
				this.taskList = doc.data().tasks;
				// console.log(this.username);
				// console.log(this.moduleList);
				// console.log(this.taskList);
			} else {
				console.log('Error loading user data for '+this.user);
			}
		}
	},
	mounted: function() {
		// Initialize data from firebase and set up a listener to update upon changes
		db.collection('user').doc(this.user).get().then(this.docToData)
		db.collection('user').doc(this.user).onSnapshot(this.docToData)
		return
	},
}
</script>

<style lang="css" scoped>
</style>