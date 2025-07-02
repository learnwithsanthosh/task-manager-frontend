import axios from 'axios'
import React from 'react'

const baseURL = axios.create({baseURL : "http://localhost:8080"});

const api={
    get: (url : string, config = {})=>baseURL.get(url, config),
    post : (url : string , data : any, config = {}) => baseURL.post(url,data,config),
};

export default api