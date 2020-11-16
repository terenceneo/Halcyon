<template>
	<div id='home'>
		<h1>Home Page</h1>
		<div>
			<h2>Alerts</h2>
			<p>Number of alerts to show: <input type="number" v-model.trim.number="numAlerts" min=0 max=10></p>

			<input type="checkbox" id="lessons" value="lesson" v-model="hiddenAlerts">
			<label for="lessons">Hide lessons </label>
			<input type="checkbox" id="tasks" value="task" v-model="hiddenAlerts">
			<label for="tasks">Hide tasks </label>
			<input type="checkbox" id="exams" value="exam" v-model="hiddenAlerts">
			<label for="exams">Hide exams</label>

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
					<tr v-for="(alert, index) in alertsRowSpan.slice(0, numAlerts)" :key="index">
						<td v-if="alert.showDate" class="agenda-date" :rowspan="rowSpanDate[alert.countdown]">
							<div class="dayofmonth">{{ future(alert.countdown).getDate() }}</div>
							<div class="dayofweek">{{ alert.day }}</div>
							<div class="shortdate text-muted">
								{{ months[future(alert.countdown).getMonth()] }}, {{ future(alert.countdown).getFullYear() }}
							</div>
						</td>
						<!-- <td>{{ alert.deadline  }}</td> -->
						<td v-if="alert.showDate" class="agenda-date" :rowspan="rowSpanDate[alert.countdown]">
							{{ alert.countdown }}
						</td>
						<td v-if="alert.type=='exam'" style="color:red">{{ alert.moduleCode }} {{ alert.alertText }}</td>
						<td v-else-if="alert.type=='task'" style="color:orange">{{ alert.moduleCode }} {{ alert.alertText }}</td>
						<td v-else>{{ alert.moduleCode }} {{ alert.alertText }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: ['user', 'username', 'examsList', 'timetable', 'tasks', 'today'],
	components: {},
	data: function() {
		return {
			numAlerts: 5,
			hiddenAlerts: [],
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
	computed: {
		alerts: function() {
			// Sorts user's lessons and assignments by countdown
			return [...this.examsList, ...this.timetable, ...this.tasks]
			.filter(alert => !this.hiddenAlerts.includes(alert.type))
			.sort((alert1, alert2) => alert1.countdown - alert2.countdown);
		},
		rowSpanDate: function() {
			let rowSpans = {};
			for (let index in this.alerts.slice(0, this.numAlerts)) {
				if (this.alerts[index].countdown in rowSpans) {
					rowSpans[this.alerts[index].countdown]++;
				} else {
					rowSpans[this.alerts[index].countdown] = 1;
				}
			}
			return rowSpans;
		},
		alertsRowSpan: function() {
			let prevCountdown = null;
			let alertsRowSpan = this.alerts;
			for (let index in alertsRowSpan) {
				if (alertsRowSpan[index].countdown == prevCountdown) { // seen date before
					alertsRowSpan[index]['showDate'] = false;
				} else {
					alertsRowSpan[index]['showDate'] = true;
					prevCountdown = alertsRowSpan[index].countdown;
				}
			}
			return alertsRowSpan;
		}
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