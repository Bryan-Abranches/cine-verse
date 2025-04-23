# 🎬 CineVerse

## 📌 Introdução

**CineVerse** é um projeto pessoal criado para aprofundar conhecimentos em React.js. A aplicação permite aos usuários explorar filmes, visualizar detalhes e interagir com uma interface moderna e responsiva.

---

## 🛠️ Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para projetos front-end.
- **JavaScript (ES6+)**: Linguagem de programação utilizada no desenvolvimento.
- **HTML5 & CSS3**: Marcação e estilização da aplicação.

---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para clonar e executar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Bryan-Abranches/cine-verse.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd cine-verse
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173`.

---

## 📁 Estrutura de Pastas

```
cine-verse/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

- **public/**: Arquivos estáticos públicos.
- **src/assets/**: Imagens e outros recursos estáticos.
- **src/components/**: Componentes reutilizáveis da interface.
- **src/pages/**: Páginas principais da aplicação.
- **App.jsx**: Componente raiz que define as rotas e estrutura principal.
- **main.jsx**: Ponto de entrada da aplicação.

---

## 🧩 Componentes Principais

- **Header**: Componente de cabeçalho com navegação.
- **MovieCard**: Exibe informações resumidas de um filme.
- **MovieDetails**: Mostra detalhes completos de um filme selecionado.
- **SearchBar**: Permite buscar filmes por título.

Cada componente recebe props específicas para renderizar dados dinâmicos, como informações de filmes e callbacks de eventos.

---

## 📦 Gerenciamento de Estado

O projeto utiliza o **useState** e **useEffect** do React para gerenciamento de estado local e efeitos colaterais, como chamadas à API. Não há uso de bibliotecas externas como Redux ou Context API neste projeto.

---

## 🌐 Rotas

O roteamento é gerenciado pelo **React Router DOM**. As principais rotas incluem:

- `/`: Página inicial com listagem de filmes.
- `/movie/:id`: Página de detalhes de um filme específico.

---

## 🎨 Estilização

A estilização é feita com **CSS Modules**, permitindo escopo local para estilos e evitando conflitos de classes.

---

## 🧪 Testes

Atualmente, o projeto não possui testes automatizados implementados. Recomenda-se o uso de bibliotecas como **Jest** e **React Testing Library** para testes futuros.

---

## 🚀 Build e Deploy

Para gerar uma build de produção:

```bash
npm run build
```

O projeto pode ser hospedado em plataformas como **Vercel** ou **Netlify**. Para implantar no Vercel:

1. Acesse [https://vercel.com](https://vercel.com) e crie uma conta.
2. Importe o repositório do GitHub.
3. Configure as opções de build (Vite detecta automaticamente).
4. Clique em "Deploy".

---

## 📄 Licença e Contribuições

Este projeto está sob a licença **MIT**. Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona minha feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.
