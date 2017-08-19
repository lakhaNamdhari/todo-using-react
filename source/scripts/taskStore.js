
import {EventEmitter} from 'events';
import appDispatcher from './appDispatcher';
import actionTypes from './actionTypes';
import toDoService from '../services/todo';

let taskStore = Object.create(EventEmitter.prototype);

taskStore.getTaskList = function() {
	return toDoService.readAll();
}

taskStore.onChange = function(callback) {
		this.on('change', callback);
}

taskStore.emitChange = function() {
		this.emit('change');
}

appDispatcher.register((payload) => {
	switch(payload.type){
		case actionTypes.ADD_TODO:
			toDoService.create(payload.data);
			taskStore.emitChange();
		break;		

		case actionTypes.REMOVE_TODO:
			toDoService.delete(payload.data);
			taskStore.emitChange();
		break;		

		case actionTypes.UPDATE_TODO:
			toDoService.update(payload.data);
			taskStore.emitChange();
		break;
	}
});

module.exports = taskStore;