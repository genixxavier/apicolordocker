const express = require('express')
const colors = require('./routes/colores')

const app = express()

app.use(express.json());

app.use('/api/colores',colors)

/**Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
app.listen(port,host, ()=>{
    console.log('port', port)
    console.log('El servidor esta funcionando')
})