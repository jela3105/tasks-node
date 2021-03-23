class Tasks {
  _list = {};
  constructor() {
    this._list = {};
  }

  createTask(desc = "") {
    const taks = new Task(desc);
    this._list[taks.id] = task;
  }
}

module.exports = Tasks;
