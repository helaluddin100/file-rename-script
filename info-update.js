const fs = require("fs");

const path = "male/json/newJson/";

fs.readdir(path, (err, files) => {
  files.forEach((file) => {
    let newFileName = parseInt(
      file.replace("The Drunken Monster Maven Club #", "")
    );

    let fileData = fs.readFileSync(`${path}${file}`);
    fileData = JSON.parse(fileData);

    fileData.name = "The Drunken Monster Maven Club #" + newFileName;
    // fileData.compiler = "NFT Constructer";

    fs.writeFileSync(`${path}${file}`, JSON.stringify(fileData));
  });
});
