import React from "react";

export default function CriarCategoria({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Criar Categoria</h2>
            <p>Página para criar nova categoria.</p>
        </div>
    );
}
