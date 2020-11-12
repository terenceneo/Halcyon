<template>
	<div id="user-container">
		<AppNav v-bind:user="$route.params.id"></AppNav>
		<AppHeader v-bind:user="$route.params.id"></AppHeader>
		
		<h1> Welcome {{ $route.params.id }} !</h1>
		<p>This is a container component that performs a one-time update for headers and whatnot with user information upon a successful login.</p>
		<p class="text-right">
			{{ $route.params.id }}
		</p>
		<ul class="nav justify-content-end">
			<li class="nav-item">
				<router-link to="home">Home</router-link>
			</li>
			<li class="nav-item">
				<router-link to="calendar">Calendar</router-link>
			</li>
			<li class="nav-item">
				<router-link to="modules">Modules</router-link>
			</li>
			<li class="nav-item">
				<router-link to="studygroup">Study Group</router-link>
			</li>
			<li class="nav-item">
				<router-link to="studyprogress">Study Progress</router-link>
			</li>
			<li class="nav-item">
				<router-link to="mentalwellbeing">Mental Wellbeing</router-link>
			</li>
		</ul>

		<router-view v-bind:user="$route.params.id"></router-view>
		<AppFooter v-bind:user="$route.params.id"></AppFooter>	
	</div>
</template>

<script>
import AppNav from './app/Nav.vue'
import AppHeader from './app/Header.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'User',
	components: {
		AppNav,
		AppHeader,
		AppFooter,
	}
}
</script>

<style lang="css" scoped>
li {
	padding-right: 10px;
	margin: 10px 0;
}
</style>