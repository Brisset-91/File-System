
const ejepmloMuro = {
    construido: false,
    aplanado: false,
    pintado: false
  }

  const tiempoDeEspera= 1000

  function construir (muro, cb) {
    setTimeout(() => {
      muro.construido = true
      cb(false, muro)
    }, tiempoDeEspera)
  }

  function aplanar (muro,cb) {
    setTimeout(() => {
        muro.aplanado = true
        cb(false, muro)
    }, tiempoDeEspera)
  }

  function pintar (muro,cb) {
    setTimeout(() => {
        muro.pintado = true
        cb(false, muro)
    }, tiempoDeEspera)
    return muro
  }
/*
  construir(ejepmloMuro, (error, muroConstruido) => {
    console.log('muroConstruido: ', muroConstruido)
  })*/
/*
  construir(ejepmloMuro, (error, muroConstruido)=>{
      if(error){
          console.error("No se pudo contruir");
          return //salida temprana
      }
      console.log("No se pudo aplanar")

      aplanar(muroConstruido,(error, muroAplanado)=>{
          if(error){
              console.error("no se puso aplanar");
              return
          }
          console.log()
      

          pintar
      })
  }*/