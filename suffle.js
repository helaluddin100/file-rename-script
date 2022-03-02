const fs = require("fs");

const path = `./male/json/`;

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

fs.readdir(path, (err, files) => {
  let filesList = [];
  let secondaryFilesList = [];

  files.forEach((file) => {
    filesList.push(parseInt(file.replace(".json")));
    secondaryFilesList.push(parseInt(file.replace(".json")));
  });

  const shuffledList = shuffleArray(secondaryFilesList);

  filesList.forEach((file, index) => {
    console.log(index);
    console.log(`Before: ${file} After: ${shuffledList[index]}`);

    fs.rename(
      `./male/json/${file}.json`,
      `./male/json/newJson/${shuffledList[index]}.json`,
      function (err) {
        if (err) console.log("ERROR: " + err);
      }
    );

    fs.rename(
      `./male/images/${file}.png`,
      `./male/images/newImg/${shuffledList[index]}.png`,
      function (err) {
        if (err) console.log("ERROR: " + err);
      }
    );
  });
});
