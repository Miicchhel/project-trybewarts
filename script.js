const btnEntrar = document.getElementById('entrar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

function validaLogin(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEntrar.addEventListener('click', validaLogin);
