const http = require("http");
const PORT = process.env.PORT || 5000
const items = require("./items")
http.createServer((req, res) => {
    if (req.url == "/api/items" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(items))
    } else {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Items Not Found" }))
    }
}).listen(PORT, () => console.log(`Server running on ${PORT}`))
