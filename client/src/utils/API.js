import axios from 'axios';

class API {
    constructor(route) {
        this.serverRouteURL = process.env.REACT_APP_SERVER_BACKEND_API_URL + route;
    }

    #config() {
        const token = sessionStorage.getItem('__idToken');
        if (!token) {
            // returning undefined for no token found
            return;
        }

        return ({
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    }

    get(extension) {
        const apiURL = this.serverRouteURL + (extension || '');
        return axios.get(apiURL, this.#config());
    }

    post(extension, data) {
        if (!data) {
            [extension, data] = [data, extension];
        }

        const apiURL = `${this.serverRouteURL}${extension || ''}`;
        return axios.post(apiURL, data, this.#config());
    }

    patch(extension, data) {
        const apiURL = this.serverRouteURL + extension;
        return axios.patch(apiURL, data, this.#config());
    }

    delete(extension) {
        const apiURL = this.serverRouteURL + extension;
        return axios.delete(apiURL, this.#config());
    }
}

export const apartmentAPI = new API('/apartments');
export const bookingAPI = new API('/bookings');
export const reviewAPI = new API('/reviews');
export const userAPI = new API('/users');