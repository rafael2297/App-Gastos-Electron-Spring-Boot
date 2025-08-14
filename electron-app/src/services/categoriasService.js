// src/services/categoriasService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/categorias";

export const listarCategorias = () => axios.get(API_URL);
export const adicionarCategoria = (categoria) => axios.post(API_URL, categoria);
export const atualizarCategoria = (id, categoria) => axios.put(`${API_URL}/${id}`, categoria);
export const deletarCategoria = (id) => axios.delete(`${API_URL}/${id}`);
