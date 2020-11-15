<template>
	<div id='studyGroup'>
		<h1>Study Groups</h1>
		<p>User "{{ username }}" is logged in.</p>
		<p>This component may require another nested router.</p>
		<div>
			<p>Feeling lost and alone during this period? Fear not! Make new friends by joining a study group.</p>
			<!-- <input type="text" name="Enter your Module Code here"> -->
		</div>
		<div>
			<p>Study groups that you're currently in:</p>
			<tbody v-for="mod in moduleList" :key="mod.moduleCode">
				<tr>
					<td class="agenda-module">
						{{ mod.moduleCode }} {{ mod.title }}
					</td>
					<td class="agenda-links"> 
						<button 
							v-if="getTele(mod.moduleCode) != null">
							<!-- v-bind: href="tele"
							onclick="window.open(this.href)"> -->
							<a v-bind:href = "tele" target = "_blank">
								<img v-img :src="require('@/assets/telegram.png')" width="25"/>
								join chat
							</a>
						</button>
						<button 
							v-else
							onclick="window.open('https://telegram.me/NUSModchatBot')">
							<img v-img :src="require('@/assets/telegram.png')" width="25"/>
							create new chat for {{ mod.moduleCode }}
						</button>
					</td>
					<td>
						<button onclick="window.open('https://nus-sg.zoom.us/j/88453916973?pwd=NlVuSVVZUGF6RkVaYmU3OWxJT2VnZz09')">
							<img v-img :src="require('@/assets/zoom.png')" width="25"/>
							join room
						</button>
					</td>
				</tr>
				<!-- <li class="list-group-item">GES1010 Assignment 1 Due</li> -->
				<!-- <li class="list-group-item">DBA 2705 Assignment 2 Due</li> -->
			</tbody>
		</div>
	</div>
</template>

<script>
import modchats from '@/assets/modchats.json'
export default {
	name: 'StudyGroup',
	props: ['user', 'username', 'moduleList'],
	components: {},
	data: function() {
		return {
			modchatsList: modchats,
			tele: null,
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
		}
	}
}
</script>

<style lang="css" scoped>
/* Dates */
.agenda .agenda-links .dayofmonth {
  width: 40px;
  font-size: 36px;
  line-height: 36px;
  float: left;
  text-align: left;
  margin-right: 10px; 
}

/* Events */
.agenda .agenda-modules .agenda-module {
	text-align: left;
}

tbody {
	align-self: center;
}

td {
  text-align: left;
  line-height: 36px;
  margin-right: 10px; 
  margin-left: 10px; 
}
</style>