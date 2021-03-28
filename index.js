require("colors");

const { readData, saveData } = require("./helpers/saveFile");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
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
        tasks.completeList();
        break;
      case "1":
        break;
    }

    saveData(tasks.arrList);
    await pause();
  } while (opt !== "0");
};

main();
