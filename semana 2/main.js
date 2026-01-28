const loadBtn =  document.getElementById('loadBtn');
let i = 1

loadBtn.addEventListener('click', () => {

  document.getElementById('loading').hidden = false
  document.getElementById('loadBtn').hidden = true

  fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('userName').textContent = data.name
      document.getElementById('userEmail').textContent = data.email
      document.getElementById('userPhone').textContent = data.phone
      document.getElementById('userWebSite').textContent = data.website
      document.getElementById('userCompany').textContent = data.company.name

      document.getElementById('loading').hidden = true
      document.getElementById('loadBtn').textContent = "Carregar próximo usuário"
      document.getElementById('loadBtn').hidden = false
      document.getElementById('user').hidden = false
    })
  i++
})