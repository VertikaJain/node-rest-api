const fs = require("fs")

function writeDataToFile(fileName, data) {
    console.log("in writeDataToFile method");
    fs.writeFileSync(fileName, JSON.stringify(data))
}

module.exports = writeDataToFile