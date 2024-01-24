function comprar() 
{
    let tipoIngresso = document.getElementById("tipo-ingresso");
    let quantidade = document.getElementById("qtd").value;

    if (Number(quantidade) <= 0)
    {
        alert("Insira um valor adequado para o campo 'Quantidade'.");
    } else {
        switch (tipoIngresso.value) {
            case "pista":
                comprarPista(quantidade);
                break;
            case "superior":
                comprarSuperior(quantidade);
                break;
            case "inferior":
                comprarInferior(quantidade);
                break;
            default:
                break;
        }
    }
}

function comprarPista(qtd)
{
    let pistaRes = document.getElementById("qtd-pista");
    if (Number(qtd) <= Number(pistaRes.innerHTML))
    {
        pistaRes.innerHTML = Number(pistaRes.innerHTML) - qtd;
    } else {
        alert("Quantidade de ingressos insuficientes para a compra.");
    }
}

function comprarSuperior(qtd) 
{
    let superiorRes = document.getElementById("qtd-superior");
    if (Number(qtd) <= Number(superiorRes.innerHTML))
    {
        superiorRes.innerHTML = Number(superiorRes.innerHTML) - qtd;
    } else {
        alert("Quantidade de ingressos insuficientes para a compra.");
    }
}

function comprarInferior(qtd) 
{
    let inferiorRes = document.getElementById("qtd-inferior");
    if (Number(qtd) <= Number(inferiorRes.innerHTML))
    {
        inferiorRes.innerHTML = Number(inferiorRes.innerHTML) - qtd;
    } else {
        alert("Quantidade de ingressos insuficientes para a compra.");
    }
}