import { Tarefa, tarefaSchema } from "../models/moTarefa.js";

export const tarefaController ={

    createTarefa: async(req,res)=>{
        try {

            const tarefa = {
                name: req.body.name,//os dados tem do corpo da requisição do front para serem tratados
                description: req.body.description,
                prioridade: req.body.prioridade,
                auth: req.body.auth
            }

            Tarefa.create(tarefa)

            res.status(201).send({msg:"Tarefa criada com sucesso!"})
            
        } catch (error) {
            console.log(error)
        }
    },

    showTarefas: async(req,res)=>{

        try {
            
            const itens = Tarefa.find()

            itens.then((result)=>{//trata o dado quando possui uma resposta do método assincrono
                res.send(result)
            })

        } catch (error) {
            console.log(error)
        }

    },

    
    showTarefaId: async(req,res)=>{

        try {

            const idTarefa = req.params.id

            const findedTarefa = Tarefa.findById({_id:idTarefa})

            findedTarefa.then((result)=>{
                res.status(200).send(result)
            }, (error)=>{
                console.log(error)
            })
   
        } catch (error) {
            console.log(error)
        }

    },

    deleteTarefa: async(req,res)=>{

        try {

            const idTarefa = req.params.id

            Tarefa.deleteOne({_id:idTarefa}).exec() ? res.status(200).send({msg: "Exclusão feita com sucesso!"}) : res.send({msg: "Exclusão não concluída"})
            
        } catch (error) {
            console.log(error)
        }
    },

    editTarefa: async(req,res)=>{

        try {
            
        } catch (error) {
            console.log(error)
        }

    }

}