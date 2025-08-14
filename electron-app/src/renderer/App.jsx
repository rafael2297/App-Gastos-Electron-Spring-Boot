import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import DespesasPage from "../pages/DespesasPage";
import ReceitasPage from "../pages/ReceitasPage";
import CategoriasPage from "../pages/CategoriasPage";
import SaldosPage from "../pages/SaldosPage";
import RelatoriosPage from "../pages/RelatoriosPage";


export default function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Menu de navegação */}
                <nav className="navbar">
                    <ul>
                        <li><Link to="/despesas">Despesas</Link></li>
                        <li><Link to="/receitas">Receitas</Link></li>
                        <li><Link to="/categorias">Categorias</Link></li>
                        <li><Link to="/saldos">Saldos</Link></li>
                        <li><Link to="/relatorios">Relatórios</Link></li>
                    </ul>
                </nav>

                {/* Área de conteúdo */}
                <main className="content">
                    <Routes>
                        <Route path="/despesas" element={<DespesasPage />} />
                        <Route path="/receitas" element={<ReceitasPage />} />
                        <Route path="/categorias" element={<CategoriasPage />} />
                        <Route path="/saldos" element={<SaldosPage />} />
                        <Route path="/relatorios" element={<RelatoriosPage />} />
                        {/* Rota padrão */}
                        <Route path="*" element={<DespesasPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
