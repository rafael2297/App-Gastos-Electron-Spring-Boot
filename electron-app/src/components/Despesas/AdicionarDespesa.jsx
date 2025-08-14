import React, { useState } from "react";

export default function AdicionarDespesa({ onVoltar }) {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");
    const [categoria, setCategoria] = useState("");
    const [pagamento, setPagamento] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/despesas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                descricao,
                valor: parseFloat(valor),
                data,
                categoria,
                pagamento,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Despesa adicionada com sucesso!");
                onVoltar();
            })
            .catch((err) => alert("Erro ao adicionar despesa: " + err));
    };

    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Adicionar Despesa</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />
                <input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor" type="number" />
                <input value={data} onChange={(e) => setData(e.target.value)} placeholder="Data (YYYY-MM-DD)" type="date" />
                <input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" />
                <input value={pagamento} onChange={(e) => setPagamento(e.target.value)} placeholder="Forma de pagamento" />
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}
