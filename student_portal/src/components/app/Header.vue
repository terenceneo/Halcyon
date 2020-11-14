<template>
	<div id="appHeader" >
		<AppNav :user="user" :style="{'background-color':color}"></AppNav>
		<div class="jumbotron" :style="{'background-color':color}" >
			<h1 class="display-4">H A L C Y O N</h1>
			<p class="lead">Changing the way students work from home.</p>
			<p>{{ user }}</p>
			<img id="thumbnail"
				v-if="showImage"
				v-img :src="require('@/assets/graduation.png')" 
				width="250"
			>
			<!-- <hr class="my-4">
				<div style="text-align: center">
				<router-link class="btn btn-primary btn-lg" to="/login" role="button">Log In</router-link>
				<div class="divider"/>
				<router-link class="btn btn-primary btn-lg" to="/register" role="button">Register Now</router-link>
			</div> -->
		</div>
	</div>
</template>

<script type="text/javascript">
import AppNav from './Nav.vue'

export default {
	name: 'AppHeader',
	props: ['user', 'showImage'],
	components: {
		AppNav,
	},
	data: function() {
		return{
			color:"#AFEEEE"
		}
	}
}
</script>

<style lang="css" scoped>
#thumbnail {
	margin-bottom: -125px;
}

#appHeader {
	
}

.jumbotron {
	padding-bottom: 0px;
	margin-bottom: 157px; 
}

.divider{
    width:10px;
    height:auto;
    display:inline-block;
}

</style>