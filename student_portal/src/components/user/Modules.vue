<template>
	<div id='modules'>
		<h1>My Modules</h1>
		<form class="row mb-3" v-on:submit.prevent="addModule(moduleCode)">
            <div class="table-responsive">
				<table class="table">
					<thead class="thead-light">
						<tr>
							<th scope="col">Module Code</th>
							<th scope="col">Module Title</th>
							<th scope="col">Module Title</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="mod in moduleList" :key="mod.moduleCode">
							<td>{{ mod.moduleCode }}</td>
							<td>{{ mod.title }}</td>
							<td>
								<button 
									class="btn btn-primary btn-block"
									type="button"
									v-on:click="removeModule(mod.moduleCode)"
								>Remove</button>
							</td>
						</tr>
						<tr>
							<td colspan=2>
								<input 
									class="form-control" 
									type="text" 
									v-model.trim="moduleCode" 
									:placeholder="modulePrompt" 
									required>
							</td>
							<td>		
								<button class="btn btn-primary btn-block" type="submit">Add Module</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</form>
	</div>
</template>

<script>
import request from 'request'
import db from '../../firebase.js'

export default {
	name: 'Modules',
	props: ['user', 'username', 'moduleList', 'examsList', 'semester'],
	components: {},
	data: function() {
		return {
			modulePrompt: "Module code",
			moduleCode: null,
		}
	},
	methods: {
		addModule(moduleCode) {
			moduleCode = moduleCode.toUpperCase();
			if (this.moduleList.some(entry => entry.moduleCode == moduleCode)) {
				this.modulePrompt = 'Module code ('+moduleCode+' already added!)' 
			} else {
				let url = 'https://api.nusmods.com/v2/2020-2021/modules/'+moduleCode+'.json'
				request.get(url, { json: true }, (err, res, body) => {
					if (res.statusCode != 200) {
						this.modulePrompt = 'Module code ('+moduleCode+' is not a module!)'
					} else {
						this.moduleList.push(body);
						db.collection('user').doc(this.user).update({modules: this.moduleList});
						// // if exam present, push exam to alerts
						// let semesterData = body.semesterData[0];
						// console.log("before");
						// console.log(semesterData);
						// // semesterData = semesterData.filter(sem => sem.semester == this.semester)[0];
						// console.log("after");
						// console.log(semesterData);
						// if (semesterData.examDate) {
						// 	this.examsList.push({
						// 		moduleCode: body.moduleCode,
						// 		title: body.title,
						// 		date: semesterData.examDate,
						// 		duration: semesterData.examDuration,
						// 		task: "Final Exam"
						// 	});
						// 	console.log(this.examsList);
						// 	console.log('added');
						// 	db.collection('user').doc(this.user).update({modules: this.examsList});
						// }
						this.modulePrompt = 'Module code'
					}
				});
			}
			this.moduleCode = null;
			return
		},
		removeModule(moduleCode) {
			// remove module information
			this.moduleList = this.moduleList.filter(entry => entry.moduleCode!=moduleCode)
			db.collection('user').doc(this.user).update({modules: this.moduleList});
			// // remove exams
			// this.examsList = this.examsList.filter(entry => entry.moduleCode!=moduleCode)
			// db.collection('user').doc(this.user).update({modules: this.examsList});
			return
		},
	},
}
</script>

<style lang="css" scoped>
</style>