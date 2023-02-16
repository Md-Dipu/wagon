import axios from 'axios';

class API {
    constructor(route) {
        this.serverRouteURL = process.env.REACT_APP_SERVER_BACKEND_API_URL + route;
    }

    get(extension) {
        const apiURL = this.serverRouteURL + (extension || '');
        return axios.get(apiURL);
    }

    post(extension, data) {
        if (!data) {
            [extension, data] = [data, extension];
        }

        const apiURL = `${this.serverRouteURL}${extension || ''}`;
        return axios.post(apiURL, data);
    }

    patch(extension, data) {
        const apiURL = this.serverRouteURL + extension;
        return axios.patch(apiURL, data);
    }

    delete(extension) {
        const apiURL = this.serverRouteURL + extension;
        return axios.delete(apiURL);
    }
}

export const apartmentAPI = new API('/apartments');
export const bookingAPI = new API('/bookings');
export const reviewAPI = new API('/reviews');
export const userAPI = new API('/users');