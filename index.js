require("colors");

const { showMenu, pause } = require("./helpers/messages");

const main = async () => {
  console.clear();
  console.log("Hello world");
  showMenu();
  pause();
};

main();
