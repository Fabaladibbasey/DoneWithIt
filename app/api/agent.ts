import { create } from 'apisauce'
import authStore from './store/authStore';

// define the api
const api = create({
  baseURL: 'http://192.168.1.211:9000/api'
})

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

api.addAsyncRequestTransform(async (request) => {
  await sleep(1000);
  const authToken = await authStore.getToken();

  if (authToken && request.headers) request.headers['x-auth-token'] = 'Bearer ' + authToken;
});

export default api;

