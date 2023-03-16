const btnTrailers = document.querySelector('.btn-trailers');
const modal = document.querySelector('.modal');
const btnVoltar = document.querySelector('.voltar');
const btnAvancar = document.querySelector('.avancar');
const trailers = document.querySelectorAll('.trailer');
const botaoFechar = document.querySelector('.fechar-modal');
let videoAtual = 0

btnTrailers.addEventListener('click', () => {
    modal.classList.add('selecionado');
    trailers[videoAtual].firstElementChild.src = 'https://www.youtube.com/embed/wxcvbL6o55M'
    botaoFechar.addEventListener('click', () => {
        modal.classList.remove('selecionado');
    })
})
btnAvancar.addEventListener('click', () => {
    trailers[videoAtual].firstElementChild.src = '';
    trailers[videoAtual].classList.remove('selecionado');
    videoAtual++;
    if (videoAtual >= trailers.length) {
        videoAtual = 0
    }
    trailers[videoAtual].classList.add('selecionado');
    if (trailers[videoAtual].classList.contains('selecionado')) {
        trailers[videoAtual].firstElementChild.src = `https://www.youtube.com/embed/${trailers[videoAtual].id}`;
    }
})
btnVoltar.addEventListener('click', () => {
    trailers[videoAtual].classList.remove('selecionado');
    trailers[videoAtual].firstElementChild.src = '';

    if (videoAtual === 0) {
        videoAtual = trailers.length;
    }
    videoAtual--;
    trailers[videoAtual].classList.add('selecionado');
    if (trailers[videoAtual].classList.contains('selecionado')) {
        trailers[videoAtual].firstElementChild.src = `https://www.youtube.com/embed/${trailers[videoAtual].id}`;
    }
})

