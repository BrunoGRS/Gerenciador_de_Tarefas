import mongoose from "mongoose";
import { userSchema} from "./moUser.js";
const schema = mongoose.Schema

export const tarefaSchema = new schema({ //schems são passados em formatos de objetos JS
    name: {type:String, require: true}, 
    description: {type:String, require: true},
    prioridade: {type: String, enum:['Alta','Médio','Baixos']},
    auth:{type: userSchema, require: true},//para tipagem de dados de outro model precisa passar o schema
}, {timestamps: true})//timestamps serve para pegar as datas de criação e atualização das informações


export const Tarefa= mongoose.model("Tarefa", tarefaSchema)//normalmente o model possui nome com letra inicial maiscúcula

