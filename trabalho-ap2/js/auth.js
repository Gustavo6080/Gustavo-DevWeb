document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password').value;
    const hash = CryptoJS.SHA256(passwordInput).toString(); // Calcule o hash SHA-256 da senha

    if (hash === 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855') { // Substitua aqui pelo seu hash
        localStorage.setItem('auth', 'true'); // Salvando como string
        window.location.href = 'index.html'; // Redireciona para a página de lista de atletas
    } else {
        alert('Senha incorreta!');
    }
});

function checkAuth() {
    const auth = localStorage.getItem('auth');
    if (!auth || auth !== 'true') { // Verifica se o item foi criado e se está definido como 'true'
        window.location.href = 'login.html';
    }
}

if (location.pathname !== '/login.html') {
    checkAuth();
}
