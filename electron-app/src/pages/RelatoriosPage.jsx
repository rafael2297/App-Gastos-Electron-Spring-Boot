import React from "react";
import api from "../services/api";

export default function RelatoriosPage() {
    const gerarRelatorio = async () => {
        try {
            const res = await api.get("/api/relatorios/excel", {
                responseType: "blob" // importante para baixar arquivos binários
            });

            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `relatorio_${new Date().toISOString().slice(0, 16).replace("T", "_")}.xlsx`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Erro ao gerar relatório", error);
        }
    };

    return (
        <div className="container">
            <h1>Relatórios</h1>

            <div className="card">
                <p>Clique no botão abaixo para gerar e baixar o relatório em Excel com todas as despesas e receitas.</p>
                <button onClick={gerarRelatorio}>📥 Gerar Relatório</button>
            </div>
        </div>
    );
}
