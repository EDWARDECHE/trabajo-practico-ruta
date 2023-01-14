const express = require('express')
const app = express()
const port = 3000
const mensaje = "Servidor de Prueba"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*ejercicio uno*/

app.get(`/:apellido/:nombre`, (req, res) => {
  res.send(`${mensaje}, ${req.params.apellido} ${req.params.nombre}`)
});

/*ejercicio dos*/
app.get(`/dividir/:dividendo/:divisor`, (req, res) => {
  if (req.params.divisor == 0) {
    res.json({ error: "No se puede dividir por cero" })
  } else {
    res.json({ resultado: "resultado" })
  }
}),

  /*ejercicio tres*/

  app.get(`/suma/:x/:y`, (req, res) => {
    let resultado = parseInt(req.params.x) + parseInt(req.params.y)
  
    if (parseInt(req.params.x) >= 0 & parseInt(req.params.y) >= 0) {
      res.json({ Resultado: `$resultado` })
    } else {
      res.json({ error: `el numero es menor que cero` })
    }
  });


/*ejercicio cuatro*/

app.get(`/numero`, (req, res) => {
  if (req.query.num % 2 === 0) {
    res.send("Autorizado")
  } else {
    res.send("No Autorizado")
  }
});


/*ejercicio cinco*/

app.get(`/listadodecompras`, (req, res) => {
  console.log(req.query)
  res.json(req.query)
})





app.listen(port, () => {
  console.log(`http://localhost:3000 ${port}/`)
})
