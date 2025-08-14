package br.com.controle_despesas.repository;

import br.com.controle_despesas.model.Receita;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
}
