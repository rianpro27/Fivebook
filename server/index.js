import cors from 'cors' // Ele fala que é seguro enviar certos tipos de arquivos
import bodyParser from 'body-parser' // Formata informações da API para json
import express from 'express' // Cria o servidor 
import userRouter from './routes/userRoutes.js';

const app = express();

// Configuração do servidor/API

const PORT = 5000

app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))
app.use('/', userRouter)

// Start server/API

app.listen(PORT, function () {
     console.log(`SERVIDOR RODANDO NA PORTA: ${PORT}`) 
})