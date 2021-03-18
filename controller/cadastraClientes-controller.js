import { clienteService } from '../service/cliente-service.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const nome = e.target.querySelector('[data-nome]').value;
    const email = e.target.querySelector('[data-email]').value;
    await clienteService.criaCliente(nome, email);
    window.location.href = '../telas/cadastro_concluido.html';
  } catch (err) {
    console.error(err);
    window.location.href = '../telas/erro.html';
  }
});
