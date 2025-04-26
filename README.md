# 🎬 CineVerse - Plataforma de Catálogo de Filmes

## 📌 Visão Geral

O **CineVerse** é uma aplicação web moderna desenvolvida em **React.js** para gerenciamento e exploração de catálogos de filmes. O projeto foi criado com o objetivo de aprofundar conhecimentos em desenvolvimento front-end, utilizando as melhores práticas e tecnologias atuais.

## ✨ Funcionalidades Principais

- 🎬 **Listagem completa de filmes**
- 🔍 **Sistema de busca avançada**
- 📄 **Páginas de detalhes para cada filme**
- 📱 **Design responsivo para todos os dispositivos**
- ⚡ **Performance otimizada com Vite**
- 🔄 **Gerenciamento de estado eficiente**

## 🛠️ Tecnologias Utilizadas

### **Front-end**

- React
- Vite
- JavaScript
- HTML5
- CSS3

### **Ferramentas**

- Git
- npm
- React Router

## ⚙️ Como Executar o Projeto

### **Pré-requisitos**

- Node.js (versão 16 ou superior)
- npm (vem com Node.js)
- Git (opcional)

### **Passo a Passo**

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/Bryan-Abranches/cine-verse.git
   cd cine-verse
   ```
2. **Instalar dependências**
   ```bash
   npm install
   ```
3. **Iniciar o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
4. **Acessar a aplicação**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 📂 Estrutura do Projeto

cine-verse/
├── public/ # Arquivos públicos
│ ├── favicon.ico
│ └── index.html
├── src/ # Código-fonte principal
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
├── .gitignore # Arquivos e diretórios ignorados pelo Git
├── package.json # Configurações e dependências do projeto
├── vite.config.js # Configuração do Vite
└── README.md # Documentação do projeto

## 🧩 Componentes Principais

| Componente       | Descrição                          | Tecnologias Utilizadas    |
| ---------------- | ---------------------------------- | ------------------------- |
| **MovieCard**    | Exibe informações básicas do filme | React, CSS Modules        |
| **MovieDetails** | Mostra detalhes completos do filme | React Router, useEffect   |
| **SearchBar**    | Permite buscar filmes por título   | useState, eventos React   |
| **Header**       | Barra de navegação superior        | CSS Flexbox, React Router |

## 🌐 Rotas

A aplicação utiliza **React Router DOM** para gerenciamento de rotas:

- `/` → Página inicial com listagem de filmes
- `/movie/:id` → Página de detalhes do filme específico

## 🚀 Deploy

Para gerar uma versão de produção, execute:

```bash
npm run build
O projeto pode ser facilmente implantado em plataformas como:

Vercel

Netlify


📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

✉️ Contato

bryanabranches@gmail.com

GitHub - bryan-abranches

LinkedIn - https://www.linkedin.com/in/bryan-abranches/

Feito com ❤️ e React.js.
```
