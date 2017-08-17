
import appDispatcher from './appDispatcher.js';
import {EventEmitter} from 'events';

let taskList = [
  {
    id: 0,
    name: "go to doctor",
    isCompleted: false
  },
  {
    id: 1,
    name: "buy choclate",
    isCompleted: false
  },
  {
    id: 2,
    name: "plan vacations",
    isCompleted: true
  } 
];

let taskStore = Object.create(EventEmitter.prototype);

taskStore.getTaskList = function() {
	return taskList;
}

taskStore.onChange = function(callback) {
		this.on('change', callback);
}

taskStore.emitChange = function() {
		this.emit('change');
}

// Mock create API
let createTask = (taskName) => {
	var response = taskList.slice();

	response.push({
		id: taskList.length,
		name: taskName,
		isCompleted: false	
	});
	return response;
}

// Mock Remove API
let removeTask = (id) => {
	var response = taskList.slice();

	response.splice(id, 1);
	return response;
}

// Mock Update API
let updateTask = (payload) => {
	var response = taskList.slice();

	response[payload.id].name = payload.taskName;
	return response;
}

appDispatcher.register((payload) => {
	switch(payload.type){
		case 'ADD_TODO':
			taskList = createTask(payload.data);
			taskStore.emitChange();
		break;		

		case 'REMOVE_TODO':
			taskList = removeTask(payload.data);
			taskStore.emitChange();
		break;		

		case 'UPDATE_TODO':
			taskList = updateTask(payload.data);
			taskStore.emitChange();
		break;
	}
});

module.exports = taskStore;