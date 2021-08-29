const fs = require("fs");
const exportData = async (data) => {
    console.log('here')
    var jsonData = JSON.stringify(data)
    fs.writeFile(`${__dirname}/../../result/jsonData.json`, jsonData, err => {
        if (err) console.log(err)
    })
}

module.exports = exportData