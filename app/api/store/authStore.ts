import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'token';

const storeToken = async (token: string) => {
    try {
        await SecureStore.setItemAsync(key, token);
    } catch (e) {
        console.log(e)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (e) {
        console.log(e)
    }
}

const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
}


const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (e) {
        console.log(e)
    }
}

export default {
    storeToken,
    getToken,
    getUser,
    removeToken
}
