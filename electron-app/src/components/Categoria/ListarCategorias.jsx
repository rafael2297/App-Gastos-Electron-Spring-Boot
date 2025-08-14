import React from "react";

export default function ListarCategorias({ onVoltar }) {
    return (
        <div className="p-4">
            <button onClick={onVoltar}>⬅ Voltar</button>
            <h2>Listar Categorias</h2>
            <p>Página para listar categorias.</p>
        </div>
    );
}
