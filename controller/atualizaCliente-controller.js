import { clienteService } from '../service/cliente-service.js';

(async () => {
  const pegaURL = new URL(window.location);
  const id = pegaURL.searchParams.get('id');

  const inputNome = document.querySelector('[data-nome]');
  const inputEmail = document.querySelector('[data-email]');

  try {
    const dados = await clienteService.detalhaCliente(id);
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
  } catch (err) {
    console.error(err);
    window.location.href = '../telas/erro.html';
  }

  const fomulario = document.querySelector('[data-form]');
  fomulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      await clienteService.atualizaCliente(
        id,
        inputNome.value,
        inputEmail.value
      );
      window.location.href = '../telas/edicao_concluida.html';
    } catch (err) {
      console.error(err);
      window.location.href = '../telas/erro.html';
    }
  });
})();
