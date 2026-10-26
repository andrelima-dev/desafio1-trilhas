function formatarValor(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function perguntarQuantidade(nomeProduto, preco) {
    let quantidade = Number(prompt("Quantas unidades de " + nomeProduto + " (" + formatarValor(preco) + ") você deseja?\nDigite 0 para não comprar."));

    while (isNaN(quantidade) || quantidade < 0 || !Number.isInteger(quantidade)) {
        quantidade = Number(prompt("Quantidade inválida! Digite um número inteiro igual ou maior que 0 para " + nomeProduto + ":"));
    }

    return quantidade;
}

function simularCompra() {
    const precoXByte = 28.00;
    const precoBatata = 15.50;
    const precoRefri = 7.00;

    const qtdXByte = perguntarQuantidade("X-Byte", precoXByte);
    const qtdBatata = perguntarQuantidade("Batata Pixel", precoBatata);
    const qtdRefri = perguntarQuantidade("Refri Overflow", precoRefri);

    if (qtdXByte === 0 && qtdBatata === 0 && qtdRefri === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    const valorXByte = precoXByte * qtdXByte;
    const valorBatata = precoBatata * qtdBatata;
    const valorRefri = precoRefri * qtdRefri;

    const subtotal = valorXByte + valorBatata + valorRefri;

    let desconto = 0;
    if (subtotal >= 100) {
        desconto = subtotal * 0.10;
    }

    const total = subtotal - desconto;

    let resumo = "Resumo da compra - Byte Burger\n\n";
    resumo += "X-Byte: " + qtdXByte + " x " + formatarValor(precoXByte) + " = " + formatarValor(valorXByte) + "\n";
    resumo += "Batata Pixel: " + qtdBatata + " x " + formatarValor(precoBatata) + " = " + formatarValor(valorBatata) + "\n";
    resumo += "Refri Overflow: " + qtdRefri + " x " + formatarValor(precoRefri) + " = " + formatarValor(valorRefri) + "\n\n";
    resumo += "Subtotal: " + formatarValor(subtotal) + "\n";

    if (desconto > 0) {
        resumo += "Desconto (10%): -" + formatarValor(desconto) + "\n";
    } else {
        resumo += "Sem desconto (compras a partir de R$ 100,00 ganham 10%)\n";
    }

    resumo += "Total a pagar: " + formatarValor(total);

    alert(resumo);
}
