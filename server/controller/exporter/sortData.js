const sortData = async (csv, json, xml) => {
    const finalData = []
    csv.forEach(data => { finalData.push(data) })
    json.forEach(data => { finalData.push(data) })
    xml.forEach(data => { finalData.push(data) })
    finalData.forEach(user => user.id = user['userid'] || user['User_ID'] || user['user_id'])
    finalData.sort((a, b) => { return a.id - b.id })
    return finalData
}


module.exports = sortData