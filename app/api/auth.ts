import api from "./agent";

const login = async (email: string, password: string) => {
    return await api.post('/auth', { email, password });
}

const register = async (name: string, email: string, password: string) => {
    return await api.post('/users', { name, email, password });
}

export default {
    login,
    register
}