const API_URL = 'http://localhost:8080/api/despesas'; // Verifique a porta do seu backend!

document.addEventListener('DOMContentLoaded', () => {
    carregarGastos();

    document.getElementById('form-gasto').addEventListener('submit', (e) => {
        e.preventDefault();
        adicionarGasto();
    });
});

async function carregarGastos() {
    try {
        const response = await fetch(API_URL);
        const gastos = await response.json();

        const tbody = document.querySelector('#tabela-gastos tbody');
        tbody.innerHTML = ''; // Limpa a tabela antes de preencher

        gastos.forEach(gasto => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${gasto.id}</td>
                <td>${gasto.descricao}</td>
                <td>R$ ${gasto.valor.toFixed(2)}</td>
                <td><button class="acao-btn" onclick="removerGasto(${gasto.id})">Remover</button></td>
            `;
        });
    } catch (error) {
        console.error('Erro ao carregar gastos:', error);
    }
}

async function adicionarGasto() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    const novoGasto = { descricao, valor };

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoGasto),
        });

        document.getElementById('form-gasto').reset(); // Limpa o formulário
        carregarGastos(); // Recarrega a lista de gastos
    } catch (error) {
        console.error('Erro ao adicionar gasto:', error);
    }
}

async function removerGasto(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        carregarGastos(); // Recarrega a lista após a remoção
    } catch (error) {
        console.error('Erro ao remover gasto:', error);
    }
}