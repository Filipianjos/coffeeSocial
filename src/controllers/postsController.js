import fs from "fs";
import {getTodosPosts, criarPost } from "../models/postModel.js";

export async function postList(req, res) 
{
    const posts = await getTodosPosts();
    res.status(200).json(posts);

}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {  
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
        const novoPost = req.body;
        try {  
            const postCriado = await criarPost(novoPost);
            const imagemAdicionada = `uploads/${postCriado.insertedId}.png`
            fs.renameSync(req.file.path, imagemAdicionada);
            res.status(200).json(postCriado);
        } catch(err) {
            console.error(err.message);
            res.status(500).json({"Erro": "Falha na requisição"});
        }
}