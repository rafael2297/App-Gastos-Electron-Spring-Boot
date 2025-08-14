package br.com.controle_despesas.controller;

import br.com.controle_despesas.model.Saldo;
import br.com.controle_despesas.service.SaldoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/saldos")
@CrossOrigin(origins = "*")
public class SaldoController {

    private final SaldoService service;

    public SaldoController(SaldoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Saldo> listar() {
        return service.listarTodos();
    }

    @PostMapping
    public Saldo adicionar(@RequestBody Saldo saldo) {
        return service.salvar(saldo);
    }

    @PutMapping("/{id}")
    public Saldo alterar(@PathVariable Long id, @RequestBody Saldo saldo) {
        return service.atualizar(id, saldo);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
