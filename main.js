function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let cont=0; cont < listaDeTeclas.length; cont++ ){

    const tecla = listaDeTeclas[cont]

    const tipoSom = tecla.classList[1]

    tecla.onclick = () => {tocaSom(`#som_${tipoSom}`)}
}