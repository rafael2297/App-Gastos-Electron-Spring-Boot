import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function ReceitasPage() {
    const [receitas, setReceitas] = useState([]);
    const [novaReceita, setNovaReceita] = useState({
        valor_recebido: "",
        descricao_receita: "",
        data_receita: "",
        id_categoria: "",
        pagamento: ""
    });

    useEffect(() => {
        carregarReceitas();
    }, []);

    const carregarReceitas = async () => {
        const res = await api.get("/api/receitas");
        setReceitas(res.data);
    };

    const salvarReceita = async () => {
        await api.post("/api/receitas", novaReceita);
        setNovaReceita({ valor_recebido: "", descricao_receita: "", data_receita: "", id_categoria: "", pagamento: "" });
        carregarReceitas();
    };

    return (
        <div className="container">
            <h1>Receitas</h1>

            <div className="card">
                <h2>Adicionar Nova Receita</h2>
                <input type="number" placeholder="Valor Recebido" value={novaReceita.valor_recebido} onChange={(e) => setNovaReceita({ ...novaReceita, valor_recebido: e.target.value })} />
                <input type="text" placeholder="Descrição" value={novaReceita.descricao_receita} onChange={(e) => setNovaReceita({ ...novaReceita, descricao_receita: e.target.value })} />
                <input type="date" value={novaReceita.data_receita} onChange={(e) => setNovaReceita({ ...novaReceita, data_receita: e.target.value })} />
                <input type="text" placeholder="ID Categoria" value={novaReceita.id_categoria} onChange={(e) => setNovaReceita({ ...novaReceita, id_categoria: e.target.value })} />
                <input type="text" placeholder="Forma de Pagamento" value={novaReceita.pagamento} onChange={(e) => setNovaReceita({ ...novaReceita, pagamento: e.target.value })} />
                <button onClick={salvarReceita}>Salvar</button>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
                <h2>Lista de Receitas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Valor</th>
                            <th>Descrição</th>
                            <th>Data</th>
                            <th>Categoria</th>
                            <th>Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receitas.map((r) => (
                            <tr key={r.id}>
                                <td>R$ {r.valor_recebido}</td>
                                <td>{r.descricao_receita}</td>
                                <td>{r.data_receita}</td>
                                <td>{r.id_categoria}</td>
                                <td>{r.pagamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
