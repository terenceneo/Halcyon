<template>
	<div id='studyProgress'>
        <h1>My Tasks</h1>
        <!-- <div class="row mb-3">
            <Pomodoro/>
        </div> -->
        <form class="row mb-3" v-on:submit.prevent="addTask(moduleCode, taskName, deadline, weightage)">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Module Code</th>
                        <th scope="col">Task Name</th>
                        <th scope="col">Weightage</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in taskList" :key="task.moduleCode+task.taskName">
                        <td>{{ task.moduleCode }}</td>
                        <td>{{ task.taskName }}</td>
                        <td>{{ task.weightage }}%</td>
                        <td>{{ task.deadline }}</td>
                        <td>
                            <button 
                                class="btn btn-primary btn-block" 
                                type="button"
                                v-on:click="removeTask(task.moduleCode, task.taskName)"
                            >Done!</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select class="custom-select" v-model="moduleCode" required>
                                <option 
                                    v-for="module in moduleList" 
                                    :key="module.moduleCode"
                                    :value="module.moduleCode"
                                >{{ module.moduleCode }}</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" class="form-control" placeholder="Task" v-model="taskName" required>
                        </td>
                        <td class="input-group">
                            <input type="number" class="form-control" placeholder="Weightage" v-model.trim.number="weightage" min=0 max=100 required>
                            <div class="input-group-append">
                                <span class="input-group-text">%</span>
                            </div>
                        </td>
                        <td>
                            <input type="date" class="form-control" placeholder="Due date" v-model="deadline" required>
                        </td>
                        <td>
                            <button class="btn btn-primary btn-block" type="submit">Add Task</button>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </form>
	</div>
	
</template>

<script>
import db from '../../firebase.js'

export default {
	name: 'mentalWellbeing',
    props: ['user', 'username', 'moduleList', 'taskList'],
	components: {},
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
