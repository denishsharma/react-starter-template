import axios from "axios";

import { getAppConfig } from "~/configs/app";

const client = axios.create({
    baseURL: getAppConfig("base_url"),
});

export const api = client;
