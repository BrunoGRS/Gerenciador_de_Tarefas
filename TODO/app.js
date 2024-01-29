import express from "express"
import cors from "cors"
import { main } from "./database/database.js"
import { routerExpress} from "./routes/router.js"

const app = express()

//MIDLIEWARES
app.use(cors()) //permite a utilização do cors para segurança
app.use(express.json()) //permite a comunicação via json 

//Connectar com o banco
const connectionMongoDB = main()

//Routes
const routesTarefa = routerExpress

app.use("/api", routesTarefa)//todos os endpoints começado com "/api" vem do routesTarefa



//inicializa o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em <http://localhost:3000>');
  })

  //