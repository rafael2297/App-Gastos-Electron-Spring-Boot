import React from "react";

export default function AtualizarSaldo({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Atualizar Saldo</h2>
            <p>Página para atualizar saldos.</p>
        </div>
    );
}
