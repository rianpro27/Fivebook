import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from 'body-parser';

// Ciriação de variáveis
const PORT = 5000
const app = express()

// Config

app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))

mongoose.connect('mongodb+srv://rian:rianzinho27@fivebookdb.xmfgvza.mongodb.net/?retryWrites=true&w=majority')
    .then(app.listen(PORT))
    .catch(console.log('não consegui conectar'))