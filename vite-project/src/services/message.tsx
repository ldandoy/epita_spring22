import axios, {AxiosError} from 'axios'

import { newMessageParams, editMessageParams, Message } from '../types/message'

export const getMessages = async () => {
    try {
        const res = await axios.get('http://127.0.0.1:4500/messages', {
            withCredentials: true
        })
        return res.data
    } catch(error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }
        return false
    }
}

export const getMessage = async (messageId?: string): Promise<editMessageParams | boolean> => {
    try {
        if (messageId == null) return false

        const res = await axios.get<editMessageParams>(`http://127.0.0.1:4500/messages/${messageId}`, {
            withCredentials: true
        })
        return res.data
    } catch(error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }
        return false
    }
}

export const createMessage = async (data: newMessageParams) => {
    try {
        const res = await axios.post('http://127.0.0.1:4500/messages', {
            message: data
        }, {
            withCredentials: true
        })
        return res.data
    } catch(error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }
        return false
    }
}

export const updateMessage = async (data: editMessageParams) => {
    try {
        const res = await axios.put(`http://127.0.0.1:4500/messages/${data._id}`, {message: data}, {
            withCredentials: true
        })
        return res.data
    } catch(error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }
        return false
    }
}

export const deleteMessage = async (messageId?: string) => {
    try {
        if (messageId == null) return false
        
        const res = await axios.delete(`http://127.0.0.1:4500/messages/${messageId}`, {
            withCredentials: true
        })
        return res.data
    } catch(error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }
        return false
    }
}