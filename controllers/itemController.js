const { findAllItems, findItemById } = require("../models/itemModel")

// GET All Items
async function getAllItems(req, res) {
    try {
        const items = await findAllItems()
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(items))
    } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Items Not Found" }))
    }
}

// GET Item by ID
async function getItemById(req, res, id) {
    try {
        const item = await findItemById(id)
        if (!item) { //undefined
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ error: "Item Not Found" }))
        }
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(item))
    } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Item Not Found" }))
    }
}

module.exports = { getAllItems, getItemById }