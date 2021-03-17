require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("============================================".green);
    console.log("	  Selected some option     ");
    console.log("============================================\n".green);
    console.log(`${"1.".green} Create a task`);
    console.log(`${"2.".green} List tasks`);
    console.log(`${"3.".green} List completed tasks`);
    console.log(`${"4.".green} List uncompleted tasks`);
    console.log(`${"5.".green} Complete task(s)`);
    console.log(`${"6.".green} Delete task(s)`);
    console.log(`${"0.".green} Quit\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select some option: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${"ENTER".green} to continue\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};
module.exports = {
  showMenu,
  pause,
};
