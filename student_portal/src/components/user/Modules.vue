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
	props: ['user', 'username', 'moduleList', 'alertList'],
	components: {},
	data: function() {
		return {
			moduleCode: null,
		}
	},
	methods: {
		addModule(moduleCode) {
			moduleCode = moduleCode.toUpperCase();
			if (this.moduleList.some(entry => entry.moduleCode == moduleCode)) {
				alert(moduleCode+' already added!');
				this.moduleCode = null;
			} else {
				let url = 'https://api.nusmods.com/v2/2019-2020/modules/'+moduleCode+'.json'
				request.get(url, { json: true }, (err, res, body) => {
					if (res.statusCode != 200) {
						alert(moduleCode+' is not a module!');
						this.moduleCode = null;
					} else {
						this.moduleList.push(body);
						db.collection('user').doc(this.user).update({modules: this.moduleList});
						if (body.semesterData.examDate) { // if exam present, push exam to alerts
							this.alertList.push({
								moduleCode: body.moduleCode,
								title: body.title,
								date: body.semesterData.examDate,
								duration: body.semesterData.examDuration,
								task: "Final Exam"
							})
							db.collection('user').doc(this.user).update({modules: this.alertList});
						}
						alert('Added '+moduleCode+'!');
						this.moduleCode = null;
					}
				});
			}
			return
		},
		removeModule(moduleCode) {
			// remove module information
			this.moduleList = this.moduleList.filter(entry => entry.moduleCode!=moduleCode)
			db.collection('user').doc(this.user).update({modules: this.moduleList});
			// remove alerts
			this.alertList = this.alertList.filter(entry => entry.moduleCode!=moduleCode)
			db.collection('user').doc(this.user).update({modules: this.alertList});
			return
		},
	},
}
</script>

<style lang="css" scoped>
</style>