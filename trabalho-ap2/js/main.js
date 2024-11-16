// main.js
document.addEventListener('DOMContentLoaded', function() {
    fetchAthletes('all'); // Busca inicial para todos os atletas
});

function changeElenco() {
    const selectElement = document.getElementById('elenco-select');
    const selectedElenco = selectElement.value;
    fetchAthletes(selectedElenco);
}

function fetchAthletes(elenco) {
    let url;
    switch(elenco) {
        case 'masculino':
            url = 'https://botafogo-atletas.mange.li/2024-1/masculino';
            break;
        case 'feminino':
            url = 'https://botafogo-atletas.mange.li/2024-1/feminino';
            break;
        default:
            url = 'https://botafogo-atletas.mange.li/2024-1/all';
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayAthletes(data);
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
            alert('Erro ao obter dados!');
        });
}

function displayAthletes(athletes) {
    const athleteList = document.getElementById('athlete-list');
    athleteList.innerHTML = ''; // Limpa a lista de atletas antes de exibir os novos dados
    athletes.forEach(athlete => {
        const athleteCard = document.createElement('div');
        athleteCard.classList.add('athlete-card');
        athleteCard.innerHTML = `
            <img src="${athlete.imagem}" alt="Foto de ${athlete.nome}" class="athlete-photo">
            <h3>${athlete.nome}</h3>
            <p>Posição: ${athlete.posicao}</p>
            <a href="detalhes.html?id=${athlete.id}">Ver detalhes</a>
        `;
        athleteList.appendChild(athleteCard);
    });
}
