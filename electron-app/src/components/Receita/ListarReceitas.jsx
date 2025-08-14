import React from "react";

export default function ListarReceitas({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Listar Receitas</h2>
            <p>Página para listar receitas.</p>
        </div>
    );
}
