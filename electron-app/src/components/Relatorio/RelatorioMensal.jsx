import React from "react";

export default function RelatorioMensal({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Relatório Mensal</h2>
            <p>Página para gerar relatório mensal.</p>
        </div>
    );
}
