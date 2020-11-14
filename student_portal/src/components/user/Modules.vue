<template>
	<div id='modules'>

		<div class="row">
		<div class="col-sm-9 col-md-7 col-lg-5 	mx-auto">
		<h1>My Modules {{ username }}</h1>
		<form v-on:submit.prevent="addModule(moduleCode)">
			<input type="text" id="module" class="form-control" v-model="moduleCode">
			<br>
			<button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add Module</button>
		</form>

		<ul class="list-group list-group-flush">
			<li class="list-group-item" v-for="module in moduleList" :key="module.moduleCode">
				<span>{{ module.moduleCode }} - {{ module.title }}</span>
				<button class="btn btn-primary" v-on:click="removeModule(module.moduleCode)">Remove</button>
			</li>
		</ul>
		</div>
		</div>

		
	</div>
</template>

<script>
import request from 'request'
import db from '../../firebase.js'

export default {
	name: 'Modules',
	props: ['user', 'username', 'moduleList'],
	components: {},
	data: function() {
		return {
			moduleCode: null,
		}
	},
	methods: {
		addModule(moduleCode) {
			if (this.moduleList.some(entry => entry.moduleCode == moduleCode)) {
				alert('Module already added');
				this.moduleCode = null;
			} else {
				let url = 'https://api.nusmods.com/v2/2019-2020/modules/'+moduleCode+'.json'
				request.get(url, { json: true }, (err, res, body) => {
					if (res.statusCode != 200) {
						alert('Invalid module code');
						this.moduleCode = null;
					} else {
						this.moduleList.push(body);
						db.collection('users').doc(this.user).update({modules: this.moduleList});
						alert('Added '+this.moduleCode+'!');
						this.moduleCode = null;
					}
				});
			}
			return
		},
		removeModule(moduleCode) {
			this.moduleList = this.moduleList.filter(entry => entry.moduleCode!=moduleCode)
			db.collection('users').doc(this.user).update({modules: this.moduleList});
			return
		},
	},
}
</script>

<style lang="css" scoped>
</style>