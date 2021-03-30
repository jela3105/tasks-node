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
}

module.exports = Tasks;
