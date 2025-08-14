import React from "react";

export default function AlterarDespesa({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Alterar Despesa</h2>
            <p>Página para alterar uma despesa.</p>
        </div>
    );
}
