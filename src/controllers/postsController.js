import getTodosPosts from "../models/postModel.js";

export async function postList(req, res) 
{
    const posts = await getTodosPosts();
    res.status(200).json(posts);

}