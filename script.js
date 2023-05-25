const inputSenha = document.getElementById("senha")

const mostraSenha = (event) => {
    event.preventDefault()
    inputSenha.setAttribute('type', 'text')
    botaoEsconde.innerHTML = "Esconder Senha"


}




const inputNome = document.getElementById("nome")
inputNome.value = ""
const inputEmail = document.getElementById("email")
inputEmail.value = ""

const inputMensagem = document.getElementById("mensagem")

const acaoClicar = () => {
    alert("Mensagem enviada com sucesso!")
    inputNome.value = ""
    inputEmail.value = ""
    inputMensagem.innerHTML = ""
}