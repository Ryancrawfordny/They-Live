import axios from 'axios'

const URL = "http://localhost:4567/"


const api = axios.create({
    baseURL: `${URL}`
})

export const getAllPosts = async() => {
    try{
        const response = await api.get('/posts')
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}

export const createPosts = async(data) => {
    try {
        const response = await api.post('/posts', data)
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}

export const updatePosts = async(id,data) => {
    try {
        const response = await api.put(`/posts/${id}`, data)
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}

export const deletePosts = async(id) => {
    try {
        const response = await api.delete(`/posts/${id}`)
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}