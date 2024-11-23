import express from "express";
import {postarNovoPost, postList } from "../controllers/postsController.js";

const routes = (app) => {
    // prermite que o servidor interprete requisições
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", postList);

    // Rota para criar um novo post
    app.post("/posts", postarNovoPost)

}

export default routes;