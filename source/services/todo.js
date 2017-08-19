
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
let createToDo = (taskName) => {
	taskList.push({
		id: nextId++,
		name: taskName,
		isCompleted: false	
	});

	return sort(taskList);
}

// Mock Remove API
let removeToDo = (id) => {
	let i;

	for (i = 0; i < taskList.length; i++){
		if (taskList[i].id === id){
			taskList.splice(i, 1);
			break;
		}
	}
	return taskList;
}

// Mock Update API
let updateToDo = (params) => {
	let i;

	for (i = 0; i < taskList.length; i++){
		if (taskList[i].id === params.id){
			if (params.name){
				taskList[i].name = params.name;
			}else{
				taskList[i].isCompleted = params.isCompleted;
			}
			break;
		}
	}
	return sort(taskList);
}

let readToDos = () => {
	return taskList;
}

export default {
	create: createToDo,
	readAll: readToDos,
	update: updateToDo,
	delete: removeToDo
};