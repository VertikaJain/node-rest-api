const items = require("../items")
const writeDataToFile = require("../utils/utils")

// Find All Items
function findAllItems() {
    return new Promise((resolve, reject) => resolve(items))
}

// Find Item by ID
function findItemById(id) {
    return new Promise((resolve, reject) => {
        let item = items.find(i => i.id == id)
        resolve(item)
    })
}

// Add Item to DB after New Object Creation
function addItemToDB(item) {
    return new Promise((resolve, reject) => {
        items.push(item)
        writeDataToFile("items.json", items)
        resolve(items)
    })
}

module.exports = { findAllItems, findItemById, addItemToDB }