import React from "react";

export default function DeletarCategoria({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Deletar Categoria</h2>
            <p>Página para deletar categoria.</p>
        </div>
    );
}
