import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {

    getAllPosts: () => axiosService(urls.posts.base),
    getPostById: (id) => axiosService(urls.posts.byId(id))
}

export {postService}