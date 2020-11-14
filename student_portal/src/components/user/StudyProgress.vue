<template>
	<div id='studyProgress'>
		<h1>I am a study progress page.</h1>
		<p>User "{{ user }}" is logged in.</p>
		{{ timerCount }}
	</div>
	
</template>

<script>
    export default {
		name: 'mentalWellbeing',
        props: ['user', 'username', 'moduleList'],
		components: {},
        data() {
            return {
                timerCount: 30
            }
        },
        watch: {
            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                },
                immediate: true // This ensures the watcher is triggered upon creation
            }
        }
    }
</script>

<style lang="css" scoped>
#home {
	margin: 5px;
	border: solid black 1px;
}
