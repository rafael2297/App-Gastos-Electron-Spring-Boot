// src/services/receitasService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/receitas";

export const listarReceitas = () => axios.get(API_URL);
export const adicionarReceita = (receita) => axios.post(API_URL, receita);
export const atualizarReceita = (id, receita) => axios.put(`${API_URL}/${id}`, receita);
export const deletarReceita = (id) => axios.delete(`${API_URL}/${id}`);
