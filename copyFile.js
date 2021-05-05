
const fs = require("fs")

fs.copyFile("create.txt", "destino.txt",(error)=>{
    if (error) {
        console.error("no se pudo copiar el archivo")
        return
    }
    console.log("Se copió el archivo")
})
