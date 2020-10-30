const fs = require("fs")

function writeDataToFile(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data))
}

module.exports = writeDataToFile