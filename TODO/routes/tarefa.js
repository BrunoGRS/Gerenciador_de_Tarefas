import express from "express"
import { tarefaController } from "../controllers/tarefaController.js";

export const router = express.Router()

router.route("/tarefas").post((req,res)=> tarefaController.create(req,res))
router.route("/tarefas/listar").get((req,res)=> tarefaController.showTarefas(req,res))
router.route("/tarefas/deletar/:id").delete((req,res)=> tarefaController.deleteTarefa(req,res))
router.route("/tarefas/listar/:id").get((req,res)=> tarefaController.showTarefaId(req,res))