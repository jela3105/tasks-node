require("colors");

const { inquirerMenu, pause } = require("./helpers/inquirer");

const main = async () => {
  console.clear();
  let opt = "";
  const tasks = new Tasks();
  do {
    opt = await inquirerMenu();
    await pause();
  } while (opt !== "0");
};

main();
