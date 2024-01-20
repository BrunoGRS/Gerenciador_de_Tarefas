import { Tarefa } from "./tarefas.js";
import { Gerenciador } from "./gerenciar.js";

let tarefa1 = new Tarefa('Estudar','Estudar js','19/01/2024','Alta')
let tarefa2 = new Tarefa('Ler','Leitura de Revolução dos bichos','19/01/2024','Média')
let gerenciardor = new Gerenciador('To Do')

gerenciardor.addTask(tarefa1)
gerenciardor.addTask(tarefa2)
tarefa2.addCheck()
gerenciardor.viewList()
tarefa1.editDescription('Estudar JavaScript')
tarefa1.listCreateTask()
gerenciardor.listCheckTask()
gerenciardor.listNoCheckTask()

