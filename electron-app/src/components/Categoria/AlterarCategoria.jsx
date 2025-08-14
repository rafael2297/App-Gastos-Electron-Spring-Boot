import React from "react";

export default function AlterarCategoria({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Alterar Categoria</h2>
            <p>Página para alterar categoria existente.</p>
        </div>
    );
}
