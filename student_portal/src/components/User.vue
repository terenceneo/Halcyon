<template>
	<div id="user-container">
		<AppHeader
			v-bind:user="user"
			show-image=True
			v-bind:today="today">
		</AppHeader>
		<h1> Welcome {{ username }}!</h1>
		<AppNav v-bind:routes="routes" center=True></AppNav>
		<router-view 
			v-bind:user="user"
			v-bind:username="username"
			v-bind:module-list="moduleList"
			v-bind:task-list="taskList"
			v-bind:alert-list="alertList"
			v-bind:timetable="timetable"
			v-bind:today="today"
		></router-view>
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
			user: null,
			username: null,
			moduleList: [],
			taskList: [],
			alertList: [],
			today: null,
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
			let lessons = [];
			this.moduleList.forEach(mod => {
				mod.semesterData
					.filter(sem => sem.semester == '2')
					.forEach(sem => {
						sem.timetable.forEach(cls => {
							lessons.push({
								moduleCode: mod.moduleCode,
								title: mod.title,
								...cls,
							});
						});
					});
				});
			return lessons;
		}
	},
	// methods: {
	// 	getUsername() {
	// 		db.collection("user").doc(this.user).get().then((doc)=>{
	// 			this.username = doc.data().username;
	// 		})
	// 		return this.username;
	// 	}
	// },
	mounted: function() {
		db.collection('user').doc(this.$route.params.id).get()
			.then(doc => {
				this.user = this.$route.params.id;
				this.username = doc.data().username;
				this.moduleList = doc.data().modules;
				// this.taskList = doc.data().taskList,
				this.alertList = doc.data().alerts;
				this.today = new Date();
				console.log(this.today);
				console.log(this.user);
				console.log(this.username);
				console.log(this.moduleList);
				console.log(this.taskList);
			})
		
		db.collection('users').doc(this.$route.params.id)
			.onSnapshot(doc => {
			this.user = this.$route.params.id;
				this.username = doc.data().username;
				this.moduleList = doc.data().modules;
				// this.taskList = doc.data().taskList,
				console.log(this.user);
				console.log(this.username);
				console.log(this.moduleList);
				console.log(this.taskList);
			})				
		return
	},
}
</script>

<style lang="css" scoped>
li {
	padding-right: 10px;
	margin: 10px;
}
</style>