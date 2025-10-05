const cards = [
    { 
        id: 1,
        titulo: "Scrum: A Arte de Fazer o Dobro do Trabalho na Metade do Tempo",
        descricao: "Análises completas dos livros",
        icone: "fa-book-open",
        resumo: [
            "Scrum: A Arte de Fazer o Dobro do Trabalho na Metade do Tempo, de Jeff Sutherland, apresenta o framework Scrum como uma abordagem ágil para aumentar a produtividade e a qualidade em projetos.",
            "O livro mostra como equipes multidisciplinares, ciclos curtos (sprints) e inspeção contínua ajudam a eliminar desperdícios, promover a colaboração e entregar valor rapidamente.",
            "Sutherland compartilha exemplos reais e destaca que o Scrum pode ser aplicado em diversas áreas, não só em tecnologia, tornando equipes mais felizes, autônomas e eficientes."
        ],
        biografia: [
            "Jeff Sutherland é um dos criadores do Scrum, com carreira marcada por inovação em gestão de projetos.",
            "Ele atuou como piloto de caça, médico, pesquisador e executivo de tecnologia, sempre buscando formas de melhorar processos e resultados.",
            "Sua experiência prática e acadêmica fundamenta o método Scrum, hoje adotado mundialmente por empresas de todos os portes."
        ],
        guia: [
            "Para aproveitar ao máximo o livro, leia cada capítulo refletindo sobre como os conceitos podem ser aplicados no seu dia a dia.",
            "Anote exemplos práticos, compare com experiências próprias e, se possível, discuta ideias com colegas de trabalho ou estudo.",
            "Experimente implementar pequenas mudanças sugeridas pelo Scrum em projetos pessoais ou acadêmicos."
        ]
    },
    { 
        id: 2,
        titulo: "Biografia de H.P. Lovecraft",
        descricao: "Conheça a história dos autores",
        icone: "fa-feather-pointed",
        resumo: [
            "H.P. Lovecraft foi um escritor norte-americano conhecido por criar o gênero do horror cósmico.",
            "Suas histórias exploram o medo do desconhecido, entidades ancestrais e a insignificância humana diante do universo.",
            "Obras como 'O Chamado de Cthulhu' e 'Nas Montanhas da Loucura' influenciaram profundamente a literatura fantástica e o terror moderno."
        ],
        biografia: [
            "Howard Phillips Lovecraft nasceu em 1890, em Providence, EUA.",
            "Viveu grande parte da vida em dificuldades financeiras e publicou a maioria de seus contos em revistas pulp.",
            "Apesar de pouco reconhecido em vida, após sua morte em 1937, Lovecraft se tornou um dos autores mais influentes do horror, inspirando gerações de escritores, cineastas e artistas."
        ],
        guia: [
            "Para mergulhar no universo de Lovecraft, comece pelos contos mais famosos e preste atenção à atmosfera, ao vocabulário e à construção do medo.",
            "Leia em ambientes tranquilos, permitindo-se imaginar os cenários e criaturas descritas.",
            "Compartilhe suas impressões em fóruns ou clubes de leitura para enriquecer a experiência."
        ]
    },
    { 
        id: 3,
        titulo: "Guia de Leitura",
        descricao: "Dicas para aproveitar melhor suas leituras",
        icone: "fa-compass",
        guia: [
            "Defina metas realistas, crie um ambiente confortável para ler e varie os gêneros literários.",
            "Participe de grupos de leitura para trocar ideias e ampliar seu repertório.",
            "Faça anotações sobre personagens, temas e reflexões pessoais a cada leitura."
        ]
    }
];

// Função para montar vários parágrafos
function renderParagraphs(arr) {
    return arr ? arr.map(text => `<p>${text}</p>`).join('') : '';
}

// Pega id da query string
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'));

// Busca o card pelo id
const item = cards.find(card => card.id === itemId);

// Monta o HTML dinamicamente
if (item) {
    const detalhesContainer = document.getElementById('detalhes-container');
    detalhesContainer.innerHTML = `
        <div class="card h-100 text-center shadow-sm card-hover mx-auto" style="max-width: 500px;">
            <div class="card-icon my-3">
                <i class="fa-solid ${item.icone} fa-3x"></i>
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.titulo}</h3>
                ${item.resumo ? '<h5 class="mt-4 mb-2">Resumo:</h5>' + renderParagraphs(item.resumo) : ''}
                ${item.biografia ? '<h5 class="mt-4 mb-2">Biografia:</h5>' + renderParagraphs(item.biografia) : ''}
                <h5 class="mt-4 mb-2">Guia de leitura:</h5>
                ${renderParagraphs(item.guia)}
                <a href="index.html" class="btn btn-secondary mt-4">Voltar</a>
            </div>
        </div>
    `;
} else {
    document.getElementById('detalhes-container').innerHTML = "<p>Item não encontrado.</p>";
}