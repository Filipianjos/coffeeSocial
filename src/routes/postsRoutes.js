import express from "express";
import multer from "multer";
import {postarNovoPost, postList, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
});

const upload = multer({dest:"./uploads", storage});

const routes = (app) => {
    // prermite que o servidor interprete requisições
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", postList);

    // Rota para criar um novo post
    app.post("/posts", postarNovoPost)

    app.post("/upload", upload.single("imagem"), uploadImagem)

}

export default routes;