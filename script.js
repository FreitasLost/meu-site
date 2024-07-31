document.addEventListener('DOMContentLoaded', () => {
    // Função para atualizar o status do servidor
    async function updateServerStatus() {
        const statusElement = document.getElementById('status');
        
        try {
            const response = await fetch('https://api.example.com/server-status'); // URL fictícia, substitua pela URL real da sua API
            const data = await response.json();
            
            statusElement.innerHTML = `
                <p>Status: ${data.online ? 'Online' : 'Offline'}</p>
                <p>Jogadores: ${data.players}/${data.maxPlayers}</p>
            `;
        } catch (error) {
            statusElement.innerHTML = '<p>Erro ao carregar o status do servidor.</p>';
        }
    }

    updateServerStatus();

    // Adiciona um ouvinte de evento ao formulário de contato
    document.getElementById('contact-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});
