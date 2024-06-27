import axios from "axios";

const client = axios.create({
    baseURL: config().client("api.base_url"),
});

export const api = client;
