const btnEntrar = document.getElementById('entrar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const checkEnviar = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const naoEnvia = true;
btnEnviar.disabled = naoEnvia;
// let contador = 1;

function validaLogin(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function agreeEnviar() {
  if (checkEnviar.checked === true) {
    btnEnviar.disabled = !naoEnvia;
  } else {
    btnEnviar.disabled = naoEnvia;
  }
}

btnEntrar.addEventListener('click', validaLogin);
checkEnviar.addEventListener('click', agreeEnviar);
