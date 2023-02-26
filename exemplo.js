const result = fetch('http://viacep.com.br/ws/01001000/json/')
  .then(res => res.json())
  .then(res => {
    if (res.erro) {
      throw Error("cep noa encontrado")
    }else {
      console.log(res)
    }
  })
  .catch(erro => console.log("error 500 ->", erro.message))
  .finally(message => console.log("Processamento concluido", message));



  var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse cep não existe!')
        } else
            console.log(r)
    })
    .catch(erro => console.log(erro.message))
    .finally(mensagem => console.log('Processamento concluido!'));

console.log(consultaCEP);



var requisicao = fetch("https://localhost:5000/")
.then(resposta => resposta.json())
.then(respostaConvertida => console.log(respostaConvertida));


const ceps = ['01001000','20051-040','20051-050']

const results = ceps.map((cep )=> getAdress(cep) )

Promise.all(results).then((res)=> console.log(res))


async function getCustomerOrders(customerId) {
  const response = await fetch(`https://api.com/api/customer/${customerId}`)
  const customer = await response.json()

  return await Promise.all(customer.orders.map(async (orderId) => {
    const response = await fetch(`https://api.com/api/order/${orderId}`)
    const orderData = await response.json()
    return orderData.amount
  }))
 }
