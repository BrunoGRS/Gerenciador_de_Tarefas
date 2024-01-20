export class Gerenciador{
    constructor(nome){
        this.nome = nome
        this.lista = []
    }

    addTask(task){
        this.lista.push(task) ? console.log('Adicionado com sucesso!') : console.log('Falha ao adicionar Tarefa.')
    }

    viewList(){
        console.log('\nTAREFAS\n')
        this.lista.forEach((lista, index)=>{
            console.log(`Indice: ${index} | Nome: ${lista.nome} | Descrição: ${lista.descricao} | Data: ${lista.data} | Prioridade: ${lista.prioridade} | Concluída: ${lista.concluida}`)
        })
    }

    removeTask(index){
        this.lista.pop(index) ? console.log('Tarefa excluída com sucesso!') : console.log('Não foi possível fazer a exclusão.')
    }

    listCheckTask(){
        console.log('\nTAREFAS CONCLUÍDAS\n')
        this.lista.forEach((lista, index)=>{
            if(lista.concluida == true){
                console.log(`Indice: ${index} | Nome: ${lista.nome} | Descrição: ${lista.descricao} | Data: ${lista.data} | Prioridade: ${lista.prioridade} | Concluída: ${lista.concluida}`)
            }
        })
    }

    listNoCheckTask(){
        console.log('\nTAREFAS EM ABERTO\n')
        this.lista.forEach((lista,index)=>{
            if(lista.concluida == false){
                console.log(`Indice: ${index} | Nome: ${lista.nome} | Descrição: ${lista.descricao} | Data: ${lista.data} | Prioridade: ${lista.prioridade} | Concluída: ${lista.concluida}`)
            }
        })
    }
}