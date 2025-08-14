import React from "react";

export default function AdicionarReceita({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Adicionar Receita</h2>
            <p>Página para adicionar nova receita.</p>
        </div>
    );
}
