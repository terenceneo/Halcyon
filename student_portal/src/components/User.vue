<template>
	<div id="user-container">
		<AppHeader v-bind:user="user" show-image=True></AppHeader>
		<h1> Welcome {{ username }}!</h1>
		<AppNav v-bind:routes="routes" center=True></AppNav>
		<router-view 
			v-bind:user="user"
			v-bind:username="username"
			v-bind:module-list="moduleList"
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
	mounted: function() {
		db.collection('users').doc(this.$route.params.id)
			.onSnapshot(doc => {
				this.user = this.$route.params.id;
				this.username = doc.data().username;
				this.moduleList = doc.data().modules;
			})
			.catch(error => {
				console.log(error);
			})
		return
	},
}
</script>

<style lang="css" scoped>
li {
	padding-right: 10px;
	margin: 10px 0;
}
</style>