<template>
	<div id='studyGroup'>
		<h1>Study Groups</h1>
		<div class="row bm-3 justify-content-center">
			<p>Feeling lost and alone during this period? Fear not! Make new friends by joining a study group.</p>
		</div>
		<div class="row bm-3 justify-content-center">
			<p><b>Study groups that you're currently in:</b></p>
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">Module <br><i>(click on module name to find classmates)</i></th>
						<th scope="col">Telegram Chat</th>
						<th scope="col">Meeting Room</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="mod in moduleList" :key="mod.moduleCode">
						<th scope="row" v-on:click="getClassmates(mod.moduleCode)">{{ mod.moduleCode }} {{ mod.title }}</th>
						<td> 
							<button class="btn btn-light" v-if="getTele(mod.moduleCode) != null">
								<a v-bind:href = "getTele(mod.moduleCode)" target = "_blank">
									<img v-img :src="require('@/assets/telegram.png')" width="25"/>
									join chat
								</a>
							</button>
							<button class="btn btn-light" v-else onclick="window.open('https://telegram.me/NUSModchatBot')">
								<img v-img :src="require('@/assets/telegram.png')" width="25"/>
								create new chat for {{ mod.moduleCode }}
							</button>
						</td>
						<td>
							<button class="btn btn-light" onclick="window.open('https://nus-sg.zoom.us/j/88453916973?pwd=NlVuSVVZUGF6RkVaYmU3OWxJT2VnZz09')">
								<img v-img :src="require('@/assets/zoom.png')" width="25"/>
								join room
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="row bm-3" v-show="moduleCode">
			<b>Classmates for {{ moduleCode }} - {{ title }}</b>
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">Username</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="!classmates.length">
						<td>No classmates found!</td>
					</tr>
					<tr v-for="classmate in classmates" :key="classmate.user">
						<td>{{ classmate.username }}</td>
					</tr>
				</tbody>		
			</table>
			<!-- <select v-model="moduleCode" @change="getClassmates(moduleCode)">
				<option 
					v-for="module in moduleList" 
					:key="module.moduleCode"
					:value="module.moduleCode"
				>{{ module.moduleCode }} - {{module.title}}</option>
			</select> -->
		</div>
	</div>
</template>

<script>
import db from '../../firebase.js'
import modchats from '@/assets/modchats.json'
export default {
	name: 'StudyGroup',
	props: ['user', 'username', 'moduleList'],
	components: {},
	data: function() {
		return {
			modchatsList: modchats,
			classmates: [],
			moduleCode: null,
			title: "Module not yet selected, please choose a module above",
		}
	},
	methods: {
		getTele: function(moduleCode) {
			// moduleCode = "AH2101"; // to test with a module found in list
			let found = this.modchatsList.filter(item => item.module == moduleCode);
			if (found.length != 0) {
				return found[0].telegram;
			} else {
				return null;
			}
		},
		getClassmates: function(moduleCode) {
			console.log("called getClassmates for " + moduleCode)
			this.classmates = []
			this.moduleCode = moduleCode;
			let module = this.moduleList.filter(mod => mod.moduleCode == moduleCode);
			this.title = module[0].title;
			db.collection('user').get().then(querySnapShot => {
				querySnapShot.forEach(doc => {
					doc.data().modules.forEach(mod => {
						if (mod.moduleCode == moduleCode && doc.data().username != this.username) {
							this.classmates.push({
								id: doc.id,
								username: doc.data().username
							});
						}
					})
				})
			});
			console.log(this.classmates.length + " classmates found");
			return;
		},
	}
}
</script>

<style lang="css" scoped>
</style>