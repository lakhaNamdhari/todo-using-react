
import {EventEmitter} from 'events';
import appDispatcher from './appDispatcher.js';
import actionTypes from './actionTypes.js';

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
let nextId = taskList.length;
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

let sort = (arr) => {
	return arr.sort((a, b) => {
		if (a.isCompleted && b.isCompleted){
			return 0;
		}else if (a.isCompleted){
			return 1;
		}else{
			return -1;
		}
	});
}

// Mock create API
let createTask = (taskName) => {
	var response = taskList.slice();

	response.push({
		id: nextId++,
		name: taskName,
		isCompleted: false	
	});

	return sort(response);
}

// Mock Remove API
let removeTask = (id) => {
	var response = taskList.slice(), i;

	for (i = 0; i < response.length; i++){
		if (response[i].id === id){
			response.splice(i, 1);
			break;
		}
	}
	return response;
}

// Mock Update API
let updateTask = (payload) => {
	var response = taskList.slice(), i;

	for (i = 0; i < response.length; i++){
		if (response[i].id === payload.id){
			response[i].name = payload.taskName;
			break;
		}
	}
	return response;
}

// Mock Update TODO status API
let updateTaskStatus = (payload) => {
	var response = taskList.slice(), i;

	for (i = 0; i < response.length; i++){
		if (response[i].id === payload.id){
				response[i].isCompleted = payload.isCompleted;
			break;
		}
	}
	return sort(response);
}

appDispatcher.register((payload) => {
	switch(payload.type){
		case actionTypes.ADD_TODO:
			taskList = createTask(payload.data);
			taskStore.emitChange();
		break;		

		case actionTypes.REMOVE_TODO:
			taskList = removeTask(payload.data);
			taskStore.emitChange();
		break;		

		case actionTypes.UPDATE_TODO:
			taskList = updateTask(payload.data);
			taskStore.emitChange();
		break;		

		case actionTypes.UPDATE_TODO_STATUS:
			taskList = updateTaskStatus(payload.data);
			taskStore.emitChange();
		break;
	}
});

module.exports = taskStore;