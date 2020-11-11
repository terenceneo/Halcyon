<template>
	<div id='studyGroup'>
		<h1>I am the study group page</h1>
		<p>User "{{ user }}" is logged in.</p>
		<p>This component may require another nested router.</p>
		<div>
			<p>Feeling lost and alone during this period? Fear not! Make new friends by joining a study group.</p>
			<input type="text" name="Enter your Module Code here">
		</div>
		<div>
			<p>Study groups that you're currently in:</p>
			<ul class="list-group">
				<li class="list-group-item">Cras justo odio</li>
				<li class="list-group-item">Dapibus ac facilisis in</li>
				<li class="list-group-item">Morbi leo risus</li>
				<li class="list-group-item">Porta ac consectetur ac</li>
				<li class="list-group-item">Vestibulum at eros</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StudyGroup',
	props: ['user'],
	components: {},
}
</script>

<style lang="css" scoped>
</style>