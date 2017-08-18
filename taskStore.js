
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

// Mock create API
let createTask = (taskName) => {
	var response = taskList.slice();

	response.push({
		id: nextId++,
		name: taskName,
		isCompleted: false	
	});
	return response;
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

	response.sort((a, b) => {
		if (a.isCompleted && b.isCompleted){
			return 0;
		}else if (a.isCompleted){
			return 1;
		}else{
			return -1;
		}
	});
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

		case 'UPDATE_STATUS_TODO':
			taskList = updateTaskStatus(payload.data);
			taskStore.emitChange();
		break;
	}
});

module.exports = taskStore;