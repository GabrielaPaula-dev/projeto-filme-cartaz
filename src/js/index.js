const btnTrailers = document.querySelector('.btn-trailers');
const modal = document.querySelector('.modal');
const btnVoltar = document.querySelector('.voltar');
const btnAvancar = document.querySelector('.avancar');
const trailers = document.querySelectorAll('.trailer');
const botaoFechar = document.querySelector('.fechar-modal');
let videoAtual = 0

btnTrailers.addEventListener('click', () => {
    modal.classList.add('selecionado');
    botaoFechar.addEventListener('click', () => {
        const modelAberto = document.querySelector('.selecionado');
        modelAberto.classList.remove('selecionado');
    })        
})
btnAvancar.addEventListener('click', () => {
    trailers[videoAtual].classList.remove('selecionado');
    videoAtual++;
    if (videoAtual>=trailers.length) {
        videoAtual=0
    }
    trailers[videoAtual].classList.add('selecionado'); 
})
btnVoltar.addEventListener('click',()=>{
    if (videoAtual===0) {
        videoAtual=trailers.length-1
    }
    trailers[videoAtual].classList.remove('selecionado');
    videoAtual--;
    trailers[videoAtual].classList.add('selecionado');
    
})