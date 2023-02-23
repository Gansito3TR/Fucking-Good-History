window.addEventListener('scroll', function () {

    let textos = document.querySelectorAll('.texto');

    for (let i = 0; i < textos.length; i++) {
        let screen = window.innerHeight * 0.70;
        let distancia = textos[i].getBoundingClientRect().top;
        let distanciaSuperior = window.innerHeight * 0.003;

        if (distancia <= screen) {
            textos[i].classList.add('aparece');
        } else {
            textos[i].classList.remove('aparece')
        }
      
    }

})

window.addEventListener('scroll', function () {
    let aegao = document.getElementById('aegao')
    let tonayitan = document.getElementById('tonayitan')
    let posicionSuperior1 = aegao.getBoundingClientRect().top;
    let posicionSuperior2 = tonayitan.getBoundingClientRect().top;
    let posicionInferior1 = aegao.getBoundingClientRect().bottom;
    let posicionInferior2 = tonayitan.getBoundingClientRect().bottom;

    let distanciaInferior = window.innerHeight * 0.70;
    let distanciaSuperior = window.innerHeight * 0.30;

    if (posicionSuperior1 < distanciaInferior) {
        aegao.classList.add('transform_left')
        aegao.classList.add('aparece')
    } else {
        aegao.classList.remove('aparece')
        aegao.classList.remove('transform_left')
    }
    console.log(posicionSuperior1)

    if (posicionSuperior2 < distanciaInferior) {
        tonayitan.classList.add('transform_left')
        tonayitan.classList.add('aparece')
    } else {
        tonayitan.classList.remove('aparece')
        tonayitan.classList.remove('transform_left')
    }

    if (posicionInferior1 < distanciaSuperior) {
        aegao.classList.remove('transform_left')
        aegao.classList.remove('aparece')
    }
    if (posicionInferior2 < distanciaSuperior) {
        tonayitan.classList.remove('transform_left')
        tonayitan.classList.remove('aparece')
    }

})