const btnEntrar = document.getElementById('entrar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const checkEnviar = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const naoEnvia = true;
btnEnviar.disabled = naoEnvia;
let contador = 1;

function validaLogin(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function agreeEnviar() {
  if (contador % 2 !== 0) {
    btnEnviar.disabled = !naoEnvia;
    contador += 1;
  } else {
    btnEnviar.disabled = naoEnvia;
    contador += 1;
  }
}

btnEntrar.addEventListener('click', validaLogin);
checkEnviar.addEventListener('click', agreeEnviar);
