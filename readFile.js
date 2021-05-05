
const fs = require("fs")

fs.readFile("create.txt","utf8",(error,data)=>{
    if (error) {
        console.error("no se pudo leer el archivo")
        return
    }
    console.log(data)
})