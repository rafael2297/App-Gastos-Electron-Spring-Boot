package br.com.controle_despesas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.controle_despesas.model.Despesa;

@Repository
public interface DespesaRepository extends JpaRepository<Despesa, Integer> {

    @Query(value = """
        SELECT 
            d.id_despesa AS id,
            d.valor AS valor,
            d.data_despesa AS data,
            d.descricao AS descricao,
            c.id_categoria AS idCategoria,
            c.nome_categoria AS nomeCategoria,
            d.pagamento AS pagamento
        FROM tb_despesas d
        INNER JOIN tb_categorias c ON d.id_categoria = c.id_categoria
        """, nativeQuery = true)
    List<Object[]> gerarRelatorioBruto();
}
