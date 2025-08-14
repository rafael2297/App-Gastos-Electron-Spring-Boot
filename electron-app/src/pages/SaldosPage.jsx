import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function SaldosPage() {
    const [saldos, setSaldos] = useState([]);
    const [novoSaldo, setNovoSaldo] = useState({
        saldo_inicial: "",
        saldo_final: ""
    });

    useEffect(() => {
        carregarSaldos();
    }, []);

    const carregarSaldos = async () => {
        const res = await api.get("/api/saldos");
        setSaldos(res.data);
    };

    const salvarSaldo = async () => {
        await api.post("/api/saldos", novoSaldo);
        setNovoSaldo({ saldo_inicial: "", saldo_final: "" });
        carregarSaldos();
    };

    return (
        <div className="container">
            <h1>Saldos</h1>

            <div className="card">
                <h2>Adicionar Novo Saldo</h2>
                <input
                    type="number"
                    placeholder="Saldo Inicial"
                    value={novoSaldo.saldo_inicial}
                    onChange={(e) => setNovoSaldo({ ...novoSaldo, saldo_inicial: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Saldo Final"
                    value={novoSaldo.saldo_final}
                    onChange={(e) => setNovoSaldo({ ...novoSaldo, saldo_final: e.target.value })}
                />
                <button onClick={salvarSaldo}>Salvar</button>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
                <h2>Lista de Saldos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Saldo Inicial</th>
                            <th>Saldo Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saldos.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>R$ {s.saldo_inicial}</td>
                                <td>R$ {s.saldo_final}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
