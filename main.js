const cep =  document.getElementById('cep');
const city =  document.querySelector('#cidade');
const street =  document.querySelector('#endereco');
const state =  document.querySelector('#estado');
const neighborhood = document.querySelector('#bairro');
const erro = document.querySelector('#error');

async function getAdress(cep) {
  try {
    const apiViaCep = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await fetch(apiViaCep);
    const parsed = await result.json();
    if (parsed.erro) {
      throw Error('CEP não encontrado!');
    }
    fillAddress(parsed);

  } catch (error) {
    if (error.name === 'TypeError') {
      erro.innerHTML = '<p>Digite um CEP valido com 8 dígitos sem traços e pontos!</p>';
    }else {
      erro.innerHTML = `<p>${error.message}</p>`;
    }
  }
}

'01001000';

cep.addEventListener("focusout", () => {
  getAdress(cep.value);
})

function fillAddress(address) {
  city.value = address.localidade;
  street.value = address.logradouro;
  state.value = address.uf;
  neighborhood.value = address.bairro;
}

