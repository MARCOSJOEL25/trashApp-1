import axios from 'axios'
import nprogress from 'nprogress'

const apicliente = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

apicliente.interceptors.request.use(config => {
    nprogress.start()
    return config
})

apicliente.interceptors.response.use(response => {
    nprogress.done()
    return response
})

export default{
    getEvent(){
        return apicliente.get()
    },

    getEvents(id){
        if(id == null){
            return apicliente.get()
        }
        return apicliente.get('/' + id)
    }
}
