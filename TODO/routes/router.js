import express from "express"
import { router } from "./tarefa.js"//puxa o router do tarefa
export const routerExpress = express.Router()//chama o router do express

const tarefaRouter = router//atribui o router da tarefa

routerExpress.use("/", tarefaRouter)//diz que todos os endpoints começados com "/" virá de tarefas