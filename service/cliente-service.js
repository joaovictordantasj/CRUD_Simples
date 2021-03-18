const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((res) => {
    return res.json();
  });
};

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((res) => {
    return res.body;
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
};
