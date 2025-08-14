// src/services/relatoriosService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/relatorios";

export const gerarRelatorio = () =>
    axios.get(`${API_URL}/excel`, { responseType: "blob" });
