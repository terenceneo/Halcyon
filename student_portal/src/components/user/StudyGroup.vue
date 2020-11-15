<template>
	<div id='studyGroup'>
		<h1>Study Groups</h1>
		<div class="row bm-3">
			<p>Feeling lost and alone during this period? Fear not! Make new friends by joining a study group.</p>
		</div>
		<div class="row bm-3">
			<p>Study groups that you're currently in:</p>
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">Module</th>
						<th scope="col">Telegram Chat</th>
						<th scope="col">Meeting Room</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="mod in moduleList" :key="mod.moduleCode">
						<th scope="row">{{ mod.moduleCode }} {{ mod.title }}</th>
						<td> 
							<button class="btn btn-light" v-if="getTele(mod.moduleCode) != null">
								<a v-bind:href = "tele" target = "_blank">
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
		<div class="row bm-3">
			<p>Find classmates for module:</p>
			<select class="custom-select" v-model="moduleCode" @change="getClassmates(moduleCode)">
				<option 
					v-for="module in moduleList" 
					:key="module.moduleCode"
					:value="module.moduleCode"
				>{{ module.moduleCode }} - {{module.title}}</option>
			</select>
			<ul class="list-group list-group-flush">
				<li class="list-group-item" v-for="classmate in classmates" :key="classmate.user">
					<span>classmate.username</span>
				</li>
			</ul>
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
			tele: null,
			classmates: [],
			moduleCode: null,
		}
	},
	methods: {
		getTele: function(moduleCode) {
			// moduleCode = "AH2101"; // to test with a module found in list
			let found = this.modchatsList.filter(item => item.module == moduleCode);
			if (found.length != 0) {
				this.tele = found[0].telegram;
				console.log(this.tele);
				return this.tele;
			} else {
				return null;
			}
		},
		getClassmates: function(moduleCode) {
			console.log("called getClassmates for " + moduleCode)
			this.classmates = []
			db.collection('user').get().then(querySnapShot => {
				querySnapShot.forEach(user => {
					user.modules.forEach(mod => {
						if (mod.moduleCode == moduleCode) {
							this.classmates.push({
								id: user,
								username: user.username
							});
						}
					})
				})
			});
			console.log(this.classmates)
			return;
		},
	}
}
</script>

<style lang="css" scoped>
</style>