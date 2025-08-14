import React from "react";

export default function DeletarReceita({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Deletar Receita</h2>
            <p>Página para deletar receita.</p>
        </div>
    );
}
