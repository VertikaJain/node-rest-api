const { findAllItems, findItemById, addItemToDB, updateItemInDB } = require("../models/itemModel")
const { v4: uuidv4 } = require("uuid")

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

// Add Item to DB (Create-201)
function addItem(req, res) {
    try {
        let body = ""
        req.on("data", (data) => {
            body += data.toString()
        })
        req.on("end", async () => {
            let { name, description, price } = JSON.parse(body)
            let item = { id: uuidv4(), name, description, price }
            const items = await addItemToDB(item)
            res.writeHead(201, { "Content-Type": "application/json" })
            res.end(JSON.stringify(items))
        })
    } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Cannot add Item." }))
    }
}

// Update Item in DB 
async function updateItem(req, res, id) {
    try {
        const item = await findItemById(id)
        if (!item) { //undefined
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ error: "Item Not Found" }))
        } else {
            let body = ""
            req.on("data", (data) => {
                body += data.toString()
            })
            req.on("end", async () => {
                let { name, description, price } = JSON.parse(body)
                let updatedTtem = {
                    name: name || item.name,
                    description: description || item.description,
                    price: price || item.price
                }
                const updatedTtems = await updateItemInDB(id, updatedTtem)
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(JSON.stringify(updatedTtems))
            })
        }
    } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Cannot update Item." }))
    }
}



module.exports = { getAllItems, getItemById, addItem, updateItem }