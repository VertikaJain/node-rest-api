let items = require("../items")
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

// Update Item in DB 
function updateItemInDB(id, updatedItem) {
    return new Promise((resolve, reject) => {
        // Using built-in method findIndex()
        let index = items.findIndex(item => item.id == id)
        items[index] = { id, ...updatedItem }
        // Using built-in method map()
        /* let updatedItems = items.map(item => {
            if (item.id == id) {
                item.name = updatedItem.name
                item.description = updatedItem.description
                item.price = updatedItem.price
            }
            return item
        }) */
        writeDataToFile("items.json", items)
        resolve(items)
    })
}

// Delete Item by ID
function removeItemById(id) {
    return new Promise((resolve, reject) => {
        // let item = items.find(i => i.id == id)
        items = items.filter(item => item.id != id)
        writeDataToFile("items.json", items)
        resolve(items)
    })
}

module.exports = { findAllItems, findItemById, addItemToDB, updateItemInDB, removeItemById }