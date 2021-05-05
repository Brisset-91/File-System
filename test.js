
const fs = require("fs")

fs.writeFile("create.txt", "Hola desde node fs", "utf8",(error)=>{
    if (error) {
        console.error("no se pudo crear el archivo")
        return
    }
    console.log("Se escribió el archivo")
})


// Por cada funcion deberiamos tener un script ejecutable
// readFile ok
// appendFile
// unlink
// copyFile ok
