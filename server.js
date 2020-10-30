const http = require("http");
const PORT = process.env.PORT || 5000
const { getAllItems, getItemById, addItem, updateItem } = require("./controllers/itemController")
http.createServer((req, res) => {
    // GET all items
    if (req.url == "/api/items" && req.method == "GET") {
        getAllItems(req, res)
    }
    // GET item based on ID
    else if (req.url.match(/\/api\/items\/([0-9]+)/) && req.method == "GET") {
        const id = req.url.split("/")[3]
        getItemById(req, res, id)
    }
    // POST Item to DB
    else if (req.url == "/api/items" && req.method == "POST") {
        addItem(req, res);
    }
    // PUT / update item
    else if (req.url.match(/\/api\/items\/([0-9]+)/) && req.method == "PUT") {
        const id = req.url.split("/")[3]
        updateItem(req, res, id)
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Items Not Found" }))
    }
}).listen(PORT, () => console.log(`Server running on ${PORT}`))
