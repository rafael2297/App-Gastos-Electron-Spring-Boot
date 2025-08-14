import React from "react";

export default function AlterarReceita({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Alterar Receita</h2>
            <p>Página para alterar receita existente.</p>
        </div>
    );
}
