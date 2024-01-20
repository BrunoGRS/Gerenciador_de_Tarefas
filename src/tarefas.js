export class Tarefa{
    constructor(nome, descricao, data, prioridade){
        this.nome = nome
        this.descricao = descricao
        this.data = data
        this.prioridade = prioridade
        this.concluida = false
    }

    listCreateTask(){
        let task = new Tarefa(this.nome,this.descricao,this.data,this.prioridade,this.concluida)
        console.log(task)
    }

    addCheck(){
        this.concluida = true
    }

    changePriority(value){
        this.prioridade = value
    }
    
    editDescription(valor){
        this.descricao = valor
    }
}