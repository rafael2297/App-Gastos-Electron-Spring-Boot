import React from "react";

export default function RelatorioPeriodo({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Relatório por Período</h2>
            <p>Página para gerar relatório por período.</p>
        </div>
    );
}
