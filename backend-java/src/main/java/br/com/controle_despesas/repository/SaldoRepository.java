package br.com.controle_despesas.repository;

import br.com.controle_despesas.model.Saldo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaldoRepository extends JpaRepository<Saldo, Long> {
}
