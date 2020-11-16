<template>
	<div id="user-container">
		<AppHeader
			v-bind:user="user"
			show-image=True
			v-bind:today="today"
			v-bind:semester="semester">
		</AppHeader>
		<h1> Welcome {{ username }}!</h1>
		<AppNav v-bind:routes="routes" center=True></AppNav>
		<div class="col-sm-9 col-md-9 col-lg-7 mx-auto">
			<router-view 
				v-bind:user="user"
				v-bind:username="username"
				v-bind:module-list="moduleList"
				v-bind:task-list="taskList"
				v-bind:timetable="timetable"
				v-bind:alerts="alerts"
				v-bind:examsList="examsList"
				v-bind:today="today"
				v-bind:semester="semester"
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
			days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			today: new Date(),
			user: this.$route.params.id,
			username: null,
			moduleList: [],
			taskList: [],
			semester: 1,
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
			let today = this.today.getDay();
			let lessons = [];
			this.moduleList.forEach(mod => {
				mod.semesterData
					.filter(sem => sem.semester == this.semester)
					.forEach(sem => {
						sem.timetable
						.filter(cls => cls.classNo == '01'  || cls.classNo == '1')
						.forEach(cls => {
							lessons.push({
								countdown: (this.days.indexOf(cls.day) - today + 7) % 7,
								alertText: cls.lessonType,
								moduleCode: mod.moduleCode,
								title: mod.title,
								type: 'lesson',
								...cls,
							});
						});
					});
				});
			// sorting of lessons by date then time
			lessons = lessons.sort(function(lesson1,lesson2) {
				if (lesson1.countdown < lesson2.countdown) return -1;
				else if (lesson1.countdown > lesson2.countdown) return 1;
				else if (lesson1.startTime < lesson2.startTime) return -1;
				else if (lesson1.startTime > lesson2.startTime) return 1;
				else return 0;
			});
			return lessons;
		},
		tasks: function() {
			return this.taskList.map(task => {
				return {
					countdown: Math.floor((new Date(task.deadline) - this.today) / (1000*60*60*24)) + 1,
					day: this.days[new Date(task.deadline).getDay()],
					alertText: task.taskName+' deadline',
					type: "task",
					...task,
				}
			})
		},
		alerts: function() {
			// Sorts user's lessons and assignments by countdown
			return [...this.examsList, ...this.timetable, ...this.tasks].sort((alert1, alert2) => alert1.countdown - alert2.countdown);
		},
		examsList: function() {
			let exams = [];
			this.moduleList.forEach(mod => {
				mod.semesterData
					.filter(sem => sem.semester == this.semester)
					.filter(sem => sem.examDate != null)
					.forEach(sem => {
						exams.push({
							moduleCode: mod.moduleCode,
							title: mod.title,
							deadline: new Date(sem.examDate),
							day: this.days[new Date(sem.examDate).getDay()],
							countdown: Math.floor((new Date(sem.examDate) - this.today) / (1000*60*60*24)) + 1,
							examDuration: sem.examDuration,
							alertText: "Final Exam",
							type: "exam"
						});
					});
				});
			
			return exams;
		},
	},
	methods: {
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