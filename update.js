const fs = require("fs");

fs.readdir(`./female/images/`, (err, files) => {
  let i = 1;

  files.forEach((file) => {
    let newFileName = parseInt(file.replace(".png", "")) + 2000;

    fs.rename(
      `./female/images/${file}`,
      `./female/images/${newFileName}.png`,
      (err) => {
        if (err) console.log("ERROR: " + err);
      }
    );

    console.log(i);
    i++;
  });
});
