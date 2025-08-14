import React, { useState } from "react";

export default function MenuPrincipal({ onSelect }) {
    const [submenu, setSubmenu] = useState(null);

    const menus = {
        despesas: [
            "Adicionar Despesa",
            "Alterar Despesa",
            "Deletar Despesa",
            "Listar Despesas",
        ],
        relatorio: [
            "Criar Relatório Completo",
            "Exibir por Período",
            "Exibir por Mês",
            "Despesas Fixas",
        ],
        categoria: [
            "Criar Categoria",
            "Alterar Categoria",
            "Deletar Categoria",
            "Listar Categorias",
        ],
        receita: [
            "Adicionar Receita",
            "Alterar Receita",
            "Deletar Receita",
            "Listar Receitas",
        ],
        saldo: ["Exibir Saldos", "Atualizar Saldo"],
    };

    if (submenu) {
        return (
            <div className="p-4 space-y-2">
                <button
                    className="px-3 py-1 bg-gray-300 rounded"
                    onClick={() => setSubmenu(null)}
                >
                    ⬅ Voltar
                </button>
                <h2 className="text-xl font-bold capitalize">Menu {submenu}</h2>
                <ul className="space-y-2">
                    {menus[submenu].map((item, index) => (
                        <li key={index}>
                            <button
                                className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={() => onSelect(submenu, index)}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-2">
            <h1 className="text-2xl font-bold mb-4">Controle de Despesas Pessoais</h1>
            <ul className="space-y-2">
                <li>
                    <button
                        className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setSubmenu("despesas")}
                    >
                        Menu Despesas
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setSubmenu("relatorio")}
                    >
                        Menu Relatório
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setSubmenu("categoria")}
                    >
                        Menu Categoria
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setSubmenu("receita")}
                    >
                        Menu Receita
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setSubmenu("saldo")}
                    >
                        Menu Saldo
                    </button>
                </li>
            </ul>
        </div>
    );
}
