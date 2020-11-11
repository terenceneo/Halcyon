import Splash from './components/Splash.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import User from './components/User.vue'
import UserDoesNotExist from './components/UserDoesNotExist.vue'
import Home from './components/user/Home.vue'
import Calendar from './components/user/Calendar.vue'
import Modules from './components/user/Modules.vue'
import StudyGroup from './components/user/StudyGroup.vue'
import StudyProgress from './components/user/StudyProgress.vue'
import MentalWellbeing from './components/user/MentalWellbeing.vue'

const routes = [
	{path: '', component: Splash},
	{path: '/register', component: Register},
	{path: '/login', component: Login},
	{path: '/user', component: UserDoesNotExist}, // Unsure about this
	{
		// User has access to path id as $route.params.id
		// Use this to update headers with user name etc.
		path: '/user/:id', 
		component: User,
		props: true,
		
		// Nested routing for other pages that query user data
		children: [
			{path: 'home', component: Home},
			{path: 'calendar', component: Calendar},
			{path: 'modules', component: Modules},
			{path: 'studygroup', component: StudyGroup},
			{path: 'mentalwellbeing', component: MentalWellbeing},
			{path: 'studyprogress', component: StudyProgress}
		],
	},
]

export default routes;