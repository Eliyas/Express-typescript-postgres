import { Request, Response } from "express";
import { PostRepository } from "../repository/post-repository"

export class PostController {

    constructor() { }

    /**
 * Loads all posts from the database.
 */
    async postGetAllAction(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const postRepository = new PostRepository();

        // load a post by a given post id
        const posts = await postRepository.getAllPost();

        // return loaded posts
        return response.status(200).send(posts);
    }

    async postGetByIdAction(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const postRepository = new PostRepository();

        // load a post by a given post id
        const post = await postRepository.getPostById(request.params.id);

        // if post was not found return 404 to the client
        if (!post) {
            response.status(404);
            response.end();
            return;
        }

        // return loaded post
       return response.send(post);
    }

    /**
 * Saves given post.
 */
    async postSaveAction(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const postRepository = new PostRepository();

        // save a real post object from post json object sent over http
        const newPost = postRepository.savePost(request.body);

        // return saved post back
        return response.send(newPost);
    }

}
