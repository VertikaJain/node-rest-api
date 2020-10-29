const items = require("../items")

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

module.exports = { findAllItems, findItemById }