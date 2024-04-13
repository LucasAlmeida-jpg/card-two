function showLoading(element) {
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Aguarde...';
}


function atualizarHorario() {
    // Obtém a hora atual
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    // Formata a hora como "hh:mm:ss"
    const horaFormatada = `${hora}:${minutos}:${segundos}`;

    // Atualiza o conteúdo da tag <span>
    document.getElementById("hora-atual").textContent = horaFormatada;
}

atualizarHorario();

setInterval(atualizarHorario, 1000);