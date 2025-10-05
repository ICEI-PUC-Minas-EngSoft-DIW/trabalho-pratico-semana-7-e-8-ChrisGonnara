const cards = [
    { 
        id: 1,
        titulo: "Resenhas Detalhadas",
        descricao: "Análises completas dos livros",
        icone: "fa-book-open",
    },
    { 
        id: 2,
        titulo: "Biografia de autores",
        descricao: "Conheça a história dos autores",
        icone: "fa-feather-pointed",
    },
    { 
        id: 3,
        titulo: "Guias de leitura",
        descricao: "Dicas para aproveitar melhor suas leituras",
        icone: "fa-compass",
    },
];

const container = document.getElementById('cards-container');

cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col-12 col-md-4 mb-4'; // mantém layout responsivo e coluna igual Bootstrap
    cardDiv.innerHTML = `
        <div class="card h-100 text-center shadow-sm card-hover">
            <div class="card-icon my-3">
                <i class="fa-solid ${card.icone}"></i>
            </div>
            <div class="card-body">
                <h3 class="card-title">${card.titulo}</h3>
                <p class="card-text">${card.descricao}</p>
                <a href="detalhes.html?id=${card.id}" class="btn btn-primary">Saiba mais</a>
            </div>
        </div>
    `; // <-- fechamento correto da string
    container.appendChild(cardDiv); // <-- fora das aspas!
});