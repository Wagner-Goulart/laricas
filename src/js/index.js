const cadastroBtn = document.querySelector('.cadastro-btn')
const modal = document.querySelector('.modal')
const fecharModalBtn = document.querySelector('.fechar')

cadastroBtn.addEventListener('click', () =>{
   abrirEFecharModal();
})

fecharModalBtn.addEventListener('click', ()=>{
    abrirEFecharModal()
})

function abrirEFecharModal() {
    modal.classList.toggle('hide')
}