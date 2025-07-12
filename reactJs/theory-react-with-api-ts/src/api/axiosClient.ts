import axios from "axios";
import React from 'react'

const axiosClient = axios.create({
    baseURL: "https://687076977ca4d06b34b6dc20.mockapi.io/api/v1",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000,
});

export default axiosClient