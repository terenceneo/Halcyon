<template>
	<div id='modules'>

		<div class="row">
		<div class="col-sm-9 col-md-7 col-lg-5 	mx-auto">
		<h1>My Modules</h1>

		<form v-on:submit.prevent="addModule(moduleCode)">
			<input type="text" id="module" class="form-control" v-model="moduleCode">
			<br>
			<button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add Module</button>
		</form>

		<ul class="list-group list-group-flush">
			<li class="list-group-item" v-for="(data, moduleCode) in moduleList" :key="moduleCode">
				<span>{{ data.moduleCode }} - {{ data.title }}</span>
				<button class="btn btn-primary" v-on:click="removeModule(data.moduleCode)">Remove</button>
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
	props: ['user'],
	components: {},
	data: function() {
		return {
			moduleCode: null,
			moduleList: [],
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
	mounted: function() {
		db.collection('users').doc(this.user).get().then(doc => {
			this.moduleList = doc.data().modules;
		});
		return
	},
}
</script>

<style lang="css" scoped>
</style>