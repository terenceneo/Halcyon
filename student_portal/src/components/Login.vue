<template>
	<div id="login">
		<AppHeader></AppHeader>
		<AppNav></AppNav>
		<h2>I am the login page</h2>
		<label>Username</label><input type="text" name="user" v-model="username"><br>
		<label>Password</label><input type="text" name="pass" v-model="password"><br>
		<button v-on:click="login(username, password)">Log in</button>
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppNav from './app/Nav.vue'
import AppFooter from './app/Footer.vue'
import database from '../firebase.js'

export default {
	name: 'Login',
	components: {
		AppHeader,
		AppNav,
		AppFooter,
	},
	data: function() {
		return {
			username: null,
			password: null,
		}
	},
	methods: {
		login: function(username, password) {
			// Check if the username, password pair is in firestore
			// If it is, then redirect to login using the user's document id
			var router = this.$router;
			database.collection("user")
				.where('username', '==', username)
				.where('password', '==', password)
				.limit(1)
				.get()
				.then(function(querySnapshot) {
					if (querySnapshot.size == 1) {
						querySnapshot.forEach(function(doc) {
							router.push({path: '/user/'+doc.id+'/home'})
						});
					} else {
						// Handle invalid login here
					}
				})
			return
		}
	}
}
</script>

<style lang="css" scoped>
</style>