
import actionTypes from './actionTypes.js';
import appDispatcher from './appDispatcher.js';

module.exports = {
	// To add new ToDo
	addToDo: (data) => {
		appDispatcher.dispatch({
      type: actionTypes.ADD_TODO,
      data: data
    });
	},

	// Update description for existing ToDo
	updateToDo: (data) => {
	  appDispatcher.dispatch({
      type: actionTypes.UPDATE_TODO,
      data: data
    });  
	},	

	// Deletes ToDo
	removeToDo: (data) => {
	  appDispatcher.dispatch({
      type: actionTypes.REMOVE_TODO,
      data: data
    });  
	},	

	// Updates status for ToDo : Complete or incomplete
	updateToDoStatus: (data) => {
    appDispatcher.dispatch({
      type: actionTypes.UPDATE_TODO_STATUS,
      data: data
    });  
	}
}