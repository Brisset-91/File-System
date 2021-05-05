const fs = require("fs")

fs.appendFile("destino.txt","data to append",(error)=>{
    if (error) {
        console.error("no se pudo abrir el archivo")
        return
    }
   else{
       console.log("se abrió el archivo")
   }
})