<template>
	<div id='calendar'>
		<h1>Upcoming Classes</h1>
			<div class="agenda">
			<div class="table-responsive">
				<table class="table table-condensed table-bordered">
					<thead>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Event</th>
						</tr>
					</thead>
					<tbody>
						<!-- Single event in a single day -->
						<tr>
							<td class="agenda-date" rowspan="1">
								<div class="dayofmonth">2</div>
								<div class="dayofweek">Monday</div>
								<div class="shortdate text-muted">November, 2020</div>
							</td>
							<td class="agenda-time">
								2:00 - 4:00PM
							</td>
							<td class="agenda-events">
								<div class="agenda-event">
									BT4016 Lecture
								</div>
							</td>
						</tr>
						
						<!-- Multiple events in a single day (note the rowspan) -->
						<tr>
							<td class="agenda-date" rowspan="3">
								<div class="dayofmonth">3</div>
								<div class="dayofweek">Tuesday</div>
								<div class="shortdate text-muted">November, 2020</div>
							</td>
							<td class="agenda-time">
								10:00 - 11:00 AM 
							</td>
							<td class="agenda-events">
								<div class="agenda-event">
									BT4012 Lecture
								</div>
							</td>
						</tr>
						<tr>
							<td class="agenda-time">
								2:00 - 4:00 PM 
							</td>
							<td class="agenda-events">
								<div class="agenda-event">
									IS4228 Lecture
								</div>
							</td>
						</tr>
						<tr>
							<td class="agenda-time">
								7:00 - 9:00 PM
							</td>
							<td class="agenda-events">
								<div class="agenda-event">
									BT4016 Tutorial
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	name: 'Calendar',
	props: ['user'],
	components: {},
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