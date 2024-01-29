import mongoose from "mongoose";

export async function main(){

    try {
        //conecta com o banco
        await mongoose.connect("mongodb+srv://brunorodriguesr01:fG83EdxYA9uTMuKC@cluster.9qydw6c.mongodb.net/?retryWrites=true&w=majority")
        console.log('Banco Conectado!')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}