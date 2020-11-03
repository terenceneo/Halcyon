<template>
	<div id="appHeader" >
		<p v-if="user">User "{{ user }}" is logged in.</p>
		<div class="jumbotron" :style="{'background-color':color}" >
			<h1 class="display-4">H A L C Y O N</h1>
			<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<hr class="my-4">
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'AppHeader',
	props: ['user'],
	components: {},
	data: function() {
		return{
			color:"#AFEEEE"
		}
	}
}
</script>

<style lang="css" scoped>
#appHeader {
	
}

#jumbotron {

}
</style>