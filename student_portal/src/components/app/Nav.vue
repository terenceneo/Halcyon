<template>
	<div id='appNav'>
		<ul v-if="left" class="nav justify-content-start">
			<li class="nav-item" v-for="route in routes" :key="route.path">
				<router-link 
					:to="route.path"
					v-text="route.text"
				></router-link>
			</li>
		</ul>
		<ul v-else-if="center" class="nav justify-content-center">
			<li class="nav-item" v-for="route in routes" :key="route.path">
				<router-link 
					:to="route.path"
					v-text="route.text"
				></router-link>
			</li>
		</ul>
		<ul v-else-if="right" class="nav justify-content-end">
			<li v-if="semester" align="left">Semester {{ semester }}, {{ today }}</li>
			<li class="nav-item" v-for="route in routes" :key="route.path">
				<router-link 
					:to="route.path"
					v-text="route.text"
				></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'AppNav',
  props: ['routes', 'left', 'center', 'right', 'today'],
  components: {},
}
</script>

<style lang="css" scoped>
#appNav {

}

li {
	padding-right: 10px;
	margin: 10px 0;
}

router-link {
	color: white;
}
</style>