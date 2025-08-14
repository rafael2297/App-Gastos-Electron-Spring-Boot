import React from "react";

export default function RelatorioFixas({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Relatório de Despesas Fixas</h2>
            <p>Página para gerar relatório de despesas fixas.</p>
        </div>
    );
}
