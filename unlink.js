
const fs = require("fs")

fs.unlink("destino.txt", (error)=>{
    if (error) {
        console.error("no se pudo eliminar el archivo")
        return
    }
    console.log("Se eliminó el archivo")
})
