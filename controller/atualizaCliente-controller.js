import { clienteService } from '../service/cliente-service.js';

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

clienteService.detalhaCliente(id).then((dados) => {
  inputNome.value = dados.nome;
  inputEmail.value = dados.email;
});
