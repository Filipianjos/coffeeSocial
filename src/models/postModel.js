import conectarAoBanco from "../config/dbConfig.js";

export default async function getTodosPosts(){
    // Obtendo a conexão do mongoDB
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

    // Acessando o banco de dados
    const db = conexao.db("coffee-social");

    // Acessando a coleção posts
    const colecao = db.collection("posts");

    // Retornando todos os posts
    return colecao.find().toArray();
}