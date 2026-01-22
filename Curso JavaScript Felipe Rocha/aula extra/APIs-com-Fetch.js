// ============================================================================
// 🎓 APRENDENDENDO APIS COM FETCH NO JAVASCRIPT
// ============================================================================
// Uma aula completa sobre como consumir APIs usando a API Fetch nativa do JS
// ============================================================================

/*
  📚 ÍNDICE:
  1. O que é uma API?
  2. O que é Fetch?
  3. Estrutura básica de uma requisição
  4. Requisições GET (buscar dados)
  5. Requisições POST (enviar dados)
  6. Tratamento de erros
  7. Exemplos práticos com APIs reais
*/

// ============================================================================
// 1️⃣ O QUE É UMA API?
// ============================================================================

/*
  API = Application Programming Interface (Interface de Programação de Aplicação)

  🤔 Pense em uma API como um "cardápio de um restaurante":
  - Você não entra na cozinha
  - Você olha o menu (documentação)
  - Você pede um prato (faz uma requisição)
  - O restaurante prepara e entrega (a API retorna os dados)

  💡 As APIs permitem que aplicações diferentes se comuniquem:
  - Frontend (seu navegador) ↔ Backend (servidor)
  - Seu app ↔ Serviços externos (Google, GitHub, etc)

  🌐 Exemplos de APIs que você usa todo dia:
  - API do Google Maps (para mostrar mapas)
  - API do YouTube (para mostrar vídeos)
  - API do Twitter (para buscar tweets)
  - API do seu banco (para ver saldo)
*/

// ============================================================================
// 2️⃣ O QUE É FETCH?
// ============================================================================

/*
  Fetch é uma API nativa do JavaScript que permite fazer requisições HTTP.

  ✅ Vantagens do Fetch:
  - Nativo do JS (não precisa de bibliotecas externas)
  - Simples e elegante
  - Retorna uma Promise (fácil de usar com async/await)
  - Padrão moderno da web

  ❌ Antigamente usava-se:
  - XMLHttpRequest (mais complicado)
  - jQuery.ajax (precisava da lib jQuery)
*/

// ============================================================================
// 3️⃣ ESTRUTURA BÁSICA DE UMA REQUISIÇÃO COM FETCH
// ============================================================================

console.log("\n=== ESTRUTURA BÁSICA ===\n");

/*
  Sintaxe básica:

  fetch(URL, {opções})
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(erro => console.log(erro))

  OU com async/await (mais moderno):

  async function buscarDados() {
    try {
      const resposta = await fetch(URL)
      const dados = await resposta.json()
      console.log(dados)
    } catch(erro) {
      console.log(erro)
    }
  }
*/

// ============================================================================
// 4️⃣ REQUISIÇÕES GET (BUSCAR DADOS)
// ============================================================================

console.log("\n=== REQUISIÇÕES GET ===\n");

// 📌 EXEMPLO 1: GET Básico com .then()
console.log("EXEMPLO 1: GET básico com .then()");

function exemplo1_getThen() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(resposta => resposta.json())  // Converte resposta em JSON
    .then(dados => console.log("Usuário recebido:", dados))
    .catch(erro => console.log("Erro:", erro))
}

// exemplo1_getThen() // Descomente para testar

// 📌 EXEMPLO 2: GET com async/await (RECOMENDADO)
console.log("EXEMPLO 2: GET com async/await");

async function exemplo2_getAsync() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios = await resposta.json()
    console.log("Lista de usuários:", usuarios)
    return usuarios
  } catch(erro) {
    console.log("Erro ao buscar usuários:", erro)
  }
}

// exemplo2_getAsync() // Descomente para testar

// 📌 EXEMPLO 3: Tratamento completo com status HTTP
console.log("EXEMPLO 3: Verificar status da resposta");

async function exemplo3_comStatusCheck() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    
    // Verificar se a resposta foi bem-sucedida
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const post = await resposta.json()
    console.log("Post encontrado:", post)
    return post
  } catch(erro) {
    console.log("Erro:", erro.message)
  }
}

// exemplo3_comStatusCheck() // Descomente para testar

// 📌 EXEMPLO 4: GET com parâmetros (Query String)
console.log("EXEMPLO 4: GET com parâmetros");

async function exemplo4_comParametros() {
  try {
    // Buscar apenas posts do usuário 1
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    const posts = await resposta.json()
    console.log(`Posts do usuário 1: ${posts.length} encontrados`)
    console.log("Primeiros 2 posts:", posts.slice(0, 2))
  } catch(erro) {
    console.log("Erro:", erro)
  }
}

// exemplo4_comParametros() // Descomente para testar

// 📌 EXEMPLO 5: Carregador de dados com status
console.log("EXEMPLO 5: Simular carregamento com delay");

