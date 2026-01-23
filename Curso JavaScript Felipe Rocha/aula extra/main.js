//PROMISE

// const minhaPromise = new Promise((resolve, reject) => {
//     if(true) {
//         resolve("Deu tudo certo!")
//     }
//     else{
//         reject("Algo deu errado")
//     }
// })

// minhaPromise
// .then(mensagemSucesso=>{
//     console.log(mensagemSucesso);
// })
// .catch(erro => {
//     console.log(erro)
// })

//FETCH -> Fazer requisição a algum sistema pegando ou mandando informações

//GET -> Pegar dados //POST -> Enviar dados


// fetch("https://viacep.com.br/ws/62700000/json/")
// .then(meu => {
//     return meu.json();
// })
// .then(teu => {
//     console.log(teu)
// })
// .catch(nosso => {
//     console.log(nosso.message)
// })

//TRATAMENTO DE ERRO

//ERRO DE REQUISIÇÃO COM SERVIDOR -> Catch, resultado da promise

//ERRO DE STATUS DE SERVIDOR -> .ok

fetch(
  "http://api.weatherstack.com/current?access_key=850ec2ebf7eef2d30e0319b55d8df069&query=Canindé",
)
  .then((sucesso) => {
    return sucesso.json();
  })
  .then((dado) => {
    console.log(dado);
  })
  .catch((erro) => {
    console.log(erro.message);
  });