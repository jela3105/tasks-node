require("colors");

const { readData, saveData } = require("./helpers/saveFile");
const {
  confirm,
  inquirerMenu,
  pause,
  readInput,
  deleteTasksList,
} = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

const main = async () => {
  console.clear();
  let opt = "";
  const tasks = new Tasks();
  const tasksData = readData();
  if (tasksData) {
    tasks.loadTasksFromArray(tasksData);
  }
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await readInput("Description: ");
        tasks.createTask(desc);
        break;
      case "2":
        tasks.showAllList();
        break;
      case "3":
        tasks.showTasksByCompleted();
        break;
      case "4":
        tasks.showTasksByCompleted(false);
        break;
      case "6":
        const id = await deleteTasksList(tasks.arrList);
        if (id !== "0") {
          const ok = await confirm("Are you sure?");
          if (ok) {
            tasks.deleteTask(id);
            console.log("Task deleted succesfully");
          }
        }

        break;
    }

    saveData(tasks.arrList);
    await pause();
  } while (opt !== "0");
};

main();
