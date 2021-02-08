import axios from 'axios';
import { TOKEN } from '../constants/appConstants';

export const createApiInstance = () => {
    const instance = axios.create();
    instance.defaults.headers.Accept = 'application/json';

    if (localStorage.getItem(TOKEN) != null) {
        const token = localStorage.getItem(TOKEN);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

export const removeDefaultHeaders = () => {
    delete axios.defaults.headers.Authorization;
};

export const queryParams = paramObject => {
    const keys = Object.keys(paramObject);
    const params = keys.map(key => {
        const values = paramObject[key];
        return `${key}=${Array.isArray(values) ? `${values.join(`&${key}=`)}` : `${values}`}`;
    }).join('&');
    return `?${params}`;
};

export const get = url => axios.get(url);
export const put = (url, body) => axios.put(url, body);
export const post = (url, body) => axios.post(url, body);
