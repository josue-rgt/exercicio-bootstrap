
const frm = document.querySelector('form')
const nome = document.querySelector('#name')
const email = document.querySelector('#mail')
const telefone = document.querySelector('#phone')
const termos = document.querySelector('#check')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    alert('CADASTRO CONCLUÍDO COM SUCESSO')

    nome.value = ''
    email.value = ''
    telefone.value = ''

    termos.checked = false
   

})
