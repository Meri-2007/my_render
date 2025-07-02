const express = require("express")
const { readFile } = require("fs/promises")
const path = require("path")
const app = express()

async function myrender(req, res, file, data = {}) {

         let template = await readFile(file, "utf-8")

        for (let key in data) {
            template=template.replaceAll(`{${key}}`,data[key])
        }
        res.setHeader("Content-Type", "text/html")
        res.end(template)
   
}
app.get("/", (req, res) => {
    myrender(req, res, "./pages/index.vjs", { name: "Ashot", age: 28 })
})
app.listen(3000, () => {
    console.log("Server started")
})
