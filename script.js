const btnEntrar = document.getElementById('entrar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const checkEnviar = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');

function validaLogin(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function agreeForm(event) {
    if (event.target.value === 'on') {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
    console.log(!event.target.value);
}

btnEntrar.addEventListener('click', validaLogin);
checkEnviar.addEventListener('click', agreeForm)


