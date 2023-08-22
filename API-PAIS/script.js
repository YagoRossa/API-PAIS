// Obtendo referências aos elementos HTML
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    // Obtendo o nome do país a partir do valor do input
  let countryName = countryInp.value;
    // Criando a URL final para a requisição a API com base no nome do país
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
    // Fazendo uma requisição fetch para a API
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
   
   // Manipulando os dados retornados pela API e exibindo-os no HTML
      result.innerHTML = `
        <!-- Exibindo a bandeira do país -->
        <img src="${data[0].flags.svg}" class="flag-img">
        
        <!-- Exibindo o nome do país -->
        <h2>${data[0].name.common}</h2>
        
        <!-- Exibindo informações sobre a capital -->
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        
        <!-- Exibindo informações sobre o continente -->
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continentes:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        
        <!-- Exibindo informações sobre a população -->
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Populacao:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        
        <!-- Exibindo informações sobre a moeda -->
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Moeda:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        
        <!-- Exibindo informações sobre a língua -->
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Linguagem:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })
    .catch(() => {
          // IF caso tenha erros
      if (countryName.length == 0) {
        result.innerHTML = `<h3>O campo de entrada nao pode estar vazio</h3>`;
      } else {
        result.innerHTML = `<h3>Digite um nome valido.</h3>`;
      }
    });
});
