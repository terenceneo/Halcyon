<template>
	<div id="appHeader" >
		<p v-if="user">User "{{ user }}" is logged in.</p>
		<div class="jumbotron" :style="{'background-color':color}" >
			<h1 class="display-4">H A L C Y O N</h1>
			<p class="lead">Changing the way students work from home.</p>
			<hr class="my-4">
			<div style="text-align: center">
			<a class="btn btn-primary btn-lg" href="#" role="button">Log In</a>
			<div class="divider"/>
			<a class="btn btn-primary btn-lg" href="#" role="button">Register Now</a>
			</div>
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

.divider{
    width:10px;
    height:auto;
    display:inline-block;
}

</style>