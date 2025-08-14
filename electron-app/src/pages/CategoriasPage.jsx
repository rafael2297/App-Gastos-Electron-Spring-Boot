import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function CategoriasPage() {
    const [categorias, setCategorias] = useState([]);
    const [novaCategoria, setNovaCategoria] = useState("");

    useEffect(() => {
        carregarCategorias();
    }, []);

    const carregarCategorias = async () => {
        const res = await api.get("/api/categorias");
        setCategorias(res.data);
    };

    const salvarCategoria = async () => {
        await api.post("/api/categorias", { nome_categoria: novaCategoria });
        setNovaCategoria("");
        carregarCategorias();
    };

    return (
        <div className="container">
            <h1>Categorias</h1>

            <div className="card">
                <h2>Adicionar Nova Categoria</h2>
                <input type="text" placeholder="Nome da Categoria" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} />
                <button onClick={salvarCategoria}>Salvar</button>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
                <h2>Lista de Categorias</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((c) => (
                            <tr key={c.id_categoria}>
                                <td>{c.id_categoria}</td>
                                <td>{c.nome_categoria}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
