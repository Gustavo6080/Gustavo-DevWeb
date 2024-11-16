document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const athleteId = urlParams.get('id');
    
    fetch(`https://botafogo-atletas.mange.li/2024-1/${athleteId}`)
        .then(response => response.json())
        .then(data => {
            displayAthleteDetails(data);
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
            document.getElementById('athlete-details').textContent = 'Erro ao obter dados do atleta!';
        });
});

function displayAthleteDetails(athlete) {
    const athleteDetails = document.getElementById('athlete-details');
    athleteDetails.innerHTML = `
        <h2>${athlete.nome}</h2>
        <p>${athlete.posicao}</p>
        <p>${athlete.time}</p>
    `;
}
