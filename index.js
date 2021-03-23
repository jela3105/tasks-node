require("colors");

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

const main = async () => {
  console.clear();
  let opt = "";
  const tasks = new Tasks();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await readInput("Description: ");
        console.log(desc);
        break;
      case "2":
        console.log(tasks._list);
        break;
      case "1":
        break;
    }
    await pause();
  } while (opt !== "0");
};

main();
