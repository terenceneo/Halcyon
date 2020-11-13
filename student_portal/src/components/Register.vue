<template>
	<div id="register">
		<AppNav></AppNav>	
		<AppHeader></AppHeader>
		<h2>Register now!</h2>	
		<label>Username</label> <input type="text" name="user" v-model="username"><br>
		<label>Password</label> <input type="text" name="pass" v-model="password"><br>
		<button v-on:click="register(username, password)">Register</button>
		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppNav from './app/Nav.vue'
import AppHeader from './app/Header.vue'
import AppFooter from './app/Footer.vue'
import database from '../firebase.js'

export default {
	name: 'Register',
	components: {
		AppNav,
		AppHeader,
		AppFooter,
	},
	data: function() {
		return {
			username: null,
			password: null,
		}
	},
	methods: {
		register: function(username, password) {
			// Check if user is already in database
			var router = this.$router;
			database.collection("user")
				.where('username', '==', username)
				.limit(1) // There will only ever be 1 but just in case.
				.get()
				.then(querySnapshot => {
					if (querySnapshot.size == 0) {
						// Register new user
						database.collection("user").add({
							username,
							password,
						})
						.then(function(docRef) {
							router.push({path: '/user/'+docRef.id+'/home'});
						})
					} else {
						// Send existing user to login
						router.push({path: '/login'});
					}
				})
			return
		}
	}
}
</script>

<style lang="css" scoped>
</style>