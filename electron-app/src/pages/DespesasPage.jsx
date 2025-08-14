import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function DespesasPage() {
    const [despesas, setDespesas] = useState([]);
    const [novaDespesa, setNovaDespesa] = useState({
        descricao: "",
        valor: "",
        data_despesa: "",
        id_categoria: "",
        pagamento: ""
    });

    useEffect(() => {
        carregarDespesas();
    }, []);

    const carregarDespesas = async () => {
        const res = await api.get("/api/despesas");
        setDespesas(res.data);
    };

    const salvarDespesa = async () => {
        await api.post("/api/despesas", novaDespesa);
        setNovaDespesa({ descricao: "", valor: "", data_despesa: "", id_categoria: "", pagamento: "" });
        carregarDespesas();
    };

    return (
        <div className="container">
            <h1>Despesas</h1>

            <div className="card">
                <h2>Adicionar Nova Despesa</h2>
                <input type="text" placeholder="Descrição" value={novaDespesa.descricao} onChange={(e) => setNovaDespesa({ ...novaDespesa, descricao: e.target.value })} />
                <input type="number" placeholder="Valor" value={novaDespesa.valor} onChange={(e) => setNovaDespesa({ ...novaDespesa, valor: e.target.value })} />
                <input type="date" value={novaDespesa.data_despesa} onChange={(e) => setNovaDespesa({ ...novaDespesa, data_despesa: e.target.value })} />
                <input type="text" placeholder="ID Categoria" value={novaDespesa.id_categoria} onChange={(e) => setNovaDespesa({ ...novaDespesa, id_categoria: e.target.value })} />
                <input type="text" placeholder="Forma de Pagamento" value={novaDespesa.pagamento} onChange={(e) => setNovaDespesa({ ...novaDespesa, pagamento: e.target.value })} />
                <button onClick={salvarDespesa}>Salvar</button>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
                <h2>Lista de Despesas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Categoria</th>
                            <th>Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {despesas.map((d) => (
                            <tr key={d.id_despesa}>
                                <td>{d.descricao}</td>
                                <td>R$ {d.valor}</td>
                                <td>{d.data_despesa}</td>
                                <td>{d.id_categoria}</td>
                                <td>{d.pagamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
