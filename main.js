function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let cont=0; cont < listaDeTeclas.length; cont++ ){
    const tecla = listaDeTeclas[cont]
    const tipoSom = tecla.classList[1]

    tecla.onclick = () => {tocaSom(`#som_${tipoSom}`)}

    // deixa o botao laranja quando pressiona tecla
    tecla.onkeydown = () => {tecla.classList.add('ativa')}

    // faz o estilo do botao voltar ao normal quando a tecla deixa de ser pressionada
    tecla.onkeyup = () => {tecla.classList.remove('ativa')}
}