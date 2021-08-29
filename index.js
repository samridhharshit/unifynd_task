const express = require('express')
const app = express()

const { getCsvData, getJsonData, getXmlData } = require("./server/controller/importer");
const { sortData, exportData} = require("./server/controller/exporter");


const PORT = 5000;

async function populateData() {
    const csvData = await getCsvData()
    const jsonData = await getJsonData()
    const xmlData = await getXmlData()
    return await sortData(csvData, jsonData, xmlData)
}

populateData()
    .then((data) => {
        exportData(data)
    })
    .catch(e => {
        console.log("err => ", e)
    })

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})