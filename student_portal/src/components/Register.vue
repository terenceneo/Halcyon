<template>
	<div id="register">
		<AppHeader show-image=True></AppHeader>

		<div class="row">
		<div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
		<div class="card card-signin my-5">
		<div class="card-body">
			<h5 class="card-title text-center">Register now!</h5>
			<form class="form-signin" v-on:submit.prevent="register(username, password)">
				<div class="form-label-group">
					<label for="user">Username</label>
					<input type="text" id="user" class="form-control" v-model="username" required autofocus>
				</div>
				<br>
				<div class="form-label-group">
					<label for="pass">Password</label>
					<input type="password" id="pass" class="form-control" v-model="password" required>
				</div>
				<br>
				<button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
			</form>
		</div>
		</div>
		</div>
		</div>

		<AppFooter></AppFooter>	
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppFooter from './app/Footer.vue'
import database from '../firebase.js'

export default {
	name: 'Register',
	components: {
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
							modules: [],
							tasks: [],
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