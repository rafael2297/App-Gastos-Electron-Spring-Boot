import React from "react";

export default function DeletarDespesa({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Deletar Despesa</h2>
            <p>Página para deletar uma despesa.</p>
        </div>
    );
}
