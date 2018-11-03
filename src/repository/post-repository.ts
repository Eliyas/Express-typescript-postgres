import { getManager } from "typeorm";
import { Post } from "../entity/Post";

export class PostRepository {

    repository: any;

    constructor() {
        this.repository = getManager().getRepository(Post);
    }

    async getAllPost() {
        return this.repository.find();
    }

    async getPostById(id: number) {
        return this.repository.findOne(id);
    }

    async savePost(data: any) {
        return this.repository.save(data);
    }


} 