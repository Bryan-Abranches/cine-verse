🎬 CineVerse - Plataforma de Catálogo de Filmes
GitHub repo size
GitHub language count
GitHub top language
GitHub license

📌 Visão Geral
O CineVerse é uma aplicação web moderna desenvolvida em React.js para gerenciamento e exploração de catálogos de filmes. O projeto foi criado com o objetivo de aprofundar conhecimentos em desenvolvimento front-end, utilizando as melhores práticas e tecnologias atuais.

✨ Funcionalidades Principais
🎬 Listagem completa de filmes

🔍 Sistema de busca avançada

📄 Páginas de detalhes para cada filme

📱 Design responsivo para todos os dispositivos

⚡ Performance otimizada com Vite

🔄 Gerenciamento de estado eficiente

🛠️ Tecnologias Utilizadas
Front-end
React

Vite

JavaScript

HTML5

CSS3

Ferramentas
Git

npm

React Router

⚙️ Como Executar o Projeto
Pré-requisitos
Node.js (versão 16 ou superior)

npm (vem com Node.js)

Git (opcional)

Passo a Passo
Clonar o repositório

bash
git clone https://github.com/Bryan-Abranches/cine-verse.git
cd cine-verse
Instalar dependências

bash
npm install
Iniciar o servidor de desenvolvimento

bash
npm run dev
Acessar a aplicação

Abra http://localhost:5173 no seu navegador
📂 Estrutura do Projeto
cine-verse/
├── public/ # Arquivos públicos
│ ├── favicon.ico
│ └── index.html
├── src/ # Código fonte principal
│ ├── assets/ # Recursos estáticos
│ ├── components/ # Componentes reutilizáveis
│ │ ├── Header/
│ │ ├── MovieCard/
│ │ └── SearchBar/
│ ├── pages/ # Páginas da aplicação
│ │ ├── Home/
│ │ └── MovieDetails/
│ ├── App.jsx # Componente raiz
│ └── main.jsx # Ponto de entrada
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
🧩 Componentes Principais
Componente Descrição Tecnologias Utilizadas
MovieCard Exibe informações básicas do filme React, CSS Modules
MovieDetails Mostra detalhes completos do filme React Router, useEffect
SearchBar Permite buscar filmes por título useState, eventos React
Header Barra de navegação superior CSS Flexbox, React Router
🌐 Rotas
A aplicação utiliza React Router DOM para gerenciamento de rotas:

/ - Página inicial com listagem de filmes

/movie/:id - Página de detalhes do filme específico

🚀 Deploy
Para gerar uma versão de produção:

bash
npm run build
O projeto pode ser facilmente implantado em plataformas como:

Vercel
Netlify

🤝 Como Contribuir
Contribuições são bem-vindas! Siga estes passos:

Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/incrivel)

Commit suas mudanças (git commit -m 'Adiciona feature incrível')

Push para a branch (git push origin feature/incrivel)

Abra um Pull Request

📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

✉️ Contato
Bryan Abranches
GitHub
LinkedIn

Feito com ❤️ e React.js
