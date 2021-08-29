const fs = require('mz/fs')
const parser = require('xml2json')

const getXmlData = async () => {
    const data = await fs.readFile(`${__dirname}/../../data/users.xml`)
        .then((data) => {
            return data
        })
        .catch(e => {
            console.log(e)
        })

    var json = JSON.parse(parser.toJson(data));
    let jsonData = []
    json['users'].user.forEach(user => { jsonData.push(user) })
    return jsonData
}

module.exports = getXmlData