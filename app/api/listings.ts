import api from "./agent";

const endpoint = '/listings';

const getListings = async () => api.get(endpoint);

export default {
    getListings,
}