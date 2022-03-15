import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZlNmZmYjkxNTg0NGExYTMxMTYyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzE0NTgxMSwiZXhwIjoxNjQ3NDA1MDExfQ.aCSicp65rmDD8u1yitymijFq7srLaUFPYUs2R_KiHGU";
export const pubblicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: `Bearer ${TOKEN}`
})