async function exemplo5_comCarregamento() {
  let estado = "carregando"
  
  try {
    console.log("🔄 Estado:", estado)
    
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const usuario = await resposta.json()
    
    estado = "sucesso"
    console.log("✅ Estado:", estado)
    console.log("Nome do usuário:", usuario.name)
    
  } catch(erro) {
    estado = "erro"
    console.log("❌ Estado:", estado)
    console.log("Erro:", erro.message)
  }
}

// exemplo5_comCarregamento() // Descomente para testar

// ============================================================================
// 5️⃣ REQUISIÇÕES POST (ENVIAR DADOS)
// ============================================================================

console.log("\n=== REQUISIÇÕES POST ===\n");

// 📌 EXEMPLO 6: POST básico - Enviar dados
console.log("EXEMPLO 6: POST - Criar novo post");

async function exemplo6_post() {
  try {
    const novoPost = {
      title: "Meu primeiro post com Fetch",
      body: "Este é um exemplo de POST com Fetch",
      userId: 1
    }

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",        // Define o método HTTP
      headers: {
        "Content-Type": "application/json"  // Tipo de conteúdo
      },
      body: JSON.stringify(novoPost)  // Converte objeto em JSON
    })

    const postCriado = await resposta.json()
    console.log("Post criado com sucesso! ID:", postCriado.id)
    console.log("Resposta:", postCriado)

  } catch(erro) {
    console.log("Erro ao criar post:", erro)
  }
}

// exemplo6_post() // Descomente para testar

// 📌 EXEMPLO 7: POST com autenticação (Token)
console.log("EXEMPLO 7: POST com Token de autenticação");

async function exemplo7_comToken() {
  try {
    const dados = {
      nome: "João Silva",
      email: "joao@example.com"
    }

    const resposta = await fetch("https://api.example.com/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer seu_token_aqui"  // Autenticação
      },
      body: JSON.stringify(dados)
    })

    const resultado = await resposta.json()
    console.log("Usuário criado:", resultado)

  } catch(erro) {
    console.log("Erro:", erro)
  }
}

// exemplo7_comToken() // Descomente para testar

// ============================================================================
// 6️⃣ TRATAMENTO DE ERROS
// ============================================================================

console.log("\n=== TRATAMENTO DE ERROS ===\n");

// 📌 EXEMPLO 8: Tratamento completo de erros
console.log("EXEMPLO 8: Tratamento robusto de erros");

async function exemplo8_tratamentoErros() {
  try {
    console.log("Iniciando requisição...")

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/999")

    // Erro 1: Status HTTP de erro (404, 500, etc)
    if (!resposta.ok) {
      if (resposta.status === 404) {
        throw new Error("Recurso não encontrado!")
      } else if (resposta.status === 500) {
        throw new Error("Erro do servidor!")
      } else {
        throw new Error(`Erro: ${resposta.status}`)
      }
    }

    const dados = await resposta.json()
    console.log("✅ Sucesso:", dados)

  } catch(erro) {
    // Erro 2: Problemas de rede, parsing JSON, etc
    console.log("❌ Erro capturado:", erro.message)
  }
}

// exemplo8_tratamentoErros() // Descomente para testar

// 📌 EXEMPLO 9: Timeout - Requisição que demora muito
console.log("EXEMPLO 9: Timeout - requisição que demora muito");

async function exemplo9_comTimeout(urlDemorada) {
  try {
    // Criar um sinal de timeout
    const controller = new AbortController()
    const tempoMaximo = 5000  // 5 segundos

    const timeout = setTimeout(() => controller.abort(), tempoMaximo)

    const resposta = await fetch(urlDemorada, {
      signal: controller.signal
    })

    clearTimeout(timeout)

    const dados = await resposta.json()
    console.log("Dados recebidos:", dados)

  } catch(erro) {
    if (erro.name === "AbortError") {
      console.log("❌ Requisição cancelada - timeout!")
    } else {
      console.log("❌ Erro:", erro.message)
    }
  }
}

// exemplo9_comTimeout("https://api.example.com/dados-lento") // Descomente para testar

// ============================================================================
// 7️⃣ EXEMPLOS PRÁTICOS COM APIS REAIS
// ============================================================================

console.log("\n=== EXEMPLOS PRÁTICOS ===\n");

// 📌 EXEMPLO 10: Buscar informações de um país (REST Countries API)
console.log("EXEMPLO 10: Buscar dados de um país");

async function exemplo10_buscaaPais(nomePais) {
  try {
    const resposta = await fetch(`https://restcountries.com/v3.1/name/${nomePais}`)
    
    if (!resposta.ok) throw new Error("País não encontrado!")
    
    const paises = await resposta.json()
    const pais = paises[0]
    
    console.log(`\n📍 País: ${pais.name.common}`)
    console.log(`   Capital: ${pais.capital?.[0] || "N/A"}`)
    console.log(`   População: ${pais.population.toLocaleString()}`)
    console.log(`   Região: ${pais.region}`)
    console.log(`   Moeda: ${Object.values(pais.currencies)[0].name}`)
    
  } catch(erro) {
    console.log("Erro:", erro.message)
  }
}

// exemplo10_buscaaPais("Brazil") // Descomente para testar

