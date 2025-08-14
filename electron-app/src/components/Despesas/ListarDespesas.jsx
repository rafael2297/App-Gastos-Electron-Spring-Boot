import React from "react";

export default function ListarDespesas({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Listar Despesas</h2>
            <p>Página para listar todas as despesas.</p>
        </div>
    );
}
