const Task = require("./task");
class Tasks {
  _list = {};

  get arrList() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });

    return list;
  }

  constructor() {
    this._list = {};
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  completeList() {
    //1. green
    //Completed green
    //Pending red
    //1. Description :: Complete | Pending

    this.arrList.forEach((task, i) => {
      console.log(
        `${i++}.`.green +
          ` ${task.desc} :: ${
            task.completedOn ? "Completed".green : "Pending".red
          }`
      );
    });
  }
}

module.exports = Tasks;
