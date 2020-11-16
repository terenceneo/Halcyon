<template>
	<div id='home'>
		<h1>Home Page</h1>
		<div>
			<h2>Alerts</h2>
			<p>Number of alerts to show: <input type="number" v-model.trim.number="numAlerts" min=0 max=10></p>
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">Date</th>
						<!-- <th scope="col">Raw Date</th> -->
						<th scope="col">Days Remaining</th>
						<th scope="col">Activity</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(alert, index) in alerts.slice(0, numAlerts)" :key="index">
						<td class="agenda-date" rowspan="1">
							<div class="dayofmonth">{{ future(alert.countdown).getDate() }}</div>
							<div class="dayofweek">{{ alert.day }}</div>
							<div class="shortdate text-muted">
								{{ months[future(alert.countdown).getMonth()] }}, {{ future(alert.countdown).getFullYear() }}
							</div>
						</td>
						<!-- <td>{{ alert.deadline  }}</td> -->
						<td>{{ alert.countdown }}</td>
						<td>{{ alert.moduleCode }} {{ alert.alertText }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: ['user', 'username', 'alerts', 'examsList', 'today'],
	components: {},
	data: function() {
		return {
			numAlerts: 5,
			months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		}
	},
	methods: {
		future: function(incr) {
			let future = new Date()
			future.setDate(this.today.getDate() + incr);
			return future;
		},
	},
}
</script>

<style lang="css" scoped>
.agenda {  }

/* Dates */
.agenda .agenda-date { width: 170px; }
.agenda .agenda-date .dayofmonth {
  width: 40px;
  font-size: 36px;
  line-height: 36px;
  float: left;
  text-align: right;
  margin-right: 10px; 
}
.agenda .agenda-date .shortdate {
  font-size: 0.75em; 
}


/* Times */
.agenda .agenda-time { width: 140px; } 

/* Events */
.agenda .agenda-events {  } 
.agenda .agenda-events .agenda-event {  } 

@media (max-width: 767px) {
    
}
</style>