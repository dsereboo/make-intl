import axios, {AxiosInstance} from "axios"

const workerInstance: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_WORKER_URL}/api`
})

export type AxiosOptions ={
    url:string
    method: 'get'|'post'|'put'
    data?:unknown
}

export const workerRequest = async({...options}:AxiosOptions)=>{
    workerInstance.defaults.headers.post["Content-Type"] ='application/json'
    
    return await workerInstance(options)
}