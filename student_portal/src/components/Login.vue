<template>
	<div id="login">
		<AppHeader show-image=True></AppHeader>
				
		<div class="row">
		<div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
		<div class="card card-signin my-5">
		<div class="card-body">
			<h5 class="card-title text-center">Sign In</h5>
			<form class="form-signin" v-on:submit.prevent="login(username, password)">
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
				<button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
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
	name: 'Login',
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
		login: function(username, password) {
			// Check if the username, password pair is in firestore
			// If it is, then redirect to login using the user's document id
			var router = this.$router;
			database.collection("user")
				.where('username', '==', username)
				.where('password', '==', password)
				.limit(1)
				.get()
				.then(querySnapshot => {
					if (querySnapshot.size == 1) {
						querySnapshot.forEach(doc => {
							router.push({path: '/user/'+doc.id+'/home'})
						});
					} else {
						// Handle invalid login here
						console.log('invalid credentials? ', username, ' and ', password);
					}
				})
			return
		}
	}
}
</script>

<style lang="css" scoped>
</style>