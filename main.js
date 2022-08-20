function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll(".tecla")

let cont = 0
while (cont < listaDeTeclas.length ){

    const tecla = listaDeTeclas[cont]

    const tipoSom = tecla.classList[1]

    tecla.onclick = () => {tocaSom(`#som_${tipoSom}`)}
    
    cont += 1 
}