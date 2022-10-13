import axios from "axios";

const api = axios.create({
    baseURL: "https://workspace-d846a-default-rtdb.firebaseio.com/formacaoOficinaG3.json",
});

export default api;