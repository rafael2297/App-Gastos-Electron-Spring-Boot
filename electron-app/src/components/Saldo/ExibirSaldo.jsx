import React from "react";

export default function ExibirSaldo({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Exibir Saldo</h2>
            <p>Página para exibir saldos.</p>
        </div>
    );
}
