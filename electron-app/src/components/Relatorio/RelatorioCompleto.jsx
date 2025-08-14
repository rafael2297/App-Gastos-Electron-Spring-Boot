import React from "react";

export default function RelatorioCompleto({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Relatório Completo</h2>
            <p>Página para gerar relatório completo.</p>
        </div>
    );
}
