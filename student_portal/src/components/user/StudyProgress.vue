<template>
	<div id='studyProgress'>
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5  mx-auto">
                <Pomodoro/>
                <h1>My Tasks</h1>
                
                <form v-on:submit.prevent="addTask(moduleCode, taskName, deadline, weightage)">
                    <div class="input-group mb-3">
                        <select class="custom-select" v-model="moduleCode" required>
                            <option 
                                v-for="module in moduleList" 
                                :key="module.moduleCode"
                                :value="module.moduleCode"
                            >{{ module.moduleCode }} - {{module.title}}</option>
                        </select>
                        <input type="text" class="form-control" placeholder="Task" v-model="taskName" required>
                        <input type="number" class="form-control" placeholder="Weightage" v-model.trim.number="weightage" min=0 max=100 required>
                        <div class="input-group-append">
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                    <input type="date" class="form-control" placeholder="Due date" v-model="deadline" required>
                    <br>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add Task</button>
                </form>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="task in taskList" :key="task.moduleCode+task.taskName">
                        <span>{{ task.moduleCode }}: {{ task.taskName }} ({{ task.weightage }}%) - {{ task.deadline }}</span>
                        <button class="btn btn-primary" v-on:click="removeTask(task.moduleCode, task.taskName)">Remove</button>
                    </li>
                </ul>
            
            </div>
        </div>
	</div>
	
</template>

<script>
import db from '../../firebase.js'
import Pomodoro from 'vuemodoro'
export default {
	name: 'mentalWellbeing',
    props: ['user', 'username', 'moduleList', 'taskList'],
	components: {
        Pomodoro,
    },
    data() {
        return {
            moduleCode: null,
            taskName: null,
            deadline: null,
            weightage: null,
        }
    },
    methods: {
        addTask(moduleCode, taskName, deadline, weightage) {
            moduleCode = moduleCode.toUpperCase();
            if (!moduleCode) {
                alert('Please select a module!');
            }
            else if (!this.weightage) {
                alert('Enter a numerical weightage!');
            }
            else if (!this.moduleList.some(entry => entry.moduleCode==moduleCode )) {
                alert('You are not taking '+moduleCode+'! (Add it under My Modules)');
            } 
            else if (this.taskList.some(entry => entry.moduleCode==moduleCode & entry.taskName==taskName)) {
                alert(moduleCode+' '+taskName+' already added!');
            } 
            // else if (weightage) {
            //     // Do input validation here
            // } 
            else {
                this.taskList.push({
                    moduleCode,
                    taskName,
                    deadline,
                    weightage,
                });
                alert('Added '+moduleCode+': '+taskName+'!');
                this.moduleCode = null;
                this.taskName = null;
                this.deadline = null;
                this.weightage = null;
            }
            return
        },
        removeTask(moduleCode, taskName) {
            this.taskList = this.taskList.filter(entry => entry.moduleCode!=moduleCode & entry.taskName!=taskName)
            db.collection('user').doc(this.user).update({task: this.taskList});
            return
        },
    }
}
</script>

<style lang="css" scoped>
#home {
	margin: 5px;
	border: solid black 1px;
}
