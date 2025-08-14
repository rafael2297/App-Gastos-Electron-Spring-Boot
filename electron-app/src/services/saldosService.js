// src/services/saldosService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/saldos";

export const listarSaldos = () => axios.get(API_URL);
export const adicionarSaldo = (saldo) => axios.post(API_URL, saldo);
export const atualizarSaldo = (id, saldo) => axios.put(`${API_URL}/${id}`, saldo);
export const deletarSaldo = (id) => axios.delete(`${API_URL}/${id}`);
