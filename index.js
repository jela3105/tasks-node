require("colors");

const { inquirerMenu } = require("./helpers/inquirer");

const main = async () => {
  console.clear();
  let opt = "";
  do {
    opt = await inquirerMenu();
    if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
