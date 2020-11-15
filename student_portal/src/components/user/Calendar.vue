<template>
	<div id='calendar'>
		<h1>Upcoming Classes</h1>
		<div class="col-sm-9 col-md-7 col-lg-5 mx-auto agenda">
			<div class="table-responsive">
				<table class="table table-condensed table-bordered">
					<thead>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Event</th>
						</tr>
					</thead>

					<tbody v-for="lesson in timetable" :key="lesson.moduleCode">
						<tr>
							<!-- Note: edit rowspan for multiple items in a day -->
							<td class="agenda-date" rowspan="1">
								<!-- <div class="dayofmonth">2</div> -->
								<div class="dayofweek">{{ lesson.day }}</div>
								<!-- <div class="shortdate text-muted">November, 2020</div> -->
							</td>
							<td class="agenda-time">
								{{ lesson.startTime }} - {{ lesson.endTime }}
							</td>
							<td class="agenda-events">
								<div class="agenda-event">
									{{ lesson.moduleCode }} {{ lesson.lessonType }}
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
	props: ['user', 'username', 'moduleList', 'timetable'],
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