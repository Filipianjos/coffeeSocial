import express from "express";
import { postList } from "../controllers/postsController.js";

const routes = (app) => {
    // prermite que o servidor interprete requisições
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", postList);

}

export default routes;