import api from "./agent";
import { AxiosProgressEvent } from "axios";

const endpoint = "/listings";

function createFormData(body: any) {
    // const formData = new FormData();
    // for (const name in body) {
        //check if it's images, then append each image to the form data
        // if (name === 'images') {
        //     const images = body[name];
        //     images.forEach((image: string, index: Number) => {
        //         formData.append('images' + index, JSON.stringify({
        //             name: "image" + index,
        //             type: 'image/jpeg',
        //             uri: image
        //         }));
        //     });
        // } else {
        //     formData.append(name, body[name]);
        // }
        // }
                
                const data = new FormData();
                data.append('title', body.title);
                data.append('price', body.price);
                data.append('categoryId', '1');
                data.append('description', body.description);
                
                if (body.location)
                    data.append('location', JSON.stringify(body.location));

                body.images.forEach((image: string, index: Number) => {
                    data.append('images', Object.assign({
                        name: "image" + index,
                        type: 'image/jpeg',
                        uri: image
                    }));
                });

        return data;
}

const getListings = async () => api.get(endpoint);

const addListing = async (listing: any, onUploadProgress: (progress: Number) => void) => {
    const data = createFormData(listing);
    const config = { 
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const progress = progressEvent.loaded /( progressEvent.total || 1);
            alert("progress" + progress);
        }
    }
    return await api.post(endpoint, data, config);
};

export default {
    getListings,
    addListing
}
