import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

class Api{
    constructor(){
        this.config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    // @desc Create a new post
    async createPost(){
        try {
            const response = await axios.post(`/api/posts`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

    // @desc Retrieve all posts
    async getAllPosts(){
        try {
            const response = await axios.get(`/api/posts`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default new Api()
