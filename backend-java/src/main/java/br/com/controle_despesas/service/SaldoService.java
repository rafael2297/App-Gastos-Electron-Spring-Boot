package br.com.controle_despesas.service;

import br.com.controle_despesas.model.Saldo;
import br.com.controle_despesas.repository.SaldoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaldoService {

    private final SaldoRepository repository;

    public SaldoService(SaldoRepository repository) {
        this.repository = repository;
    }

    public List<Saldo> listarTodos() {
        return repository.findAll();
    }

    public Saldo salvar(Saldo saldo) {
        return repository.save(saldo);
    }

    public Saldo atualizar(Long id, Saldo saldo) {
        saldo.setId(id);
        return repository.save(saldo);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
