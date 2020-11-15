<template>
	<div id='modules'>
		<div class="col-sm-9 col-md-7 col-lg-5 	mx-auto">
			<h1>My Modules</h1>
			<div class="input-group mb-3" v-on:submit.prevent="addModule(moduleCode)">
				<input type="text" class="form-control" placeholder="Module code">
				<div class="input-group-append">
					<button class="btn btn-primary" type="submit">Add Module</button>
				</div>
			</div>
		</div>
		<div class="col-sm-9 col-md-7 col-lg-5 	mx-auto">
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">Module Code</th>
						<th scope="col">Module Title</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="mod in moduleList" :key="mod.moduleCode">
						<td>{{ mod.moduleCode }}</td>
						<td>{{ mod.title }}</td>
					</tr>
				</tbody>
			</table>
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