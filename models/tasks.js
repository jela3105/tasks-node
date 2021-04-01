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

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
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

  showAllList() {
    this.arrList.forEach((task, i) => {
      console.log(
        `${i++}.`.green +
          ` ${task.desc} :: ${
            task.completedOn ? "Completed".green : "Pending".red
          }`
      );
    });
  }

  showTasksByCompleted(completed = true) {
    let counter = 0;
    this.arrList.forEach((task) => {
      if (completed) {
        counter++;
        task.completedOn
          ? console.log(
              `${counter}.`.green + ` ${task.desc} :: ${task.completedOn.green}`
            )
          : null;
      } else if (!task.completedOn & !completed) {
        counter++;
        console.log(`${counter}.`.green + ` ${task.desc} :: ${"Pending".red}`);
      }
    });
  }

  toggleCompleted(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completedOn) {
        task.completedOn = new Date().toISOString();
      }
    });

    this.arrList.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completedOn = null;
      }
    });
  }
}

module.exports = Tasks;
