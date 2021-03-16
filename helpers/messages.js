require("colors");

const showMenu = () => {
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
};
module.exports = {
  showMenu,
};
