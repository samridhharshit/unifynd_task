const csv = require('csvtojson')
var filePath = `${__dirname}/../../data/users.csv`

const getCsvData = async () => {
    const data = await csv().fromFile(filePath);
    return data
}

module.exports = getCsvData