// 📌 EXEMPLO 11: Buscar informações do GitHub
console.log("EXEMPLO 11: Dados do perfil GitHub");

async function exemplo11_perfilGithub(usuario) {
  try {
    const resposta = await fetch(`https://api.github.com/users/${usuario}`)
    
    if (!resposta.ok) throw new Error("Usuário não encontrado!")
    
    const perfil = await resposta.json()
    
    console.log(`\n👤 Usuário: ${perfil.name || perfil.login}`)
    console.log(`   Bio: ${perfil.bio || "Sem bio"}`)
    console.log(`   Repositórios: ${perfil.public_repos}`)
    console.log(`   Seguidores: ${perfil.followers}`)
    console.log(`   URL: ${perfil.html_url}`)
    
  } catch(erro) {
    console.log("Erro:", erro.message)
  }
}

// exemplo11_perfilGithub("torvalds") // Descomente para testar

// 📌 EXEMPLO 12: Obter uma citação aleatória
console.log("EXEMPLO 12: Citação aleatória");

async function exemplo12_citacaoAleatoria() {
  try {
    const resposta = await fetch("https://api.quotable.io/random")
    const citacao = await resposta.json()
    
    console.log(`\n💭 "${citacao.content}"`)
    console.log(`   — ${citacao.author}`)
    
  } catch(erro) {
    console.log("Erro:", erro)
  }
}

// exemplo12_citacaoAleatoria() // Descomente para testar

// 📌 EXEMPLO 13: Buscar imagens aleatórias
console.log("EXEMPLO 13: Imagem aleatória do Unsplash");

async function exemplo13_imagemAleatoria() {
  try {
    const resposta = await fetch("https://api.unsplash.com/photos/random?client_id=INSIRA_SUA_API_KEY")
    const imagem = await resposta.json()
    
    console.log(`\n🖼️ Foto: ${imagem.description || "Sem descrição"}`)
    console.log(`   Autor: ${imagem.user.name}`)
    console.log(`   URL: ${imagem.links.html}`)
    
  } catch(erro) {
    console.log("Erro:", erro)
  }
}

// Nota: Unsplash requer API Key. Cadastre-se em https://unsplash.com/developers

// ============================================================================
// 🎯 DICAS IMPORTANTES
// ============================================================================

/*
  ✅ BOAS PRÁTICAS:

  1. Sempre use try/catch ou .catch()
     - Requisições podem falhar por vários motivos
     - Não deixe o usuário sem feedback

  2. Verifique resposta.ok ou resposta.status
     - Um 404 não gera erro no Fetch
     - Você precisa verificar manualmente

  3. Use async/await em vez de .then()
     - Código mais limpo e fácil de ler
     - Melhor para trata múltiplas requisições

  4. Defina timeouts
     - Requisições não devem esperar infinitamente
     - Use AbortController para cancela

  5. Mostre feedback ao usuário
     - "Carregando...", "Erro!", "Sucesso!"
     - Melhora experiência do usuário

  6. Respeite rate limits
     - Não faça 1000 requisições por segundo
     - APIs têm limites de requisições

  7. Nunca exponha dados sensíveis
     - Não coloque API keys no Frontend
     - Use backend como intermediário

  8. Leia a documentação
     - Cada API é diferente
     - Docs têm informações de autenticação, endpoints, etc
*/

// ============================================================================
// 🚀 PROJETO FINAL: Busca de clima
// ============================================================================

console.log("\n=== PROJETO: BUSCA DE CLIMA ===\n");

async function buscarClima(cidade) {
  try {
    console.log(`🔄 Buscando clima para ${cidade}...`)
    
    // Usando Open-Meteo API (não precisa de API Key)
    const resposta = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
    )
    
    const dados = await resposta.json()
    
    if (!dados.results || dados.results.length === 0) {
      throw new Error("Cidade não encontrada!")
    }
    
    const local = dados.results[0]
    console.log(`\n✅ Clima encontrado para ${local.name}, ${local.country}`)
    console.log(`   Latitude: ${local.latitude}`)
    console.log(`   Longitude: ${local.longitude}`)
    
  } catch(erro) {
    console.log(`❌ Erro: ${erro.message}`)
  }
}

// buscarClima("São Paulo") // Descomente para testar

// ============================================================================
// 📝 RESUMO RÁPIDO
// ============================================================================

/*
  FETCH - RESUMO RÁPIDO:

  ✨ GET (Buscar dados):
  const dados = await fetch(url)
    .then(r => r.json())

  ✨ POST (Enviar dados):
  const resultado = await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(dados)
  }).then(r => r.json())

  ✨ Sempre trate erros:
  try { ... } catch(err) { ... }

  ✨ Verifique o status:
  if (!resposta.ok) throw new Error(resposta.status)

  FIM! Agora você sabe usar APIs com Fetch! 🎉
*/

console.log("\n✅ Arquivo de aprendizado carregado!")
console.log("Descomente os exemplos para testá-los!\n")
