<template>
	<div id="userDoesNotExist">
		<AppHeader show-image=True></AppHeader>
		<h2>I am an error page</h2>
		<p>This is a catch all error page to redirect to when people mess with the url. Normal users will access content through "/user/document_id"</p>
		<AppFooter></AppFooter>
	</div>
</template>

<script>
import AppHeader from './app/Header.vue'
import AppFooter from './app/Footer.vue'

export default {
	name: 'UserDoesNotExist',
	components: {
		AppHeader,
		AppFooter,
	}
}
</script>

<style lang="css" scoped>
#userDoesNotExist {
	margin: 5px;
	border: solid black 1px;
}
</style>