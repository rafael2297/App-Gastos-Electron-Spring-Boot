// src/services/despesasService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/despesas";

export const listarDespesas = () => axios.get(API_URL);
export const adicionarDespesa = (despesa) => axios.post(API_URL, despesa);
export const atualizarDespesa = (id, despesa) => axios.put(`${API_URL}/${id}`, despesa);
export const deletarDespesa = (id) => axios.delete(`${API_URL}/${id}`);
